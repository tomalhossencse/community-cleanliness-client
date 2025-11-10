import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const AddIssues = () => {
  const { user } = use(AuthContext);
  const [cat, setCat] = useState("Garbage");
  const [status, setStatus] = useState("ongoing");
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
    console.log(newIssues);
    form.reset();
  };
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="w-3xl mx-auto">
          <h1 className="text-4xl font-bold pt-4 text-center">
            Add <span className="text-primary">Issues</span>
          </h1>
          <form
            onSubmit={handleAddIssues}
            className="bg-white p-10 m-4 grid grid-cols-2 gap-x-6"
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Issue Title</legend>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="e.g. Garbage"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <select className="select" value={cat} onChange={handleCatChange}>
                <option disabled={true}>Select a Category</option>
                <option>Garbage</option>
                <option>Illegal Construction</option>
                <option>Broken Public Property</option>
                <option>Road Damage</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Amount ($)</legend>
              <input
                name="amount"
                type="number"
                className="input w-full"
                placeholder="e.g. 18.5"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
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
            </fieldset>

            <fieldset className="fieldset col-span-2">
              <legend className="fieldset-legend">Your Issues Image URL</legend>
              <input
                name="image"
                type="text"
                className="input w-full"
                placeholder="https://..."
                required
              />
            </fieldset>
            <fieldset className="fieldset col-span-1">
              <legend className="fieldset-legend">Location</legend>
              <input
                name="location"
                type="text"
                className="input w-full"
                placeholder="City, Country"
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                name="email"
                type="text"
                className="input w-full"
                placeholder="leli31955@nrlord.com"
                value={user.email}
              />
            </fieldset>

            <fieldset className="fieldset col-span-2">
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
    </div>
  );
};

export default AddIssues;
