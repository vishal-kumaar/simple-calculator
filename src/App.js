import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const toogleMode = () => {
    if (mode === "dark"){
      setMode("light");
    }
    else {
      setMode("dark");
    }
  }

  return (
    <div className={`${mode==="dark" ? "bg-gray-900" : "bg-light"} h-screen`}>
      <Navbar mode={mode} toogleMode={toogleMode}/>
    </div>
  );
}

export default App;
