import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const LottieClient = (props) => {
  return <Lottie {...props} />;
};

export default LottieClient;
