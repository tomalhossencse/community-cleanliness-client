import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Loading from "../Componets/Loading";

const Animation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets2.lottiefiles.com/packages/lf20_x62chJ.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      {animationData ? (
        <Lottie animationData={animationData} loop={true} />
      ) : (
        <p>
          <Loading />
        </p>
      )}
    </div>
  );
};

export default Animation;
