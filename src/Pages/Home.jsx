import React from "react";
import Banner from "../Componets/Banner";
import RecentComplaints from "../Componets/RecentComplaints";
import CategorySection from "../Componets/CategorySection";
import CommunityStats from "../Componets/CommunityStats ";
import JoinCleanDrive from "../Componets/JoinCleanDrive";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecentComplaints />
      <CategorySection />
      <CommunityStats />
      <JoinCleanDrive />
    </div>
  );
};

export default Home;
