import AdvanceUser from "../../components/AdvanceUser";
import ParagraphWithReadMore from "../../components/Readinoptin";
import img1 from "../../assets/timeexel.png";
import img2 from "../../assets/upl.png";

export default function UserUpload() {
  return (
    <div
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire viewport
      }}
    >
      <div style={{ padding: "20px" }}>
        {" "}
        {/* Add padding to center content */}
        <ParagraphWithReadMore
          title={"Users Details Upload"}
          text={
            "Welcome to our Users Details Upload Page! Follow these simple steps to get started: First, prepare your Excel file by ensuring all relevant columns are filled out correctly; this step is crucial for a smooth upload process. Next, select your file by clicking the green 'Upload File' button below, which will open a dialog box allowing you to navigate to and select your prepared Excel file. Once you've selected the relevant Excel file, finalize the upload by clicking the blue upload icon below; this will initiate the process of uploading your file to our system. After your file is uploaded, it will be automatically converted into a JSON file and securely stored in our database. This conversion ensures that your users list is easily accessible and manageable within our system. By following these steps, you can upload your Users list effortlessly."
          }
          maxChars={150}
          image={img1}
        />
        <div style={{ marginBottom: "20px" }}></div>
        <AdvanceUser />
      </div>
    </div>
  );
}
