import { useState , useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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

// const names = [
//   'BSc(Hons) Computer Science',
//   'BSc(Hons) Software Engineering',
//   'BSc(Hons) Artificial Intelligence and Data Science',
// ];

export default function Groupselect({group,onDegreeChange}) {
  const [degreeName, setdegreeName] = useState([]);

  useEffect(() => {
    onDegreeChange(degreeName);
  }, [degreeName, onDegreeChange]);
  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setdegreeName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  console.log(degreeName);

  return (
    <div>
      <FormControl sx={{ marginTop: 1, width: 300  }} className='bg-white'>
        <InputLabel id="demo-multiple-checkbox-label">Select Degree</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={degreeName}
          onChange={handleChange}
          input={<OutlinedInput label="Select Degree" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {group.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={degreeName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}