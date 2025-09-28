import "./App.css";
import React from "react";
import Navbar from "./components/Navabr";
import About from "./components/About";
import TextInput from "./components/TextInput";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router,  Route, Switch, Link, BrowserRouter, Routes } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setDarkMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "Dark Mode";

      // setTimeout(() => {
      // document.title = "Dark Mode";
      // }, 2000);
      //  setTimeout(() => {
      // document.title = "light Mode";
      // }, 1500);
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "Light Mode";
    }
  };
  return (
    <>
      <Router>
      <div>
         <Navbar mode={mode} toggleMode={toggleMode} title="TextTitle" />
      <Alert alert={alert} />
         <Routes>
           <Route path="/Home" element={<About />} />
        <Route
          path="/About"
          element={
            <TextInput
              showAlert={showAlert}
              mode={mode}
              toggleMode={toggleMode}
              email="Enter the text analyze below"
            />
          }
        />
         </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
