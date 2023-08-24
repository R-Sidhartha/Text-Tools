import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Input from "./components/input.js";
import Alert from "./components/alert.js";
import bg from "./components/pics/texttoolsbg.jpg";
import darkbg from './components/pics/darkbg1.jpg'

function App() {
  const key = "mode";
  const value = localStorage.getItem(key);
  const [mode, setMode] = useState(() => {
    if (value === "light" || value === null) {
      return "dark";
    }
    return "light";
  }); // Set initial mode to "light" if no value found in local storage
  const [color, setcolor] = useState(() => {
    if (value === "light" || value === null) {
      return "white";
    }
    return "black";
  }); // Set initial color to "black" if no value found in local storage

  document.body.style.backgroundColor = value === "dark" ? "#060a14" : "white";
  const [alert, setalert] = useState(null);
  const darkmode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "black";
      setcolor("black");
      showalert("dark mode is enabled", "success");
      document.title = "TextTools-Dark Mode";
    } else {
      setMode("dark");

      document.body.style.backgroundColor = "white";

      setcolor("white");
      showalert("dark mode is disaled", "success");
      document.title = "TextTools-light Mode";
    }
    localStorage.setItem("mode", mode);
  };

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 700);
  };

  return (
    <div
      style={{
        backgroundImage: value === "dark" ? `url(${darkbg})` : `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:'100vh',

      }}
    >
      <Navbar title="TextTools " mode={mode} darkmode={darkmode} />
      <Alert alert={alert} />
      <Input
        heading="Textkit"
        color={color}
        mode={mode}
        showalert={showalert}
      />
    </div>
  );
}

export default App;
