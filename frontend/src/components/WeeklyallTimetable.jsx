import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"; 
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";

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

const WeeklyallTimetable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const colors = ['#FF9999', '#99FF99', '#9999FF', '#FFFF99']; 

  return (
    <div className="flex">

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "50px",
          marginLeft: "50px",
          marginRight: "0px",
          border: "2px solid black",
          borderColor: "black",
          padding: "40px",
          width: "90%",
          borderRadius: "30px",
          backgroundColor: "lightgrey",
          "@media screen and (max-width: 768px)": {
            marginLeft: "0",
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
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((weekday, index) => (
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
                {timetableData
                  .filter(item => 
                    item.sessions?.some(session => session.day === weekday) &&
                    item.groupName === "CS-J" &&
                    item.course === "BSc Computer Science"
                  )
                  .map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.sessions.filter(session => session.day === weekday).map((session, sessionIndex) => (
                        <div key={sessionIndex}>
                          {session.timeSessions && Object.keys(session.timeSessions).map((timeKey, colorIndex) => (
                            <Tooltip key={timeKey} title={session.timeSessions[timeKey]?.lecturer}>
                              <Item color={colors[colorIndex % colors.length]} style={{ fontSize: '15px' }}>
                              <span style={{ fontSize: '20px' }}>
                              {session.timeSessions[timeKey]?.hallID}  {session.timeSessions[timeKey]?.buildingID}  {session.timeSessions[timeKey]?.type.replace("Lecture", "LEC").replace("Tutorial", "TUT")}<br />
                              </span>
                                <span style={{ fontSize: '15px' }}> {/* Apply font size  "Topic" */}
                                  {session.timeSessions[timeKey]?.subject}<br />
                                </span>
                                
                              </Item>
                            </Tooltip>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default WeeklyallTimetable;