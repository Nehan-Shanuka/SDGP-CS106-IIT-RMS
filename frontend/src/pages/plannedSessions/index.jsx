/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button, Card } from "@mui/material";
import Calender from "../../components/Calender";
import ReservationHallList from "../../components/PlannedSessionHallList";
import Time from "../../components/TimeSlection";
import Location from "../../components/LocationSelection";
import Degree from "../../components/DegreeSelection";
import Level from "../../components/LevelSelection";
import Module from "../../components/ModuleSelection";
import Type from "../../components/TypeSelection";
import Group from "../../components/GroupSelection";
import axios from "axios";

export default function PlannedSessions() {
  const [reservations, setReservations] = useState([]);
  const [halls, setHalls] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [buildingID, setBuildingID] = useState([]);
  const [confirmation] = useState(true);
  const [selectedDate, setSelectedDate] = useState();
  const [moduleName, setModuleName] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5555/reservations?confirmation=${confirmation}&subject=${moduleName}&buildingID=${buildingID}`;
    axios
      .get(url)
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [confirmation, moduleName, buildingID]);

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

  const handleModuleChange = (moduleSelect) => {
    setModuleName(moduleSelect);
    console.log("In the method ", moduleName);
  };

  return (
    <>
      <section className="flex gap-0 bg-gray-200">
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 3,
            maxHeight: "100vh",
          }}
        >
          <div>
            <Calender onDateChange={handleDateChange} />
          </div>

          <div>
            <Time />
            <Location onLocationChange={handleLocationChange} />
            <Degree />
            <Level />
            <Module onModuleChange={handleModuleChange} />
            <Type />
            {/* <Group /> */}
            {/* <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 1,
                width: "100%",
                backgroundColor: "#D9D9D9",
                color: "#000",

                ":hover": {
                  backgroundColor: "#3E737A",
                  color: "#fff",
                },
              }}
            >
              Search
            </Button> */}
          </div>
          <ReservationHallList
            color={"#3E737A"}
            status={"Planned Sessions"}
            newcourses={reservations}
            newhalls={halls}
            newbuildings={buildings}
          />
        </Card>
      </section>
    </>
  );
}
