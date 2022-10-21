import React from "react";
import Lottie from "lottie-react";
import Illustration from "../assets/lottie/Illustration.json";

const LoadingAnimation = () => (
  <Lottie animationData={Illustration} loop={false} />
);

export default LoadingAnimation;
