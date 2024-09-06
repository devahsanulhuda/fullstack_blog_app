import { LoadingOverlay, Button, Group, Box } from "@mantine/core";

const Loading = ({ visible, toggle }) => {
  return (
    <div>
      {" "}
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "blue", type: "bars" }}
      />
    </div>
  );
};

export default Loading;
