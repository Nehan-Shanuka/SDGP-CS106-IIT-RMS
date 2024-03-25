/* eslint-disable no-undef */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as XLSX from "xlsx";
import MultipleSelectCheckmarks from "./DegreeSelection";
import Groupselect from "./GroupSelection";
import axios from "axios";

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
});

export default function InputFileUpload() {
  const [file, setFile] = React.useState(null);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [group, setGroup] = React.useState("");

  const handleDegreePath = (value) => {
    setDegree(value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setSnackbarMessage("No file selected");
      setOpenSnackbar(true);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const arrayBuffer = reader.result;
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Restructure jsonData into the desired format
        const formattedData = {
          groupName: group[0],
          course: degree[0],
          sessions: [],
        };

        // Grouping sessions by day
        const groupedSessions = jsonData.reduce((acc, row) => {
          const {
            day,
            timeSession,
            buildingID,
            hallID,
            type,
            subject,
            lecturer,
          } = row;
          const sessionKey = timeSession;
          if (!acc[day]) {
            acc[day] = {};
          }

          buildingID === undefined
            ? (acc[day][sessionKey] = null)
            : (acc[day][sessionKey] = {
                buildingID,
                hallID,
                type,
                subject,
                lecturer,
              });

          return acc;
        }, {});

        // Formatting sessions into the desired structure
        Object.entries(groupedSessions).forEach(([day, sessions]) => {
          formattedData.sessions.push({ day, timeSessions: sessions });
        });

        axios
          .post(
            "https://sdgp-cs106-iit-rms.onrender.com/timetables",
            formattedData
          )
          .then((response) => {
            console.log("Data posted successfully:", response.data);
            setSnackbarMessage(
              "File uploaded and data posted to server successfully."
            );
            setOpenSnackbar(true);
          })
          .catch((error) => {
            console.error("Error posting data to server:", error);
            setSnackbarMessage(
              "Error posting data to server: " + error.message
            );
            setOpenSnackbar(true);
          });

        console.log("Converted JSON data:", formattedData);
        setSnackbarMessage("File converted to JSON successfully.");
        setOpenSnackbar(true);
      } catch (error) {
        console.error("Error converting file to JSON:", error);
        setSnackbarMessage("Error converting file to JSON: " + error.message);
        setOpenSnackbar(true);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleCancel = () => {
    // Clear the selected file
    setFile(null);
    setSnackbarMessage("Upload cancelled.");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleGroupPath = (value) => {
    setGroup(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <MultipleSelectCheckmarks onDegreeChange={handleDegreePath} />
      <Groupselect degree={degree} onGroupChange={handleGroupPath} />
      {group !== undefined && degree !== undefined ? (
        <div className="flex flex-col my-5">
          <label htmlFor="file-upload">
            <Button
              component="span"
              role={undefined}
              variant="contained"
              color="success" // Change color to green
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              sx={{ marginBottom: 1 }}
            >
              Upload file
            </Button>
          </label>
          <VisuallyHiddenInput
            id="file-upload"
            type="file"
            onChange={handleFileChange}
          />
          {file && (
            <Button
              variant="outlined"
              onClick={handleCancel}
              color="error"
              sx={{
                marginBottom: 1,
                color: "red", // Text color
                borderColor: "red", // Border color
                "&:hover": {
                  backgroundColor: "red", // Background color on hover
                  color: "white", // Text color on hover
                },
              }}
            >
              Cancel
            </Button>
          )}
          <Button
            variant="outlined"
            onClick={handleUpload}
            sx={{ marginBottom: 1 }}
          >
            Upload
          </Button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleCloseSnackbar}
              severity="success"
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </div>
      ) : null}
    </Box>
  );
}
