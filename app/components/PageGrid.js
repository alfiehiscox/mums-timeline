import React from 'react';
import '../index.scss';

export default function PageGrid (props) {
  return (
    <div className="page-grid">
      <Person name="Alfie" handelChoice={props.handelChoice} />
      <Person name="Edward" handelChoice={props.handelChoice} />
      <Person name="Toby" handelChoice={props.handelChoice} />
      <Person name="Harry" handelChoice={props.handelChoice} />
      <Person name="Aaron" handelChoice={props.handelChoice} />
      <Person name="Dad" handelChoice={props.handelChoice} />
    </div>
  )
}

function Person (props) {
  return (
    <button 
      onClick={() => props.handelChoice(props.name)} 
      className="flex-center column"
    >
      <div className="circle"></div>
      <h3>{props.name}</h3>  
    </button>
  )
}