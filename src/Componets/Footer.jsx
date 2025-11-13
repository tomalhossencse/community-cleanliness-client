import React from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router";
import Container from "./Container";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-white mt-8">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-2  lg:grid-cols-7 justify-between py-16 gap-10 text-sm p-6">
            <div className="col-span-2">
              <h1
                onClick={() => navigate("/")}
                className="text-xl font-medium pb-6 cursor-pointer"
              >
                COMMUNITY-CLEANLINESS
              </h1>
              <p className="text-white">
                At COMMUNITY-CLEANLINESS-WEBAPP,it helps users report and track
                local issues like garbage, illegal construction, broken public
                property, and road damage. It allows contributors to support
                cleanup efforts through donations, while providing a transparent
                view of ongoing and resolved issues in the community.
              </p>
            </div>
            <div className=" col-span-1">
              <h1 className="text-xl font-medium pb-6">Company</h1>
              <ul className="flex flex-col gap-4">
                <a className="text-white" href="#">
                  About Us
                </a>
                <a className="text-white" href="#">
                  Our Mission
                </a>
                <a className="text-white" href="#">
                  Contact Saled
                </a>
              </ul>
            </div>
            <div className=" col-span-1">
              <h1 className="text-xl font-medium pb-6">Services</h1>
              <ul className="flex flex-col gap-4">
                <a className="text-white" href="#">
                  Issues & Services
                </a>
                <a className="text-white" href="#">
                  volunteer Stories
                </a>
                <a className="text-white" href="#">
                  Solved Issues
                </a>
              </ul>
            </div>
            <div className=" col-span-1">
              <h1 className="text-xl font-medium pb-6">Information</h1>
              <ul className="flex flex-col gap-4">
                <a className="text-white" href="#">
                  Privacy Policy
                </a>
                <a className="text-white" href="#">
                  Terms & Conditions
                </a>
                <a className="text-white" href="#">
                  Join Us
                </a>
              </ul>
            </div>
            <div className=" col-span-2">
              <h1 className="text-xl font-medium pb-6">Social Links</h1>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center">
                  <FaSquareXTwitter className="text-white text-xl" />
                  <a className="text-white" href="#">
                    @community-cleanliness
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <FaLinkedin className="text-white text-xl" />
                  <a className="text-white" href="#">
                    @community-cleanliness
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <FaFacebookSquare className="text-white text-xl" />
                  <a className="text-white" href="#">
                    @community-cleanliness
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdMail size={20} className="text-white text-xl" />
                  <a className="text-white" href="#">
                    communityclean@cst.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            © 2025 community-cleanliness-webapp. All rights reserved.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
