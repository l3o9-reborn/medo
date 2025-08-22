"use client";

import Lottie from "lottie-react";
import animationData from "@/public/doc2.json"; 
export default function LottieViewer() {
  return (
    <div className=" xl:w-[600px] h-[400px]">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}
