import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import { Button } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import RequestForm from "./requestForm";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Item = styled(Paper)(({ color }) => ({
  backgroundColor: color,
  color: "#fff",
  width: "98%",
  marginBottom: 5,
  marginTop: 5,
  borderRadius: 15,
}));

export default function AvailableHallList({ color, halls, buildings, dateSelected, day, isSidebarOpen }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [registationForm, setRegistationForm] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChangedRegistationForm = (changedRegistationForm) => {
    setRegistationForm(changedRegistationForm);
  };

  return (
    <Card
      sx={{
        width: {xs: "100%", sm: "100%", md: "55%"},
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: {xs: 3, sm: 3, md: 0},
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            scrollBehavior: "smooth",
            height: "79.5vh",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {registationForm === false ? (
            halls.map((hall, index) => (
              <Item
                sx={{
                  height: hoveredItem === index ? "200px" : "115px",
                  width: hoveredItem === index ? "100%" : "97%",
                  transition: "height 0.5s ease-in-out",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                color={color}
              >
                <div
                  className="flex justify-between items-center"
                  style={{
                    width: hoveredItem === index ? "95%" : "100%",
                    paddingTop: hoveredItem === index ? "0" : "0",
                    height: hoveredItem === index ? "auto" : "auto",
                  }}
                >
                  <div className="w-1/4">
                    <p className="pl-5 text-5xl">{hall.hallID}</p>
                  </div>

                  <div>
                    <div>
                      <p className="text-xl my-2 mx-0">
                        Capacity: {hall.capacity}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-36">
                    <div className="flex justify-center w-20 h-20 rounded-full bg-[#D9D9D9] text-black">
                      <p className="flex justify-center items-center text-4xl">
                        {buildings.map((building, index) => {
                          if (building._id === hall.buildingID) {
                            return building.buildingID;
                          }
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gridTemplateColumns: "auto auto",
                    width: "100%",
                    visibility: hoveredItem === index ? "visible" : "hidden",
                    height: hoveredItem === index ? "auto" : "0",
                    transition: "height 1.5s ease-in-out",
                    paddingBottom: hoveredItem === index ? "10px" : "0",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 30,
                        transition: "height 0.5s ease-in-out",
                      }}
                    >
                      <p className="m-1">Projectors: {hall.projectorCount}</p>
                      <p className="m-1">
                        Whiteboard:{" "}
                        {hall.whiteboardAvailability
                          ? "Available"
                          : "Not Available"}
                      </p>
                      <p className="m-1">
                        Mic & Speaker:{" "}
                        {hall.micAndSpeacker ? "Available" : "Not Available"}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: 30,
                    }}
                  >
                    <Button
                      onClick={() => setRegistationForm(true)}
                      style={{
                        backgroundColor:
                          hoveredItem === index ? "#D9D9D9" : "#723E7A",
                        color: "#000",
                        width: "150px",
                        alignItems: "center",
                        borderRadius: 25,
                      }}
                    >
                      <h5
                        style={{
                          margin: 0,
                        }}
                      >
                        Request Here
                      </h5>
                    </Button>
                    <NavigationIcon
                      sx={{ transform: "rotate(90deg)", color: "#D9D9D9" }}
                    />
                  </div>
                </div>
              </Item>
            ))
          ) : dateSelected === null || dateSelected === undefined ? (
            setSnackbarOpen(true),
            handleChangedRegistationForm(false)
          ) : (
            <div className="w-full h-full">
              <RequestForm
                onRegistationFormChange={handleChangedRegistationForm}
                hall={halls[hoveredItem]}
                buildings={buildings}
                dateSelected={dateSelected}
                dayFromCalender={day}
              />
            </div>
          )}
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          className="ml-[-1.5%]  "

        >
          <MuiAlert
            onClose={() => setSnackbarOpen(false)}
            severity="warning"
            style={{ backgroundColor: "#AE1A1A", color: "#FFFFFF"}}

          >
            Please select a date
          </MuiAlert>
        </Snackbar>
      </CardContent>
    </Card>
  );
}
