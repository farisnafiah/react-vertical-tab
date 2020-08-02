import React from "react";
import "./VTcontent.css";

function VTcontent(props) {
  let data = props.data.expData;

  return (
    <div
      key={props.index}
      className="section__Jobs-styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4>{data.position}</h4>
      <h5>{data.period}</h5>
      {data.details.map(detail => (
        <p className="section__Jobs-detail">{detail}</p>
      ))}
    </div>
  );
}

export default VTcontent;
