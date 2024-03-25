import { useState } from "react";
import BasicSelect from "../../components/BasicSelect.jsx";
import WeeklyallTimetable from "../../components/WeeklyallTimetable.jsx";

function Grouptimetable() {
  const values = ["CS-A", "CS-B", "CS-C", "CS-D", "CS-E"];
  const labels = ["CS-A", "CS-B", "CS-C", "CS-D", "CS-E"];

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <div className="pl-16">
        <BasicSelect
          values={values}
          labels={labels}
          onSelect={handleSelectChange}
        />
      </div>
      <WeeklyallTimetable selectedValue={selectedValue} />
    </div>
  );
}

export default Grouptimetable;
