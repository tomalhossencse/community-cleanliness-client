import { Link, NavLink, useNavigate } from "react-router";
import Container from "./Container";
import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaUser } from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import Swal from "sweetalert2";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, handleLogout } = use(AuthContext);
  const logoutUser = () => {
    handleLogout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successful!",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/issues">Issues</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/all-issues">All Issues</NavLink>
          </li>
          <li>
            <NavLink to="/my-issues">My Issues</NavLink>
          </li>
          <li>
            <NavLink to="/my-contribution">My Contribution</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">CLEANLINESS</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-3">
            {user ? (
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-9 border-2 border-gray-300 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      referrerPolicy="no-referrer"
                      src={
                        user.photoURL ||
                        "https://avatars.githubusercontent.com/u/195260435?v=4"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  <div className=" pb-3 border-b border-b-gray-200">
                    <li className="text-sm font-bold">{user.displayName}</li>
                    <li className="text-xs">{user.email}</li>
                  </div>
                  <li className="mt-3">
                    <Link to={"/profile"}>
                      <FaUser /> Profile
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link to={"/downloads"}>
                      <FaUser /> Downlaods
                    </Link>
                  </li>
                  <li>
                    <a>
                      <input
                        // onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={
                          localStorage.getItem("theme") === "dark"
                        }
                        className="toggle"
                      />
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={logoutUser}
                      className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
              >
                {" "}
                <IoLogIn /> Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
