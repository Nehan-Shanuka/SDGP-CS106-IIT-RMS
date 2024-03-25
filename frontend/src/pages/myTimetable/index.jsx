/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import Calender from "../../components/Calender";
import RedirectButton from "../../components/RedirectButto";
import WeeklyTimetable from "../../pages/weeklyTimetable";
import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

export default function MyTimetable({ user }) {
  const [selectedDate, setSelectedDate] = useState();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const [day, setDay] = useState(daysOfWeek[today.getDay()]);
  const [timetables, setTimetables] = useState([]);
  const [group, setGroup] = useState(user.group);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDayChange = (day) => {
    setDay(day);
  };

  useEffect(() => {
    const url = `https://sdgp-cs106-iit-rms.onrender.com/timetables`;
    axios
      .get(url)
      .then((response) => {
        setTimetables(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [item, setItem] = useState([]);

  useEffect(() => {
    // Update the item array whenever the day state changes
    setItem(generateItems());
  }, [day, timetables, group]);

  let filteredTimetable = timetables;
  // check if the user has a group field
  if (user.group !== null) {
    // setGroup(user.group);
    filteredTimetable = timetables.filter((slot) => slot.groupName === group);
  }

  const generateItems = () => {
    const item = [];
    let sessionsArray = [];

    filteredTimetable.forEach((slot) => {
      slot.sessions.forEach((session) => {
        if (session.day === day) {
          sessionsArray = [];
          session.timeSessions["time_01"] !== null
            ? sessionsArray.push(session.timeSessions["time_01"])
            : sessionsArray.push(null);
          session.timeSessions["time_02"] !== null
            ? sessionsArray.push(session.timeSessions["time_02"])
            : sessionsArray.push(null);
          session.timeSessions["time_03"] !== null
            ? sessionsArray.push(session.timeSessions["time_03"])
            : sessionsArray.push(null);
          session.timeSessions["time_04"] !== null
            ? sessionsArray.push(session.timeSessions["time_04"])
            : sessionsArray.push(null);
        }
      });
    });

    for (let i = 0; i < 4; i++) {
      if (sessionsArray[i] === null || sessionsArray[i] === undefined) {
        item.push(
          <Box
            sx={{
              backgroundColor:
                sessionsArray[i] !== null && sessionsArray[i] !== undefined
                  ? "#3E737A"
                  : "#723E7A",
              color: "#fff",
              borderRadius: 5,
              padding: 2,
              justifyContent: "space-between",
              width: { xs: "100%", md: "23rem" },
            }}
          >
            <div className="flex justify-between items-center">
              <p className="text-xl">
                {i === 0
                  ? "08.30 - 10.30"
                  : i === 1
                  ? "10.30 - 12.30"
                  : i === 2
                  ? "13.30 - 15.30"
                  : "15.30 - 17.30"}
              </p>
              <div>
                <Button
                  sx={{
                    backgroundColor:
                      (sessionsArray[i] !== null) !== null
                        ? "#D9D9D9"
                        : undefined,
                    color: "#000",
                  }}
                >
                  {"  -  "}
                </Button>
              </div>
            </div>

            <p className="text-2xl mt-2.5 mb-1.5">Nothing Scheduled</p>
            <p className="text-xl mt-1.5 mb-1.5">Not Selected</p>

            <div className="flex justify-between items-center">
              <p className="text-5xl"></p>
              <div className="flex justify-center items-center text-center text-black w-20 h-20 bg-stone-200 rounded-full relative">
                <p className="flex items-center text-4xl font-semi-bold text-center">
                  {/* {sessions[i].buildingID} */}
                </p>
              </div>
            </div>
          </Box>
        );
      } else {
        item.push(
          <Box
            sx={{
              backgroundColor:
                sessionsArray[i] !== null ? "#3E737A" : "#723E7A",
              color: "#fff",
              borderRadius: 5,
              padding: 2,
              justifyContent: "space-between",
              width: { xs: "100%", md: "23rem" },
            }}
          >
            <div className="flex justify-between items-center">
              <p className="text-xl">
                {i === 0
                  ? "08.30 - 10.30"
                  : i === 1
                  ? "10.30 - 12.30"
                  : i === 2
                  ? "13.30 - 15.30"
                  : "15.30 - 17.30"}
              </p>
              <div>
                <Button
                  sx={{
                    backgroundColor:
                      (sessionsArray[i] !== null) !== null
                        ? "#D9D9D9"
                        : undefined,
                    color: "#000",
                  }}
                >
                  {sessionsArray[i].type}
                </Button>
              </div>
            </div>

            <p className="text-2xl mt-2.5 mb-1.5">{sessionsArray[i].subject}</p>
            <p className="text-xl mt-1.5 mb-1.5">{sessionsArray[i].lecturer}</p>

            <div className="flex justify-between items-center">
              <p className="text-5xl">{sessionsArray[i].hallID}</p>
              <div className="flex justify-center items-center text-center text-black w-20 h-20 bg-stone-200 rounded-full relative">
                <p className="flex items-center text-4xl font-semi-bold text-center">
                  {sessionsArray[i].buildingID}
                </p>
              </div>
            </div>
          </Box>
        );
      }
    }
    return item;
  };

  return (
    <div className="flex flex-col">
      <div className="grid justify-items-end">
        <div className="mr-10">
          <RedirectButton path="/weekly-timetble" text="Show Weekly" />
        </div>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          margin: { xs: "auto", md: 0 },
          padding: { xs: null, md: 5 },
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "",
          }}
        >
          <div>
            <Calender
              onDateChange={handleDateChange}
              onDayChange={handleDayChange}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: { xs: 10, md: 10 },
          }}
        >
          <div>
            <Card
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "auto", md: "auto auto" },
                gap: 3,
                padding: { xs: 1.35, md: 3 },
                width: "auto",
                backgroundColor: "#D9D9D9",
                borderRadius: 5,
                overflowY: "auto",
                scrollBehavior: "smooth",
                marginTop: { xs: 2, sm: 2, md: 0 },
                height: { xs: "34vh", md: null },
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {item}
            </Card>
          </div>
        </div>
      </Box>
    </div>
  );
}
