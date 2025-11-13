import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from "react-router";

const Issue = ({ issue }) => {
  const { title, image, cat, location, amount, _id } = issue;
  return (
    <div className="flex flex-col bg-base-200 p-6 rounded-xl space-y-4 shadow-md">
      <div className="w-full h-[250px]">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="px-2 space-y-4">
        <ul className="flex justify-between text-accent">
          <li className="flex items-center justify-center gap-1">
            <span>
              <TbCategoryPlus />
            </span>
            <span>{cat}</span>
          </li>
          <li className="flex items-center justify-center gap-1">
            <span>
              <CiLocationOn />
            </span>
            <span>{location}</span>
          </li>
        </ul>
        <h1 className="text-black text-[20px] font-semibold">{title}</h1>
        <ul className="flex justify-between text-accent">
          <Link
            to={`/issues-details/${_id}`}
            className="flex items-center justify-center gap-4 text-accent text-md rounded-md transition-transform hover:scale-105 hover:text-primary"
          >
            <span>See Details</span>
            <FaArrowRightLong size={15} />
          </Link>
          <li className="flex items-center justify-center gap-1">
            <span>
              <RiMoneyDollarCircleFill size={20} />
            </span>
            <span>{amount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Issue;
