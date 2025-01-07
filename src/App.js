import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";

import Sidebar from "./components/sidebar/Sidebar";
import Filter from "./components/filter/Filter";
import Slice from "./components/slice/Slice";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/slice" element={<Slice />} />
      </Routes>
    </div>
  );
}

export default App;
