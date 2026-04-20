import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const LottieClient = (props) => {
  const { eventListeners = [], ...rest } = props;
  return <Lottie eventListeners={eventListeners} {...rest} />;
};

export default LottieClient;
