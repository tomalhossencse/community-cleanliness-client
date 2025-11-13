import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Animation from "../utility/Animation";

const CommunityStats = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    resolvedIssues: 0,
    pendingIssues: 0,
  });

  useEffect(() => {
    fetch(
      "https://community-cleanliness-server-alpha.vercel.app/community-stats"
    )
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Animation />;
  }
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Community Stats
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300">
          <h3 className="text-5xl font-extrabold text-blue-600">
            {stats.totalUsers}
          </h3>
          <p className="text-lg text-gray-600 mt-2 font-semibold">
            Total Users
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300">
          <h3 className="text-5xl font-extrabold text-green-600">
            {stats.resolvedIssues}
          </h3>
          <p className="text-lg text-gray-600 mt-2 font-semibold">
            Issues Resolved
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300">
          <h3 className="text-5xl font-extrabold text-orange-500">
            {stats.pendingIssues}
          </h3>
          <p className="text-lg text-gray-600 mt-2 font-semibold">
            Issues Pending
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
