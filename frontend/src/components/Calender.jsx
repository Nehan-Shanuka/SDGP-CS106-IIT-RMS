/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import * as React from 'react';
import { useEffect, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Calendar component for date selection
export default function Calender({ onDateChange, onDayChange }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // State for selected date and current day
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState();
  const [day, setDay] = useState(daysOfWeek[today.getDay()]);

  // console.log(day);

  // Handle date change and update day
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const newDay = new Date(date);
    const dayName = daysOfWeek[newDay.getDay()];
    setDay(dayName);
  };

  // Update parent component on date or day change
  useEffect(() => {
    onDateChange(selectedDate);
    onDayChange(day);
  }, [selectedDate, day, onDateChange, onDayChange]);

  // Render the date calendar
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateCalendar", "DateCalendar", "DateCalendar"]}
      >
        <DemoItem>
          <DateCalendar
            value={selectedDate}
            onChange={handleDateChange}
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: 2,
              ":hover": {
                border: "1px solid black",
              },
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
