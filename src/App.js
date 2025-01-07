import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";

import Sidebar from "./components/sidebar/Sidebar";
import Filter from "./components/filter/Filter";
import Slice from "./components/slice/Slice";
import Every from "./components/every/Every";
import Fill from "./components/fill/Fill";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/slice" element={<Slice />} />
        <Route path="/every" element={<Every />} />
        <Route path="/fill" element={<Fill />} />
      </Routes>
    </div>
  );
}

export default App;
