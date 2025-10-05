import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navabr"; // NOTE: Check the spelling of 'Navabr'
import About from "./components/About";
import TextInput from "./components/TextInput";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

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
// const removeBodyClass = () => {
//   document.body.classList.remove("bg-primary");
//   document.body.classList.remove("bg-danger");
//   document.body.classList.remove("bg-success");
//   document.body.classList.remove("bg-warning");
//   document.body.classList.remove("bg-light");
//   document.body.classList.remove("bg-white");


//   }
  const toggleMode = (cls) => {
    // removeBodyClass();
    // console.log(cls);
    // document.body.classList.add("bg-" + cls);
    
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "Dark Mode";
    } else {
      setDarkMode("light"); 
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "Light Mode";
    }
  };

  return (
    <Router>
      <div>
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          title="TextTitle"
        />
      
        <Routes>
          <Route
            path="/Home"
            element={<About mode={mode} />}
          />
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
        <Alert alert={alert} />
    </Router>
  );
}

export default App;
