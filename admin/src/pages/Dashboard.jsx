import { useMantineColorScheme } from "@mantine/core";
import React, { useEffect } from "react";
import useStore from "../store";
import { useDisclosure } from "@mantine/hooks";
import { useAnalytics } from "../hooks/post-hook";
import { Toaster, toast } from "sonner";
import Stats from "../components/Stats";
import Graph from "../components/Graph";
import clsx from "clsx";
import { RecentFollowerTable } from "../components/Table";

const Dashboard = () => {
  const { colorScheme } = useMantineColorScheme();
  const { user } = useStore();

  const [visible, { toggle }] = useDisclosure(false);
  const theme = colorScheme === "dark";

  const { data, isPending, mutate } = useAnalytics(toast, toggle, user?.token);

  useEffect(() => {
    mutate();
  }, []);

  console.log(data);
  return (
    <div className="w-full">
      <Stats dt={data} />

      <div className=" w-full py-8">
        {" "}
        <p className=" py-5 text-base font-medium">
          View Stats for last 28 days
        </p>
        <Graph dt={data?.viewStats} />
        <div className=" flex gap-6 flex-col md:flex-row py-6">
          {/* recent followers*/}

          <div className=" w-full md:w-1/3">
            <span
              className={clsx(
                "py-5 text-base font-medium",
                theme ? "text-white" : "text-slate-600"
              )}
            >
              Recent Followers
            </span>
            <RecentFollowerTable data={data?.lastFollowers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
