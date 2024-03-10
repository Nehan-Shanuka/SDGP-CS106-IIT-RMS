/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button, Card } from "@mui/material";
import Calender from "../../components/Calender";
import Time from "../../components/TimeSlection";
import Location from "../../components/LocationSelection";
import AvailableHallList from "../../components/AvailableHallList";
import axios from "axios";

export default function Reservation() {
  const [courses, setCourses] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [buildingID, setBuildingID] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5555/halls?buildingID=${buildingID}`;
    axios
      .get(url)
      .then((response) => {
        setCourses(response.data);
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

  return (
    <>
      <section className="flex gap-0 bg-gray-200">
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 3,
            maxHeight: "100vh",
            width: "100%",
          }}
        >
          <div>
            <Calender />
            <Time />
            <Location onLocationChange={handleLocationChange} />
            <Button
              onClick={() => {}}
              variant="contained"
              color="primary"
              sx={{
                marginTop: 1,
                width: "100%",
                backgroundColor: "#D9D9D9",
                color: "#000",

                ":hover": {
                  backgroundColor: "#723E7A",
                  color: "#fff",
                },
              }}
            >
              Search
            </Button>
          </div>

          <AvailableHallList
            color={"#723E7A"}
            status={"Reservation"}
            newcourses={courses}
            newbuildings={buildings}
          />
        </Card>
      </section>
    </>
  );
}
