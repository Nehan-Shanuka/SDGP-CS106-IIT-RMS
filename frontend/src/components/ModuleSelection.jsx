/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Object Oriented Programming",
  "Algorithms and Data Structures",
  "Database Systems",
  "Web Development",
  "Machine Learning",
  "Client Server Architecture",
];

export default function MultipleSelectCheckmarks({ onModuleChange }) {
  const [moduleSelect, setModuleSelect] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setModuleSelect(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    onModuleChange(moduleSelect);
  }, [moduleSelect, onModuleChange]);

  return (
    <div>
      <FormControl sx={{ marginTop: 1, width: "100%" }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Module</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={moduleSelect}
          onChange={handleChange}
          input={<OutlinedInput label="Select Module" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={moduleSelect.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
