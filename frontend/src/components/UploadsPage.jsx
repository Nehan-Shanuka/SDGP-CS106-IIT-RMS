/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Uploadicon from "../images/6323.jpg";
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SimpleTypewriter from "./SimpleTypewriting";

// Styled component for visually hidden input
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  marginInlineStart: "10",
});

export default function InputFileUpload() {
  const [file, setFile] = useState(null); // storing the selected file
  const [uploadMessage, setUploadMessage] = useState(null); // storing upload status message
  const [openSnackbar, setOpenSnackbar] = useState(false); // controlling Snackbar visibility

  const handleFileChange = (event) => {
    // handling file selection and update the state
    setFile(event.target.files[0]);
    setUploadMessage(null);
  };

  const handleFileUpload = async (dataType) => {
    // handling the file upload process
    try {
      if (!file) {
        // Check if a file is selected
        setUploadMessage("No file selected");
        setOpenSnackbar(true);
        return;
      }

      const reader = new FileReader();
      reader.onload = async (event) => {
        // FileReader onload event for processing the file content
        try {
          const fileContent = event.target.result;
          const parsedData = JSON.parse(fileContent);

          // Determine the type of data and send it to the appropriate endpoint
          let endpoint;
          switch (dataType) {
            case "timetables":
              endpoint = "https://sdgp-cs106-iit-rms.onrender.com/timetables";
              break;
            case "resources":
              endpoint = "https://sdgp-cs106-iit-rms.onrender.com/halls";
              break;
            case "students":
              endpoint = "https://sdgp-cs106-iit-rms.onrender.com/students";
              break;
            case "lecturers":
              endpoint = "https://sdgp-cs106-iit-rms.onrender.com/lecturers";
              break;
            default:
              setUploadMessage("Invalid data type");
              setOpenSnackbar(true);
              return;
          }

          // Make a POST request to the backend API endpoint
          const response = await axios.post(endpoint, parsedData);

          setUploadMessage("File uploaded successfully");
          setOpenSnackbar(true);
          console.log("File uploaded successfully", response.data);
        } catch (error) {
          // Catch errors related to JSON parsing or uploading
          setUploadMessage("Error uploading file");
          setOpenSnackbar(true);
          console.error("Error parsing JSON or uploading file", error);
        }
      };

      reader.readAsText(file);
    } catch (error) {
      // Catch any other errors in the file upload process
      setUploadMessage("Error uploading file");
      setOpenSnackbar(true);
      console.error("Error uploading file", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    // Function to handle closing the Snackbar
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div
      style={{ paddingBottom: "6rem", marginLeft: "20px", marginRight: "1rem" }}
    >
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          justifyContent: "space-between",
          padding: "0 12rem",
        }}
      >
        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />
            <Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              onClick={() => handleFileUpload("timetables")}
            >
              Upload Timetable JSON File
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </div>
        </Card>

        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />
            <Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              onClick={() => handleFileUpload("resources")}
            >
              Upload Resources JSON File
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </div>
        </Card>

        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />
            <Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              onClick={() => handleFileUpload("students")}
            >
              Upload Student List JSON File
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </div>
        </Card>

        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />
            <Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              onClick={() => handleFileUpload("lecturers")}
            >
              Upload Lecturer Details JSON File
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </div>
        </Card>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {uploadMessage}
        </MuiAlert>
      </Snackbar>
      <div></div>
    </div>
  );
}
