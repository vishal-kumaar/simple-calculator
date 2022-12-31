import { useState } from "react";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark"){
      setMode("light");
    }
    else {
      setMode("dark");
    }
  }

  return (
    <div className={`${mode==="dark" ? "bg-gray-900" : "bg-light"} h-screen`}>
      <Navbar mode={mode} toggleMode={toggleMode} />
        <Calculator mode={mode} />
    </div>
  );
}

export default App;
