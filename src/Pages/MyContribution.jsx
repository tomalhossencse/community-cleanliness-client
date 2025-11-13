import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Componets/Container";
import { DateFormat } from "../utility/DateFormat";
import Loading from "../Componets/Loading";
import DownlaodPdf from "./DownlaodPdf";
import Animation from "../utility/Animation";

const MyContribution = () => {
  const { user } = use(AuthContext);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://community-cleanliness-server-alpha.vercel.app/my-contributions?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setContributions(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <Animation />;
  }
  return (
    <Container>
      <div className="overflow-x-auto w-full  mt-20">
        <table className="table w-full table-zebra">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>No.</th>
              <th>Issue Title</th>
              <th>Category</th>
              <th>Paid Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {contributions.map((contribution, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar ">
                      <div className="mask mask-squircle h-10 w-10">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                    <div className="min-w-[200px]">
                      <div className="font-semibold">{contribution.title}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap">
                  <span className="badge badge-ghost badge-sm">
                    {contribution.category}
                  </span>
                </td>
                <td>${contribution.amount}</td>
                <td className="whitespace-nowrap">
                  {DateFormat(contribution.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <DownlaodPdf contributions={contributions} />
      </div>
    </Container>
  );
};

export default MyContribution;
