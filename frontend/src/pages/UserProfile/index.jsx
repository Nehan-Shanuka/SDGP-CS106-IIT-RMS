/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function ProfilePage({ userFromDB, onLogout }) {
  const [user, setUser] = useState(userFromDB);

  const handleLogout = () => {
    setUser(null);
    onLogout(user);
  };
  useEffect(() => {
    if (user === null) onLogout(user);
  }, [user, onLogout]);

  const userData = {
    name: "Lionel Messi",
    indexNo: "101010",
    level: "100",
    course: "Computer Science",
    email: "example@example.com",
    phone: "(097) 234-5678",
    mobile: "(098) 765-4321",
    address: "Bay Area, San Francisco, CA",
    profilePicture:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
  };

  return (
    <div>
      <div className="flex justify-end mt-[-30px]">
        <div className="flex justify-end pt-5 pr-5 space-x-2">
          {/* <Button variant="contained" color="info" style={{ marginRight: '8px' }}>
      Update Profile
      </Button> */}
        </div>
      </div>
      <section className="container py-2 mt-5">
        <div
          className="flex flex-col items-start justify-center gap-10 lg:flex-row"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <div className="w-full p-8 text-center bg-gray-600 rounded-lg lg:w-1/4">
            <img
              src={userData.profilePicture}
              alt="avatar"
              className="mx-auto mb-4 rounded-full w-36 h-34"
            />
            {<p className="mb-1 text-white">{userFromDB.name}</p>}
            <div className="flex justify-center gap-1">
              {/* <button className="px-5 py-2 text-white bg-blue-500 rounded">{userData.level}</button>
              <button className="px-5 py-2 text-white bg-blue-500 rounded">{userData.course}</button> */}
            </div>
          </div>

          <div
            className="w-full bg-gray-600 rounded-lg lg:w-2/3 p-7"
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: "auto",
              color: "white",
            }}
          >
            <UserInfo label="Full Name : " value={userFromDB.name} />
            <UserInfo label="Email : " value={userFromDB.email} />
            <UserInfo label="Role : " value={userFromDB.role} />
          </div>
        </div>

        <div className=" ml-[46%] mt-[1%]">
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </section>
    </div>
  );
}

function UserInfo({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex">
        <span className="w-1/3 text-gray-100">{label}</span>
        <span className="flex-1 text-muted">{value}</span>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default ProfilePage;
