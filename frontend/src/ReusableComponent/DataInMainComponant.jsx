import React from "react";
import "./DataInMainComponant.css";
import { Link } from "react-router-dom";

function DataInMainComponant(props) {
  if (props.link && props.hr) {
    return (
      <Link to={props.link}>
        <div className="innerComponant2">
          <div className="topinnercomponent2">
            <div>
              <p>{props.title}</p>
            </div>
            <div id="data">{props.data}</div>
          </div>
          <hr id="hr" />
        </div>
      </Link>
    );
  } else if (props.link) {
    return (
      <Link to={props.link}>
        <div className="innerComponant2">
          <div className="topinnercomponent2">
            <div>
              <p>{props.title}</p>
            </div>
            <div id="data">{props.data}</div>
          </div>
          <br />
        </div>
      </Link>
    );
  } else if (props.hr) {
    return (
      <div className="innerComponant2">
        <div className="topinnercomponent2">
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
      <div className="innerComponant2">
        <div className="topinnercomponent2">
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
