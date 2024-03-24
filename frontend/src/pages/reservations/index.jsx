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

  // Function to handle day change in the calendar
  const handleDayChange = (day) => {
    setDay(day);
  };

  // Fetch hall data based on selected building ID
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

  // Fetch building data on component mount
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

  // Function to handle location (building) change
  const handleLocationChange = (locationName) => {
    setBuildingID(locationName);
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <section className="flex gap-0 bg-gray-200">
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: isSidebarOpen ? 10 : 15,
            paddingY: 3,
            height: "90vh",
            width: "100%",
            transitionDelay: "1s",
          }}
        >
          <div>
            <Calender onDateChange={handleDateChange} onDayChange={handleDayChange} />
            <Location onLocationChange={handleLocationChange} />
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
