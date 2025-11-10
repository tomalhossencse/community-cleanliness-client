import React, { use } from "react";
import Container from "./Container";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignInuser, handleGoogleSignIn } = use(AuthContext);
  const handleOnsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleSignInuser(email, password)
      .then(() => {
        // console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signin Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(location?.state || "/");
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
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(() => {
        // console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in with google Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="my-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-center pt-4 font-bold text-3xl">Login</h1>
        <div className="card-body">
          <form onSubmit={handleOnsubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          {/* google */}
          <button
            onClick={googleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <div className="text-center text-md">
            <p className="">
              New to our website? Please {""}
              <NavLink
                className="link link-hover text-blue-600"
                to={"/register"}
              >
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
