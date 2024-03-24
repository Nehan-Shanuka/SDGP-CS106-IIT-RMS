/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "30%",
    },
  },
};

export default function Groupselect({ degree, onGroupChange }) {
  const [groupArray, setGroupArray] = useState([]);
  const [group, setGroup] = useState();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGroup(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if (degree[0] === "BSc(Hons) Computer Science") {
      setGroupArray([
        "CS-A",
        "CS-B",
        "CS-C",
        "CS-D",
        "CS-E",
        "CS-F",
        "CS-G",
        "CS-H",
        "CS-I",
        "CS-J",
        "CS-K",
        "CS-L",
        "CS-M",
        "CS-N",
        "CS-O",
      ]);
    } else if (degree[0] === "BSc(Hons) Software Engineering") {
      setGroupArray([
        "SE-A",
        "SE-B",
        "SE-C",
        "SE-D",
        "SE-E",
        "SE-F",
        "SE-G",
        "SE-H",
        "SE-I",
        "SE-J",
        "SE-K",
        "SE-L",
        "SE-M",
        "SE-N",
        "SE-O",
      ]);
    } else if (
      degree[0] === "BSc(Hons) Artificial Intelligence and Data Science"
    ) {
      setGroupArray([
        "AI-A",
        "AI-B",
        "AI-C",
        "AI-D",
        "AI-E",
        "AI-F",
        "AI-G",
        "AI-H",
        "AI-I",
        "AI-J",
        "AI-K",
        "AI-L",
        "AI-M",
        "AI-N",
        "AI-O",
      ]);
    }
    onGroupChange(group);
  }, [degree, onGroupChange, group]);

  return (
    <div>
      {degree[0] !== undefined ? (
        <FormControl sx={{ marginTop: 1, width: 300 }} className="bg-white">
          <InputLabel id="demo-multiple-checkbox-label">
            Select Degree
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value={group}
            onChange={handleChange}
            input={<OutlinedInput label="Select Degree" />}
            renderValue={(selected) => selected}
            MenuProps={MenuProps}
          >
            {groupArray.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  checked={
                    group !== undefined ? group.indexOf(name) > -1 : null
                  }
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
    </div>
  );
}
