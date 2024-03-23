// In UploadPage.js
import UploadsPage from "../../components/UploadsPage";
import SimpleTypewriter from "../../components/SimpleTypewriting";
import MultiActionAreaCard from "../../components/MultiActionAreaCard";
import { Button, Card } from "@mui/material";
import img1 from "../../assets/time1.jpg"
import img2 from "../../assets/student.png"
import img3 from "../../assets/users.jpeg"


export default function UploadPage() {
  return (
    <div>
<SimpleTypewriter words={["Timetables  "," Student List ","Users Details"]} text={"Upload " }/>
<Card sx={{
  backgroundColor: "#f0f0f0",
  padding: "20px",
  width: "80%", // Initial width
  margin: "auto", // Center the card horizontally
  '@media (max-width: 768px)': {
    width: "90%", // Adjust width for smaller screens
    padding: "10px" // Adjust padding for smaller screens
  }
}}>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
  <MultiActionAreaCard type={"Timetables"} img={img1} path={"/Timetable-upload"} texts={"Welcome to our dedicated platform where you can effortlessly upload your timetables. Your schedules will be securely saved in our database, ensuring easy access whenever you need them. "} />
    <MultiActionAreaCard type={"Students"} img={img2} path={"/Students-Details-upload"} texts={"Just click the link below to upload your student list and let us handle the rest! Our efficient solution organizes students into groups effortlessly, saving you time and hassle"}/>
    <MultiActionAreaCard type={"Users"} img={img3} path={"/Users-Details-upload"}  texts={"Click the link below to submit your user list for web access. This streamlined approach simplifies user management, ensuring easy access to the website and enhancing accessibility."}/>
  </div>
</Card>
    </div>


    


  );
};