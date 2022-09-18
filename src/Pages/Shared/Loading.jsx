import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <InfinitySpin width="350" color="#000000" />
    </div>
  );
};

export default Loading;
