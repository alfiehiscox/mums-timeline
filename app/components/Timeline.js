import React, {useState} from 'react';

// Styles
import '../index.scss';

// Data
import Alfie from '../data/alfie';
import Toby from '../data/toby';
import Edward from '../data/edward';


export default function Timeline (props) {
  // This gives us the types of events for the right person
  const personArray = getPersonArray(props.name);
  // This for now just that array as 'p' element
  const elemArray = personArray.map(eventType => <p key={eventType}>{eventType}</p>)

  // Should call another function to render the right component based on the type
  // ...

  return (
    <React.Fragment>
      <h1 className="flex-center">{props.name} and Mum</h1>
      
      { elemArray }
    </React.Fragment>
  )
}

// Helper Function
function getPersonArray(person) {
  // We may have to return the full array to get the data for each event
  switch (person) {
    case "Alfie":
      return Alfie.map((event) => (
        event.type
      ))
    case "Toby":
      return Toby.map((event) => (
        event.type
      ))
    case "Edward":
      return Edward.map((event) => (
        event.type
      ))
  }
}