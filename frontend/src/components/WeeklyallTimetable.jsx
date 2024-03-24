/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import RedirectButton from "../RedirectButto";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "../assets/ani2.json"

// Styled component for individual timetable item
const Item = styled("div")(({ theme, color }) => ({
  backgroundColor: color,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  borderRadius: "10px",
  margin: "10px",
}));

// Component for displaying the weekly timetable
const WeeklyallTimetable = ({ selectedValue }) => {
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch timetable data from the server on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/timetables");
        console.log("Response data:", response.data);
        setTimetableData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching timetable data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Display loading message while fetching data
  useEffect(() => {
    let timer;
    if (loading) {
      // Set timeout for 3 seconds before showing error
      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    return () => clearTimeout(timer); // Clean up the timer
  }, [loading]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={80} />
      </Box>
    );
  }


  if (error) {
    return <Error/>;
  }

  // Color options for timetable items
  const colors = ["#FF9999", "#99FF99", "#9999FF", "#FFFF99"];

  return (
    <div className="flex flex-col">
      <div className="grid justify-items-end">

      </div>
      {/* Container for displaying the weekly timetable */}
      <Box
        sx={{
          flexGrow: 1,
          margin: "auto",
          marginTop: 5,
          padding: "40px",
          width: "90%",
          borderRadius: "30px",
          backgroundColor: "#D9D9D9",
          overflowY: "auto",
          scrollBehavior: "smooth",
          height: { xs: "77.5vh", md: null },
          "&::-webkit-scrollbar": {
            display: "none"},
          "@media screen and (max-width: 768px)": {
            margin: "auto",
            marginTop: "20px",
            width: "90%",
            padding: "20px",
          },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* Iterate over each weekday */}
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (weekday, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: "20px", textAlign: "center" }}
                  >
                    {weekday}
                  </Typography>
                  {/* Filter and map timetable data for the selected group and course */}
                  {timetableData
                    .filter(
                      (item) =>
                        item.sessions?.some(
                          (session) => session.day === weekday
                        ) &&
                        item.groupName === selectedValue &&
                        item.course === "BSc Computer Science"
                    )
                    .map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {/* Map sessions for the current day */}
                        {item.sessions
                          .filter((session) => session.day === weekday)
                          .map((session, sessionIndex) => (
                            <div key={sessionIndex}>
                              {/* Map time sessions for the current session */}
                              {session.timeSessions &&
                                Object.keys(session.timeSessions).map(
                                  (timeKey, colorIndex) => (
                                    <Tooltip
                                      key={timeKey}
                                      title={
                                        session.timeSessions[timeKey]?.lecturer
                                      }
                                    >
                                      {/* Render individual timetable item */}
                                      <Item
                                        color={
                                          session.timeSessions[timeKey] === null
                                            ? "#723E7A"
                                            : "#3E737A"
                                        }
                                        // style={{ fontSize: "15px" }}
                                        sx={{ color: "#fff" }}
                                      >
                                        {/* <span style={{ fontSize: "20px" }}> */}
                                          <div className="flex justify-between mx-0">
                                            <div className="text-[1.4rem]">
                                              {
                                                session.timeSessions[timeKey]
                                                  ?.hallID
                                              }
                                            </div>
                                            <div className="flex items-center bg-[#D9D9D9] w-fit text-black rounded-md text-[1.2rem] text-center px-1 align-center">
                                              <div>
                                                {session.timeSessions[
                                                timeKey
                                              ]?.type
                                                .replace("Lecture", "LEC")
                                                .replace("Tutorial", "TUT")}
                                              </div>
                                            </div>
                                            <div className="flex items-center bg-[#D9D9D9] w-fit text-black rounded-full text-[1.2rem] text-center px-1 align-center">
                                              <div>
                                                {
                                                session.timeSessions[timeKey]
                                                  ?.buildingID
                                              }
                                              </div>
                                              
                                            </div>
                                          </div>
                                        {/* </span> */}
                                        <div>
                                          <div className="text-sm my-1">
                                            {timeKey === "time_01" ? "08.30 - 10.30" : timeKey === "time_02" ? "10.30 - 12.30" : timeKey === "time_03" ? "13.30 - 15.30" : "15.30 - 17.30"}
                                          </div>
                                        </div>
                                        <div className="text-base my-2">
                                         {/* Apply font size for the subject */}
                                          {session.timeSessions[timeKey]
                                            ?.subject ===
                                          "Object Oriented Programming"
                                            ? "OOP"
                                            : session.timeSessions[timeKey]
                                                ?.subject}
                                        </div>
                                      </Item>
                                    </Tooltip>
                                  )
                                )}
                            </div>
                          ))}
                      </div>
                    ))}
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default WeeklyallTimetable;
