import AdvanceFile from "../../components/AdvanceFile";
import ParagraphWithReadMore from "../../components/Readinoptin";
import img1 from"../../assets/timeexel.png";
import img2 from"../../assets/upl.png"

export default function  StudentsUpload() {
  return (
    <div style={{
      backgroundImage: `url(${img2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', 
    }}>
      <div style={{ padding: '20px' }}> 
        <ParagraphWithReadMore
          title={"Students Details Upload"}
          text={"Welcome to our Students Details Upload Page! Uploading your Student lists has never been easier. Follow these simple steps to get started: Prepare Your Excel File: Ensure all relevant columns in your Excel file are filled out correctly. This step is crucial for a smooth upload process. Select Your File: Click the green Upload File button below to navigate to your prepared Excel file. This action will open a dialog box where you can select the file you wish to upload.Upload Your File: After selecting the relevant Excel file, finalize the upload by clicking the blue upload icon below. This will initiate the process of uploading your file to our system.Conversion to JSON: Once uploaded, your Excel file will be automatically converted into a JSON file and securely stored in our database. This conversion ensures that your timetable is easily accessible and manageable within our system.Follow these steps to upload your Students list effortlessly."}
          maxChars={150}
          image={img1}
        />
        <div style={{ marginBottom: '20px' }}></div> 
        <AdvanceFile />
      </div>
    </div>
  );
}
