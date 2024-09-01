import { useParams } from "react-router-dom";
import useStore from "../store";
import { FaUserCheck } from "react-icons/fa";
import { useState } from "react";
import { popular, posts, writer } from "../utils/dummyData";
import { formatNumber } from "../utils";
import {
  Button,
  Card,
  Pagination,
  PopularPosts,
  PopularWriters,
} from "../components";

const WriterPage = () => {
  const { user } = useStore();
  const { id } = useParams();
  const numOfPages = 4;
  const [page, setPage] = useState(0);

  const handlePageChange = (val) => {
    setPage(val);
    console.log(val);
  };

  // const [writer, setWriter] = useState(null);

  const followerIds = writer.followers.map((f) => fetch.followerId);

  if (!writer)
    return (
      <div className="w-full h-full py-8 flex items-center justify-center">
        <span className="text-lg text-slate-500">No Writer Found</span>
      </div>
    );
  return (
    <div className="px-0 2xl:px-20">
      <div className="w-full md:h-60 flex flex-col gap-5 items-center md:flex-row bg-black dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] mt-5 mb-10 rounded-md p-5 md:px-20">
        <img
          src={writer?.image || "NoProfile"}
          alt="Writer"
          className=" w-48 h-48 rounded-full object-cover border-4 border-slate-400"
        />
        <div className="w-full h-full flex flex-col gap-y-5 md:gap-y-8 items-center justify-center">
          <h2 className="text-white text-4xl 2xl:text-3xl font-bold">
            {writer?.name}
          </h2>
          <div className="flex gap-10">
            <div className="flex flex-col items-center ">
              <p className="text-gray-300 text-2xl font-semibold">
                {formatNumber(writer?.followers?.length ?? 0)}
              </p>
              <span className="text-gray-500">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-300 text-2xl font-semibold">
                {formatNumber(posts?.length ?? 0)}
              </p>
              <span className="text-gray-500">Posts</span>
            </div>
          </div>

          {user?.token && (
            <div>
              {!followerIds?.includes(user?.user?._id) ? (
                <Button
                  label="Follow"
                  onClick={() => {}}
                  styles="text-slate-800 text-semibold md:-mt-4 px-6 py-1 rounded-full bg-white"
                />
              ) : (
                <div className="flex items-center justify-center gap-2 text-white text-semibold md:-mt-4 px-6 py-1 rounded-full border">
                  <span>Following</span>
                  <FaUserCheck />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 2xl:gap-20">
        {/* Left */}
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          {posts?.length === 0 ? (
            <div
              className="w-full h-full py-8 flex justify-center
        "
            >
              <span className="text-lg text-slate-500">
                No Post Available for this category
              </span>
            </div>
          ) : (
            <>
              {posts?.map((post) => (
                <Card key={post?._id} post={post} />
              ))}
              <div className="w-full flex items-center justify-center">
                <Pagination
                  totalPages={numOfPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          )}
        </div>
        {/* Right */}
        <div className="w-full md:w-1/4 flex flex-col gap-y-12">
          {/* Popular Posts */}
          <PopularPosts posts={popular?.posts} />
          {/* Popular Writers */}
          <PopularWriters data={popular?.writers} />
        </div>
      </div>
    </div>
  );
};

export default WriterPage;
