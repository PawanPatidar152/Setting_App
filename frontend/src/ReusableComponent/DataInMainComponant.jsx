import React from "react";
import "./DataInMainComponant.css";
import { Link } from "react-router-dom";

function DataInMainComponant(props) {
  //if link to any other page and a horizontal lie between componant
  if (props.link && props.hr) {
    return (
      <Link to={props.link}>
        <div className="mainInnerComponant">
          <div className="topInnerMainCoponant">
            <div>
              <p>{props.title}</p>
            </div>
            <div id="data">{props.data}</div>
          </div>
          <hr id="hr" />
        </div>
      </Link>
    );
  } 
  //link to any page only
  else if (props.link) {
    return (
      <Link to={props.link}>
        <div className="mainInnerComponant">
          <div className="topInnerMainCoponant">
            <div>
              <p>{props.title}</p>
            </div>
            <div id="data">{props.data}</div>
          </div>
          <br />
        </div>
      </Link>
    );
  } 
  //to show horizontal line only
  else if (props.hr) {
    return (
      <div className="mainInnerComponant">
        <div className="topInnerMainCoponant">
          <div>
            <p>{props.title}</p>
            <p>{}</p>
          </div>
          <div id="data">{props.data}</div>
        </div>
        <hr id="hr" />
      </div>
    );
  } else {
    return (
      <div className="mainInnerComponant">
        <div className="topInnerMainCoponant">
          <div>
            <p>{props.title}</p>
            <p>{}</p>
          </div>
          <div id="data">{props.data}</div>
        </div>
        <br />
      </div>
    );
  }
}

export default DataInMainComponant;
