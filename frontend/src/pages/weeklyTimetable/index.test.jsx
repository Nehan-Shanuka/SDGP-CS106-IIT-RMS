import { render } from "@testing-library/react";
import WeeklyTimetable from "./WeeklyTimetable";

describe("WeeklyTimetable component", () => {
  it("renders NestedGrid component", () => {
    const user = { user };
    const { getByTestId } = render(<WeeklyTimetable user={user} />);
    expect(getByTestId("nested-grid")).toBeInTheDocument();
  });
});
