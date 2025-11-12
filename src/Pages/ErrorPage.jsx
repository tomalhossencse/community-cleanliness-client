import React from "react";
import { useNavigate } from "react-router";
import Container from "../Componets/Container";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Container>
        <div className="flex flex-col justify-center items-center space-y-4 my-4">
          <img
            className="p-6"
            src="https://i.ibb.co.com/vCYQfnkP/404.jpg"
            alt=""
          />
          <h1 className="text-4xl text-[#001931] font-bold">
            Oops, page not found!
          </h1>
          <p className="text-[#627382]">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn px-8 text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"
          >
            Go Back
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
