import React from 'react';
import './events.scss';

export default function Birth (props) {
  return (
    <div> 
      <div className="birth-event">
        <h2 className="event-title text-center">{props.title}</h2>
        <img src={props.img} alt={`Event on ${props.date}`} />
        <h3 className="text-center">{props.date}</h3>
        <div className="connector center"></div>
      </div>
      <Connector first/>
    </div>
  )
}

function Connector ({first}) {
  return (
    <div className="connector-container">
      {/*<div className="connector-line-left" style={first ? 'none' : 'block'}></div>*/}
      <div className={`connector-dot ${first && 'first'}`}></div>
      <div className="connector-line"></div>
    </div>
  )
}