/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Topbar from "./Topbar";

describe("Topbar", () => {
  const user = {
    name: "John Doe",
  };

  it("renders the welcome message with the user name", () => {
    render(<Topbar user={user} />);
    const welcomeMessage = screen.getByText(
      `Hi ${user.name}! WELCOME TO IIT RMS`
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders the account circle icon with a link to /my-profile", () => {
    render(<Topbar user={user} />);
    const accountCircleIcon = screen.getByTestId("account-circle-icon");
    const linkElement = screen.getByTestId("account-circle-link");
    expect(accountCircleIcon).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/my-profile");
  });

  it("renders the file upload icon with a link to /data-upload", () => {
    render(<Topbar user={user} />);
    const fileUploadIcon = screen.getByTestId("file-upload-icon");
    const linkElement = screen.getByTestId("file-upload-link");
    expect(fileUploadIcon).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/data-upload");
  });
});
