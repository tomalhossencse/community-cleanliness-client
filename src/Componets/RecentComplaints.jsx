import React, { useEffect, useState } from "react";
import Container from "./Container";
import Issue from "./issue";
import Animation from "../utility/Animation";

const RecentComplaints = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://community-cleanliness-server-alpha.vercel.app/recent-complaints"
    )
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        // console.log(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Animation />;
  }
  return (
    <Container className="my-12">
      <h1 className="text-4xl font-semibold text-center mb-6">
        Recent Complaints
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-0 p-4 lg:grid-cols-3 gap-4">
        {issues.map((issue) => (
          <Issue key={issue._id} issue={issue} />
        ))}
      </div>
    </Container>
  );
};

export default RecentComplaints;
