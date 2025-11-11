import React from "react";
import Banner from "../Componets/Banner";
import RecentComplaints from "../Componets/RecentComplaints";
import CategorySection from "../Componets/CategorySection";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecentComplaints />
      <CategorySection />
    </div>
  );
};

export default Home;
