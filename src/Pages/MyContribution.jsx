import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Componets/Container";
import { DateFormat } from "../utility/DateFormat";
import Loading from "../Componets/Loading";
import DownlaodPdf from "./DownlaodPdf";

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
    return <Loading />;
  }
  return (
    <Container>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
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
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{contribution.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {contribution.category}
                  </span>
                </td>
                <td>${contribution.amount}</td>
                <td>{DateFormat(contribution.date)}</td>
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
