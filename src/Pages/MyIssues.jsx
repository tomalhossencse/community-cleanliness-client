import React, { use, useEffect, useState } from "react";
import { DateFormat } from "../utility/DateFormat";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Componets/Container";
import Swal from "sweetalert2";

const MyIssues = () => {
  const [issues, setIssues] = useState([]);
  const { user } = use(AuthContext);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3000/my-issues?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIssues(data);
      });
  }, [user, refetch]);
  const handleIssueDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/issues/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setRefetch(!refetch);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
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
              <th>Amount</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {issues.map((issue, index) => (
              <tr>
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
                      <div className="font-semibold">{issue.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {issue.cat}
                  </span>
                </td>
                <td>${issue.amount}</td>
                <td>{DateFormat(issue.date)}</td>
                <th>
                  <button
                    className="btn btn-success text-white
                   btn-xs"
                  >
                    Update
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleIssueDelete(issue._id)}
                    className="btn btn-warning text-white
                   btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyIssues;
