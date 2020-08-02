import React from "react";
import "./styles.css";
import resumeData from "./resumeData.js";

import VerticalTab from "./components/VerticalTab";

export default function App() {
  return (
    <div className="App">
      <VerticalTab data={resumeData.jobs} />
    </div>
  );
}
