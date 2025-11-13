import React, { useEffect, useState } from "react";
import Container from "../Componets/Container";
import Issue from "../Componets/issue";
import Loading from "../Componets/Loading";
import Animation from "../utility/Animation";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
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
  const filterIssues = issues.filter((issue) => {
    if (statusFilter && issue.status !== statusFilter) {
      return false;
    }
    if (categoryFilter && issue.cat !== categoryFilter) {
      return false;
    }
    return true;
  });
  if (loading) {
    return <Animation />;
  }
  return (
    <Container className="mt-20">
      <h1 className="text-3xl text-center mb-6 font-bold">
        All <span className="text-blue-700">Issues</span>
      </h1>
      <div className="flex  justify-between px-4">
        <p className="md:text-2xl text-md text-blue-600 font-semibold flex-1">
          Issues found({filterIssues.length})
        </p>
        <div className="flex gap-4 mb-6 flex-2 justify-end">
          {/* Status Filter */}
          <select
            className="select select-bordered"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="ongoing">Pending</option>
            <option value="solved">Resolved</option>
          </select>

          {/* Category Filter */}
          <select
            className="select select-bordered"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Garbage">Garbage</option>
            <option value="Illegal Construction">Illegal Construction</option>
            <option value="Broken Public Property">
              Broken Public Property
            </option>
            <option value="Road Damage">Road Damage</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-0 p-4">
        {filterIssues.length > 0 ? (
          filterIssues.map((issue) => <Issue key={issue._id} issue={issue} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No issues found for this filter.
          </p>
        )}
      </div>
    </Container>
  );
};

export default Issues;
