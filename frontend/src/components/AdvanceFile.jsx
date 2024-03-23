import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as XLSX from 'xlsx';
import BasicSelect from './DegreeSelection';
import MultipleSelectCheckmarks from './DegreeSelection';
import Groupselect from './GroupSelection';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {

  // const group =["BSc(Hons) Computer Science","BSc(Hons) Software Engineering","BSc(Hons) Artificial Intelligence and Data Science"];


  const [file, setFile] = React.useState(null);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [degree,setDegree] = React.useState('');
  const [group,setGroup] = React.useState([]);



  const handledegreePath = (value) =>{
    setDegree(value);
    console.log("jfvjehfvbfvdjnfvdjfnvd")
    console.log(degree[0] === "BSc(Hons) Computer Science")

    // Set the group based on the selected degree
    if (degree[0] === "BSc(Hons) Computer Science") {
      const array1=["CS-A", "CS-B", "CS-C", "CS-D", "CS-E", "CS-F", "CS-G", "CS-H", "CS-I", "CS-J", "CS-K", "CS-L", "CS-M", "CS-N", "CS-O"]
      setGroup(array1);
      console.log("fg")
    }
    if (degree[0] === "BSc(Hons) Software Engineering") {
      setGroup(["SE-A", "SE-B", "SE-C", "SE-D", "SE-E", "SE-F", "SE-G", "SE-H", "SE-I", "SE-J", "SE-K", "SE-L", "SE-M", "SE-N", "SE-O"]);
      console.log("fdd")
    }
    if (degree[0] === "BSc(Hons) Artificial Intelligence and Data Science") {
      setGroup(["AI-A", "AI-B", "AI-C", "AI-D", "AI-E"]);
      console.log("fggg")
    }
  }
  console.log(group)


  // console.log(degree)

  const handleGroupPath = (value2) =>{
    setGroup(value2)

  }
  console.log(degree)

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
        console.log('Array buffer:', arrayBuffer);
        const data = new Uint8Array(arrayBuffer);
        console.log('Data:', data);
        const workbook = XLSX.read(data, { type: 'array' });
        console.log('Workbook:', workbook);
        const sheetName = workbook.SheetNames[0];
        console.log('Sheet name:', sheetName);
        const worksheet = workbook.Sheets[sheetName];
        console.log('Worksheet:', worksheet);
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log('JSON data:', jsonData);

        // Restructure jsonData into the desired format
        const formattedData = {
          groupName: {values},
          course: {degree},
          sessions: []
        };

        // Grouping sessions by day
        const groupedSessions = jsonData.reduce((acc, row) => {
          const { day, timeSession, buildingID, hallID, type, subject, lecturer } = row;
          const sessionKey = timeSession;
          if (!acc[day]) {
            acc[day] = {};
          }
          acc[day][sessionKey] = { buildingID, hallID, type, subject, lecturer };
          return acc;
        }, {});

        // Formatting sessions into the desired structure
        Object.entries(groupedSessions).forEach(([day, sessions]) => {
          formattedData.sessions.push({ day, timeSessions: sessions });
        });

        console.log('Converted JSON data:', formattedData);
        setSnackbarMessage('File converted to JSON successfully.');
        setOpenSnackbar(true);
      } catch (error) {
        console.error('Error converting file to JSON:', error);
        setSnackbarMessage('Error converting file to JSON: ' + error.message);
        setOpenSnackbar(true);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleCancel = () => {
    // Clear the selected file
    setFile(null);
    setSnackbarMessage('Upload cancelled.');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <MultipleSelectCheckmarks onDegreeChange={handledegreePath}/>
      <Groupselect group={group} onDegreeChange={handleGroupPath} />
      
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
      <VisuallyHiddenInput id="file-upload" type="file" onChange={handleFileChange} />
      {file && (
       <Button 
       variant="outlined" 
       onClick={handleCancel} 
       color="error" 
       sx={{
         marginBottom: 1,
         color: 'red', // Text color
         borderColor: 'red', // Border color
         '&:hover': {
           backgroundColor: 'red', // Background color on hover
           color: 'white', // Text color on hover
         },
       }}
     >
       Cancel
     </Button>
      )}
      <Button variant="outlined" onClick={handleUpload} sx={{ marginBottom: 1 }}>
        Upload
      </Button>
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
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
    </Box>
  );
}