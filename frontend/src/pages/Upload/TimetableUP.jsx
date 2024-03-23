import AdvanceFile from "../../components/AdvanceFile";
import ParagraphWithReadMore from "../../components/Readinoptin";
import img1 from"../../assets/timeexel.png";
import img2 from"../../assets/upl.png"

export default function TimetableUpload() {
  return (
    <div style={{
      backgroundImage: `url(${img2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the background covers the entire viewport
    }}>
      <div style={{ padding: '20px' }}> {/* Add padding to center content */}
        <ParagraphWithReadMore
          title={"Timetables Upload"}
          text={"Welcome to our Timetables Upload Page! Uploading your timetable has never been easier. Follow these simple steps to get started: First, prepare your Excel file by ensuring all relevant columns are filled out correctly; this step is crucial for a smooth upload process. Next, select your file by clicking the green 'Upload File' button below, which will open a dialog box allowing you to navigate to and select your prepared Excel file. Once you've selected the relevant Excel file, finalize the upload by clicking the blue upload icon below; this will initiate the process of uploading your file to our system. After your file is uploaded, it will be automatically converted into a JSON file and securely stored in our database. This conversion ensures that your timetable is easily accessible and manageable within our system. Follow these steps to upload your timetable effortlessly. We're here to make sure your experience is smooth and straightforward."}
          maxChars={150}
          image={img1}
        />
        <div style={{ marginBottom: '20px' }}></div> {/* Adding gap */}
        <AdvanceFile />
      </div>
    </div>
  );
}
