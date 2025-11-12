import React, { use, useEffect, useState } from "react";
import Container from "../Componets/Container";
import { useParams } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Componets/Loading";
import Swal from "sweetalert2";
import { DateFormat } from "../utility/DateFormat";
import IssuesNotFoundPage from "./IssuesNotFoundPage";

const IssueDetails = () => {
  const [details, setdetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [contributors, setContributions] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [total, setTotal] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const { user } = use(AuthContext);
  const { id } = useParams();
  const { image, title, cat, location, date, amount, description, _id } =
    details;
  useEffect(() => {
    fetch(`https://community-cleanliness-server-alpha.vercel.app/issues/${id}`)
      .then((res) => {
        if (!res.ok) {
          setNotFound(true);
          setLoading(false);
        }
        return res.json();
      })
      .then((data) => {
        setdetails(data);
        fetch(
          `https://community-cleanliness-server-alpha.vercel.app/my-contributions/${id}`
        )
          .then((res) => res.json())
          .then((data) => {
            setContributions(data);
          });
        setLoading(false);
      });
  }, [id, refetch]);

  // set total

  useEffect(() => {
    const totalContributeAmount = contributors.reduce(
      (sum, item) => sum + Number(item.amount),
      0
    );
    setTotal(totalContributeAmount);
  }, [contributors]);

  const formattedDate = DateFormat(date);
  const handleAddContribute = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const info = form.info.value;
    const newCotribution = {
      issueId: _id,
      title,
      amount,
      name,
      email,
      phone,
      address,
      info,
      date: DateFormat(new Date()),
      category: cat,
      photoURL: user.photoURL,
    };
    console.log(newCotribution);
    fetch(
      "https://community-cleanliness-server-alpha.vercel.app/my-contributions",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCotribution),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          document.getElementById("my_modal_5").close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Contribution Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setRefetch(!refetch);
        }
      });
  };
  if (loading) {
    return <Loading />;
  }
  if (notFound) {
    return <IssuesNotFoundPage />;
  }
  return (
    <div className="bg-base-200 py-16 min-h-[90vh]">
      <Container>
        <div>
          <div className="flex bg-base-100 shadow-md p-8 rounded-2xl gap-8 items-center">
            <div className="flex-1">
              <img className="rounded-xl" src={image} alt="" />
            </div>
            <div className="space-y-6 flex-1">
              <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
              <p className="text-red-600">{cat}</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-base-300 p-2">
                  <FaLocationDot color="blue" size={20} />
                  <p className="text-blue-700 text-lg font-medium">
                    {location}
                  </p>
                </div>
                <div className="flex items-center text-green-600 gap-2 p-2 bg-base-300">
                  <IoIosTime size={20} />

                  <p className="text-lg font-medium">{formattedDate}</p>
                </div>
              </div>
              <div className="font-semibold text-2xl text-pink-500">
                $ {amount}
              </div>
              <div className="bg-blue-100 px-4 py-6 rounded-xl my-4">
                {description}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn flex-1 btn-md text-left bg-linear-to-r from-green-500 to-green-700 text-white"
                >
                  Pay Clean-Up Contribution
                </button>
              </div>
            </div>
          </div>
          {/* table for contributers */}
          <div className="overflow-x-auto mt-20 bg-base-100 py-10 px-20 shadow-sm rounded-2xl">
            <h1 className="text-center font-medium text-xl pb-8 text-green-700">
              All Contributors for this Issues
            </h1>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Contribution Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {contributors.map((contribution, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={contribution.photoURL} />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">
                            {contribution.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-lg font-medium">
                        ${contribution.amount}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-blue-200">
                  <td></td>
                  <td className="text-xl font-medium text-blue-600">
                    ToTal Amount {"    "}=
                  </td>
                  <td>
                    <span className="text-xl font-medium text-blue-600">
                      ${total}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* model */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h1 className="text-center font-semibold text-2xl text-blue-600 p-4">
                Pay Clean-Up Contribution
              </h1>
              <form
                onSubmit={handleAddContribute}
                className="bg-white grid grid-cols-2 gap-x-2"
              >
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Issue Title</legend>
                  <input
                    type="text"
                    name="title"
                    className="input w-full"
                    placeholder="e.g. Garbage"
                    value={title}
                    readOnly
                  />
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
                {/* Contributor Name */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Contributor Name</legend>
                  <input
                    name="name"
                    type="text"
                    className="input w-full"
                    placeholder="Your Name"
                    required
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Email</legend>
                  <input
                    name="email"
                    type="email"
                    className="input w-full"
                    placeholder="leli31955@nrlord.com"
                    value={user.email}
                    readOnly
                  />
                </fieldset>
                {/* phone */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Phone Number</legend>
                  <input
                    name="phone"
                    type="text"
                    className="input w-full"
                    placeholder="+8801XXXXXXXX"
                    required
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Address</legend>
                  <input
                    name="address"
                    type="text"
                    className="input w-full"
                    placeholder="City, Country"
                    required
                  />
                </fieldset>
                {/* info */}
                <fieldset className="fieldset col-span-2">
                  <legend className="fieldset-legend">Additional Info</legend>
                  <input
                    name="info"
                    type="text"
                    className="input w-full"
                    placeholder="Additional Info"
                  />
                </fieldset>

                <button
                  type="submit"
                  className="btn btn-primary w-full col-span-2 my-4 text-lg p-4"
                >
                  Contribute
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </Container>
    </div>
  );
};

export default IssueDetails;
