import React, { useEffect, useState } from "react";
import Container from "../Componets/Container";
import Issue from "../Componets/issue";
import Loading from "../Componets/Loading";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://community-cleanliness-server-alpha.vercel.app/issues")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setLoading(false);
        // console.log(data);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container className="my-6">
      <h1 className="text-4xl text-center mb-6 font-bold">
        All <span className="text-blue-700">Issues</span>
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {issues.map((issue) => (
          <Issue key={issue._id} issue={issue} />
        ))}
      </div>
    </Container>
  );
};

export default Issues;
