/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Calender from "../../components/Calender";
import Location from "../../components/LocationSelection";
import AvailableHallList from "../../components/AvailableHallList";
import axios from "axios";

export default function Reservation({ isSidebarOpen }) {
  const [halls, setHalls] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [buildingID, setBuildingID] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [day, setDay] = useState();

  const handleDayChange = (day) => {
    setDay(day);
  };

  useEffect(() => {
    const url = `http://localhost:5555/halls?buildingID=${buildingID}`;
    axios
      .get(url)
      .then((response) => {
        setHalls(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [buildingID]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/buildings")
      .then((response) => {
        setBuildings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLocationChange = (locationName) => {
    setBuildingID(locationName);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <section className="flex gap-0 bg-gray-200">
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            paddingX: isSidebarOpen ? 10 : 15,
            paddingY: 3,
            height: "90vh",
            width: "100%",
            transitionDelay: "1s",
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
              <Location onLocationChange={handleLocationChange} />
            </div>
          </div>
          <AvailableHallList
            color={"#723E7A"}
            isSidebarOpen={isSidebarOpen}
            halls={halls}
            buildings={buildings}
            dateSelected={selectedDate}
            day={day}
          />
        </Card>
      </section>
    </>
  );
}
