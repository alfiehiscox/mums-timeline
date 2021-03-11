import React, {useState} from 'react';

// Components
import Birth, {Event} from './events/Birth';

// Styles
import '../index.scss';

// Data
import Alfie from '../data/alfie';
// import Toby from '../data/toby';
// import Edward from '../data/edward';
// import Aaron from '../data/aaron';
// import Harry from '../data/harry';
// import Dad from '../data/dad';


export default function Timeline (props) {
  // This gives us the types of events for the right person
  const personArray = getPersonArray(props.name);

  // Should call another function to render the right component based on the type
  // ...
  const componentArray = personArray.map( event => getEventComponent(event) )

  return (
    <React.Fragment>
      <h1 className="flex-center">{props.name} and Mum</h1>
      
      <div className="timeline-container">
        { componentArray }
      </div>
    </React.Fragment>
  )
}

// Helper Function
function getPersonArray(person) {
  // We may have to return the full array to get the data for each event
  switch (person) {
    case "Alfie":
      return Alfie.map(data => data.event)
    case "Toby":
      return Toby.map((event) => (
        event.type
      ))
    case "Edward":
      return Edward.map((event) => (
        event.type
      ))
    case "Aaron":
      return Aaron.map((event) => (
        event.type
      ))
    case "Harry":
      return Harry.map((event) => (
        event.type
      ))
    case "Dad":
      return Dad.map((event) => (
        event.type
      ))
  }
}

function getEventComponent ({type, date, title, img}) {
  switch (type) {
    case 'birth':
      return <Birth key={date} date={date} title={title} img={img}/>
  }
}


