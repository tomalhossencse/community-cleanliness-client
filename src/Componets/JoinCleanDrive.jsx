import React from "react";
import Container from "./Container";

const JoinCleanDrive = () => {
  return (
    <div className="py-6 px-6">
      <Container className="flex items-center justify-between">
        <div className="p-4">
          <img src="https://i.ibb.co.com/9XNGWG9/Asset-1.png" alt="" />
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Join Our Clean Drive
          </h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Take part in our upcoming community clean drive and help make Dhaka
            a cleaner, greener city. Your small action can bring a big change to
            our neighborhoods!
          </p>
          <button className="px-6 py-3 bg-green-500 text-white font-bold text-md rounded-md shadow-md hover:bg-black transition-transform hover:scale-105">
            Join the Drive
          </button>
        </div>
      </Container>
    </div>
  );
};

export default JoinCleanDrive;
