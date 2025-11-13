import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Animation from "../utility/Animation";
import Container from "./Container";

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
    <div className="mt-24 mb-6 bg-accent-content">
      <Container className="flex items-center justify-between gap-10 p-12">
        <div className="flex-1 space-y-2">
          <h1 className="text-xl md:text-3xl font-medium text-accent">
            Assisting Communities for <br />
            <span className="text-primary">a Better Tomorrow</span>
          </h1>
          <p className="text-sm md:text-md text-accent">
            Working on projects that improve living standards.Building a
            brighter future for everyone.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center gap-14  bg-accent-content">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex justify-center items-center  gap-4">
              <div>
                <img
                  src="https://img.icons8.com/parakeet/48/group.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between items-center">
                <h3 className="text-2xl font-semibold text-primary">
                  {stats.totalUsers}
                </h3>
                <p className="text-xs text-gray-600 font-semibold">
                  Total Users
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end gap-4">
              <div>
                <img
                  className="w-10"
                  src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/external-issue-basic-ui-elements-2.5-sbts2018-outline-color-sbts2018.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between items-center">
                <h3 className="text-2xl font-semibold text-primary">
                  {Number(stats.resolvedIssues) + Number(stats.pendingIssues)}
                </h3>
                <p className="text-xs text-gray-600 font-semibold">
                  Total Issues
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex justify-end items-end gap-4">
              <div>
                <img
                  src="https://img.icons8.com/color/48/clock--v1.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between items-center">
                <h3 className="text-2xl font-semibold text-primary">
                  {stats.pendingIssues}
                </h3>
                <p className="text-xs text-gray-600 font-semibold">
                  Pending Issues
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end gap-4">
              <div>
                <img
                  src="https://img.icons8.com/flat-round/64/checkmark.png"
                  className="w-10"
                />
              </div>
              <div className="flex flex-col justify-between items-center">
                <h3 className="text-2xl font-semibold text-primary">
                  {stats.resolvedIssues}
                </h3>
                <p className="text-xs text-gray-600 font-semibold">
                  Resoved Issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommunityStats;
