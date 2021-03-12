import React, {useState} from 'react';

// Components
import { SingleImageEvent, FourImageEvent, SmallEvent } from './events/Events';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

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
      
      <TimelineSlider componentArray={componentArray} />
    </React.Fragment>
  )
}

function TimelineSlider ({ componentArray }) {
  const [transform, setTransform] = useState(0);

  const sliderStyles = {
    transform: `translateX(${transform}%)`,
    transition: 'all 1s ease'
  }

  return (
    <div className="viewport">
      <div className="slider-nav">
        <button className="btn-hidden" onClick={() => transform !== 25 && setTransform(transform + 25)} >
          <FaAngleDoubleLeft color="white" size={40} />
        </button>
        <button className="btn-hidden" onClick={() => setTransform(transform - 25)} >
          <FaAngleDoubleRight color="white" size={40} />
        </button>
      </div>
      <div className="timeline-container" style={sliderStyles}>
        { componentArray }
      </div>
    </div>
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

function getEventComponent ({type, date, title, img, imgs, first, icon}) {
  switch (type) {
    case 'singleImageEvent':
      return <SingleImageEvent 
              key={date} 
              date={date} 
              title={title} 
              img={img} 
              first={first === 'true'}
            />
    case 'fourImageEvent':
      return <FourImageEvent 
              key={date}
              date={date}
              title={title}
              imgs={imgs}
              first={first=== 'true'}
            />
    case 'smallEvent':
      return <SmallEvent 
              key={date}
              date={date}
              title={title}
              icon={icon}
              first={first === 'true'}
            />
  }
}


