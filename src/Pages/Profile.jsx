import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Componets/Container";

const Profile = () => {
  const { user } = use(AuthContext);
  const { displayName, email, photoURL } = user;
  // console.log(user);
  return (
    <Container
      className={
        "flex flex-col items-center justify-center space-y-4 min-h-[90vh]"
      }
    >
      <h1 className="text-3xl font-semibold">My profile</h1>
      <img src={photoURL} className="rounded-full" alt="" />
      <div className="text-center">
        <h2>Name : {displayName}</h2>
        <h2>Email : {email}</h2>
      </div>
    </Container>
  );
};

export default Profile;
