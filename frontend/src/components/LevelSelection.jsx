import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

// Constants for styling the Select component's menu
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

// Available level options
const names = [
  'Level 4',
  'Level 5',
  'Level 6',
];

// Component for selecting multiple levels
export default function MultipleSelectCheckmarks() {
  const [locationName, setLocationName] = useState([]);

  // Handler for changing selected level
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocationName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  console.log(locationName);

  return (
    <div>
      {/* Select component for choosing multiple levels */}
      <FormControl sx={{ marginTop: 1, width: '100%' }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Level</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={locationName}
          onChange={handleChange}
          input={<OutlinedInput label="Select Level" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {/* Mapping through available level options */} 
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={locationName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}