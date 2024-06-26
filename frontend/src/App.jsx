/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import Topbar from "./pages/global/Topbar";
import MyTimetable from "./pages/myTimetable";
import WeeklyTimetable from "./pages/weeklyTimetable";
import Reservation from "./pages/reservations";
import PlannedSessions from "./pages/plannedSessions";
import Navbar from "./components/Navbar";
import ExpandableReviewReservation from "./pages/expandableReviewPage";
import UploadsPage from "./pages/Upload";
import Userprofile from "./pages/UserProfile/index";
import Home from "./pages/home/index";
import Authenticator from "./pages/authentication";
import SplashScreen from "./pages/splashScreen";
import SorryCall from "./components/SorryCall";
import axios from "axios";
import Grouptimetable from "./pages/grouptimetable";
import UnderManintainCall from "./components/underDevelopMSG";
import TimetableUpload from "./pages/Upload/TimetableUP";
import UsersUploads from "./pages/Upload/UsersUp";
import StudentUploads from "./pages/Upload/studentUP";
import StdGrouping from "./pages/studentGrouping";

export default function App() {
  // State management
  const [isSidebar, setIsSidebar] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  const [onBoardUser, setOnBoardUser] = useState();
  const [users, setUsers] = useState();
  const [userFromDB, setUserFromDB] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://sdgp-cs106-iit-rms.onrender.com/users"
        );
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  // Simulate loading delay
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout value as needed
  }, []);

  // Handlers for various state updates
  const handleStateChange = (state) => {
    setIsWelcome(state);
  };

  const handleOpen = (open) => {
    setIsSidebar(open);
  };

  const handleUser = (user) => {
    setOnBoardUser(user);
    users?.map((userFromDB) => {
      if (userFromDB.email === user.email) {
        setUserFromDB(userFromDB);
        setIsAuthenticated(true);
      }
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Render different components based on state
  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : !isAuthenticated ? (
        <Authenticator userOnBoard={handleUser} />
      ) : isWelcome ? (
        <Home onStateChange={handleStateChange} />
      ) : (
        !isWelcome && (
          <div
            className={`${
              isWelcome && "overflow-hidden"
            }relative flex h-screen`}
          >
            <Navbar onSidebarOpen={handleOpen} />
            <main className="w-full">
              <Topbar user={userFromDB} />
              <Routes>
                <Route path="/" element={<MyTimetable user={userFromDB} />} />
                <Route
                  path="/my-timetable"
                  element={<MyTimetable user={userFromDB} />}
                />
                <Route
                  path="/reservations"
                  element={
                    <Reservation isSidebarOpen={isSidebar} user={userFromDB} />
                  }
                />
                <Route
                  path="/planned-sessions"
                  element={<PlannedSessions isSidebarOpen={isSidebar} />}
                />
                {userFromDB.adminPrivilege ? (
                  <Route
                    path="/student-grouping"
                    element={<UnderManintainCall />}
                  />
                ) : (
                  <Route path="/student-grouping" element={<SorryCall />} />
                )}
                <Route path="/group-details" element={<UnderManintainCall />} />
                {userFromDB.adminPrivilege ? (
                  <Route
                    path="/review-requests"
                    element={<ExpandableReviewReservation />}
                  />
                ) : (
                  <Route path="/review-requests" element={<SorryCall />} />
                )}
                <Route path="/group-timetable" element={<Grouptimetable />} />
                <Route
                  path="/weekly-timetble"
                  element={<WeeklyTimetable user={userFromDB} />}
                />
                <Route
                  path="/my-profile"
                  element={
                    <Userprofile
                      userFromDB={userFromDB}
                      onLogout={handleLogout}
                    />
                  }
                />
                <Route path="/data-upload" element={<UploadsPage />} />
                <Route path="/Timetable-upload" element={<TimetableUpload />} />
                <Route
                  path="/Users-Details-upload"
                  element={<UsersUploads />}
                />
                <Route
                  path="/Students-Details-upload"
                  element={<StudentUploads />}
                />
              </Routes>
            </main>
          </div>
        )
      )}
    </>
  );
}
