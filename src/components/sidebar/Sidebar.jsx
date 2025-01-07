import { Link } from "react-router-dom";
import "./sidebar.css";
const sidebarData = [
  {
    name: "Filter",
    path: "/filter",
  },
  {
    name: "Slice",
    path: "/slice",
  },
  {
    name: "Every",
    path: "/every",
  },
  {
    name: "Fill",
    path: "/fill",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        {sidebarData.map((data) => (
          <Link to={data.path} className="sidebar-link">
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
