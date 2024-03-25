/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, IconButton } from "@mui/material";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function Topbar({ user }) {
  return (
    <div className="flex flex-col items-center">
      <Box
        maxHeight="9vh"
        display="flex"
        justifyContent="space-between"
        p={2}
        width={"100%"}
      >
        <div>
          <h1 className="text-xl text-[#3E737A]">
            Hi {user.name}! WELCOME TO IIT RMS
          </h1>
        </div>

        {/* User Icon */}
        <Box display="flex">
          {user.adminPrivilege && (
            <Link to="/data-upload">
              <IconButton>
                <FileUploadIcon />
              </IconButton>
            </Link>
          )}
          <Link to="/my-profile">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </Box>
        {/* <hr /> */}
      </Box>
      <hr
        style={{
          color: "black",
          backgroundColor: "#3E737A",
          height: 2,
          width: "95%",
          marginBottom: 5,
        }}
      />
    </div>
  );
}
