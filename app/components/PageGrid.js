import React from 'react';
import '../index.scss';
import Alfie from '../images/alfie/alfie.jpeg'

export default function PageGrid (props) {
  return (
    <div className="flex-center">
      <Person name="Alfie" handelChoice={props.handelChoice} img={Alfie} />
{/*      <Person name="Edward" handelChoice={props.handelChoice} />
      <Person name="Toby" handelChoice={props.handelChoice} />
      <Person name="Harry" handelChoice={props.handelChoice} />
      <Person name="Aaron" handelChoice={props.handelChoice} />
      <Person name="Dad" handelChoice={props.handelChoice} />*/}
    </div>
  )
}

function Person (props) {
  return (
    <button 
      onClick={() => props.handelChoice(props.name)} 
      className="flex-center column"
    >
      <img className="circle" src={props.img} />
      <h3>{props.name}</h3>  
    </button>
  )
}