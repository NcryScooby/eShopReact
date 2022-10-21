import React from "react";
import Lottie from "lottie-react";
import Loading from "../assets/lottie/Loading.json";

// change size of spider animation
const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: "0",
  left: "0",
  transform: "scale(0.3)",
};

const LoadingAnimation = () => (
  <div
    style={{
      backgroundColor: "white",
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: "0",
      left: "0",
    }}
  >
    <Lottie animationData={Loading} loop={true} style={styles} />
  </div>
);

export default LoadingAnimation;
