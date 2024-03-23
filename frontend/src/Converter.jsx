// Sample input data
const inputData = [
    {
      groupName: "CS-D",
      Course: "BSc Computer Science",
      Day: "Monday",
      TimeSlot: "time_01",
      "Building ID": "SP",
      "Hall ID": "5LA",
      Type: "Lecture",
      Subject: "Machine Learning",
      Lecturer: "Mr. Nipuna Senanayake",
    },
    {
      groupName: "CS-D",
      Course: "BSc Computer Science",
      Day: "Monday",
      TimeSlot: "time_02",
      "Building ID": "SP",
      "Hall ID": "5LA",
      Type: "Tutorial",
      Subject: "Machine Learning",
      Lecturer: "Miss Shashi Thilakarathna",
    },
    // Add more data entries as needed
  ];
  
  // Function to convert input data to the specified format
  function convertToSpecifiedFormat(inputData) {
    const outputData = [];
  
    // Group input data by groupName and Course
    const groupedData = inputData.reduce((acc, entry) => {
      const key = entry.groupName + entry.Course;
      if (!acc[key]) {
        acc[key] = {
          groupName: entry.groupName,
          course: entry.Course,
          sessions: [],
        };
      }
      acc[key].sessions.push({
        day: entry.Day,
        timeSessions: {
          [entry.TimeSlot]: {
            buildingID: entry["Building ID"],
            hallID: entry["Hall ID"],
            type: entry.Type,
            subject: entry.Subject,
            lecturer: entry.Lecturer,
          },
        },
      });
      return acc;
    }, {});
  
    // Convert grouped data to the specified format
    for (const key in groupedData) {
      outputData.push(groupedData[key]);
    }
  
    return outputData;
  }
  
  // Convert input data to the specified format
  const outputData = convertToSpecifiedFormat(inputData);
  
  // Display the converted data
  console.log(outputData);
  