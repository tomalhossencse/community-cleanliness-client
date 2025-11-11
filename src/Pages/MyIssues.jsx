import React, { use, useEffect, useState } from "react";
import { DateFormat } from "../utility/DateFormat";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Componets/Container";
import Swal from "sweetalert2";
import Loading from "../Componets/Loading";

const MyIssues = () => {
  const [issues, setIssues] = useState([]);
  const { user } = use(AuthContext);
  const [cat, setCat] = useState("Garbage");
  const [status, setStatus] = useState("ongoing");
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const handleCatChange = (e) => {
    setCat(e.target.value);
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/my-issues?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIssues(data);
        setLoading(false);
      });
  }, [user, refetch]);
  const handleIssueSubmit = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const image = form.image.value;
    const location = form.location.value;
    const email = form.email.value;
    const description = form.description.value;
    const updatedIssues = {
      title,
      amount,
      cat,
      image,
      location,
      status,
      email,
      date: new Date(),
      description,
    };
    // console.log(updatedIssues);
    fetch(`http://localhost:3000/issues/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedIssues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Issues Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setRefetch(!refetch);
          document.getElementById(`modal_${id}`).close();
        }
      });
  };
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
              <th>Amount</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {issues.map((issue, index) => (
              <tr key={issue._id}>
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
                    onClick={() =>
                      document.getElementById(`modal_${issue._id}`).showModal()
                    }
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
                  {/* modal */}
                  <dialog
                    id={`modal_${issue._id}`}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <form onSubmit={(e) => handleIssueSubmit(e, issue._id)}>
                        <fieldset className="fieldset grid grid-cols-2">
                          <div className="col-span-2">
                            <legend className="fieldset-legend">
                              Issue Title
                            </legend>
                            <input
                              type="text"
                              name="title"
                              className="input w-full"
                              placeholder="e.g. Garbage"
                              defaultValue={issue.title}
                              required
                            />
                          </div>
                          <div>
                            <legend className="fieldset-legend">
                              Category
                            </legend>
                            <select
                              className="select"
                              defaultValue={issue.cat}
                              onChange={handleCatChange}
                            >
                              <option disabled={true}>Select a Category</option>
                              <option>Garbage</option>
                              <option>Illegal Construction</option>
                              <option>Broken Public Property</option>
                              <option>Road Damage</option>
                            </select>
                          </div>

                          <div>
                            <legend className="fieldset-legend">Status</legend>
                            <div className="flex gap-2">
                              <div className="flex items-center justify-center gap-1">
                                <input
                                  type="radio"
                                  name="status"
                                  className="radio radio-primary"
                                  value="ongoing"
                                  defaultChecked={issue.status === "ongoing"}
                                  onChange={handleChange}
                                />
                                <h1>ongoing</h1>
                              </div>
                              <div className="flex items-center justify-center gap-1">
                                <input
                                  type="radio"
                                  name="status"
                                  className="radio radio-primary"
                                  value="solved"
                                  defaultChecked={issue.status === "solved"}
                                  onChange={handleChange}
                                />
                                <h1>Solved</h1>
                              </div>
                            </div>
                          </div>

                          <div>
                            <legend className="fieldset-legend">
                              Amount ($)
                            </legend>
                            <input
                              name="amount"
                              type="number"
                              className="input w-full"
                              placeholder="e.g. 18.5"
                              required
                              defaultValue={issue.amount}
                            />
                          </div>

                          <div>
                            <legend className="fieldset-legend">
                              Location
                            </legend>
                            <input
                              name="location"
                              type="text"
                              className="input w-full"
                              placeholder="City, Country"
                              defaultValue={issue.location}
                              required
                            />
                          </div>

                          <div className="col-span-2">
                            <legend className="fieldset-legend">Email</legend>
                            <input
                              name="email"
                              type="text"
                              className="input w-full"
                              placeholder="leli31955@nrlord.com"
                              value={user.email}
                              readOnly
                            />
                          </div>
                          <div className="col-span-2">
                            <legend className="fieldset-legend">
                              Your Issues Image URL
                            </legend>
                            <input
                              name="image"
                              type="text"
                              className="input w-full"
                              placeholder="https://..."
                              defaultValue={issue.image}
                              required
                            />
                          </div>

                          <div className="col-span-2">
                            <legend className="fieldset-legend">
                              Simple Description about your Issues
                            </legend>
                            <textarea
                              type="text"
                              name="description"
                              className="input w-full"
                              placeholder="e.g. garbage is big problem of our city..........."
                              defaultValue={issue.description}
                              required
                            />
                          </div>

                          <button className="btn btn-neutral mt-4 col-span-2">
                            Update Issue
                          </button>
                        </fieldset>
                      </form>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-primary">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
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
