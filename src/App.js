import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import pages
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Industry from "./pages/Industry";
import Activities from "./pages/Activities";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "🏠" },
    { name: "Wiki", icon: "📖" },
    { name: "Industry", icon: "🏗️" },
    { name: "Activities", icon: "🎯" },
    { name: "Profile", icon: "👤" },
    { name: "Sign Out", icon: "🚪" },
  ];

  // Render the active page
  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "Wiki":
        return <Wiki />;
      case "Industry":
        return <Industry />;
      case "Activities":
        return <Activities />;
      case "Profile":
        return <Profile />;
      case "Sign Out":
        return <SignOut />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="p-3 text-center navbar">STORM Industries</h4>
        <ul className="list-group list-group-flush">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action d-flex align-items-center"
              onClick={() => setActivePage(item.name)}
              style={{ cursor: "pointer" }}>
              <span className="me-2">{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <div className="navbar p-2 d-flex justify-content-between align-items-center">
          {/* Navbar Title */}
          <h5 className="mb-0"></h5>

          {/* Notification Icon and User Avatar */}
          <div className="d-flex align-items-center">
            <span
              className="me-3"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}>
              🔔
            </span>{" "}
            {/* Notification Icon */}
            <img
              src="https://via.placeholder.com/40" /* Replace with your avatar image URL */
              alt="User Avatar"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="content-area">{renderPage()}</div>
      </div>
    </div>
  );
}

export default App;
