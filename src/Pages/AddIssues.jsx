import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddIssues = () => {
  const { user } = use(AuthContext);
  const [cat, setCat] = useState("Garbage");
  const [status, setStatus] = useState("ongoing");
  // const [issues, setIssues] = useState([]);
  const handleCatChange = (e) => {
    setCat(e.target.value);
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  const handleAddIssues = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const image = form.image.value;
    const location = form.location.value;
    const email = form.email.value;
    const description = form.description.value;
    const newIssues = {
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
    // console.log(newIssues);
    fetch("https://community-cleanliness-server-alpha.vercel.app/issues", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newIssues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Issues Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="mt-20">
      <div className="md:w-3xl w-sm mx-auto">
        <h1 className="text-3xl font-semibold text-accent text-center">
          Add Issues
        </h1>
        <form
          onSubmit={handleAddIssues}
          className="bg-accent-content/60 md:p-6 p-4 md:m-8 my-4"
        >
          <fieldset className="fieldset grid grid-cols-2">
            <div>
              <legend className="fieldset-legend">Issue Title</legend>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="e.g. Garbage"
                required
              />
            </div>

            <div>
              <legend className="fieldset-legend">Category</legend>
              <select className="select" value={cat} onChange={handleCatChange}>
                <option disabled={true}>Select a Category</option>
                <option>Garbage</option>
                <option>Illegal Construction</option>
                <option>Broken Public Property</option>
                <option>Road Damage</option>
              </select>
            </div>

            <div>
              <legend className="fieldset-legend">Amount ($)</legend>
              <input
                name="amount"
                type="number"
                className="input w-full"
                placeholder="e.g. 18.5"
                required
              />
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
                    checked={status === "ongoing"}
                    onChange={handleChange}
                  />
                  <h1>ongoing</h1>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="radio"
                    name="condition"
                    className="radio radio-primary"
                    value="solved"
                    checked={status === "solved"}
                    onChange={handleChange}
                  />
                  <h1>Solved</h1>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <legend className="fieldset-legend">Your Issues Image URL</legend>
              <input
                name="image"
                type="text"
                className="input w-full"
                placeholder="https://..."
                required
              />
            </div>

            <div>
              <legend className="fieldset-legend">Location</legend>
              <input
                name="location"
                type="text"
                className="input w-full"
                placeholder="City, Country"
                required
              />
            </div>

            <div>
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
                Simple Description about your Issues
              </legend>
              <textarea
                type="text"
                name="description"
                className="input w-full"
                placeholder="e.g. garbage is big problem of our city..........."
                required
              />
            </div>
          </fieldset>
          <button
            type="sumbit"
            className="btn btn-primary w-full col-span-2 my-4 text-lg p-4"
          >
            Add Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIssues;
