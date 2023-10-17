import React from "react";
import "./DataInMainComponant.css";
import { Link } from "react-router-dom";

function DataInMainComponant(props) {
  if (props.link) {
    return (
      <Link to={props.link}>
        <div className="innerComponant2">
          <div className="topinnercomponent2">
            <div>
              <p>{props.title}</p>
            </div>
            <div>{props.data}</div>
          </div>
          <hr id="hr" />
        </div>
      </Link>
    );
  } else {
    return (
      <div className="innerComponant2">
        <div className="topinnercomponent2">
          <div>
            <p>{props.title}</p>
            <p>{}</p>
          </div>
          <div id="data" >{props.data}</div>
        </div>
        <hr id="hr" />
      </div>
    );
  }
}

export default DataInMainComponant;
