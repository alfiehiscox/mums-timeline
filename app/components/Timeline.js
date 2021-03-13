// Package Imports
import React, {useState, useEffect} from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

// Components
import { SingleImageEvent, FourImageEvent, SmallEvent } from './events/Events';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaHome } from 'react-icons/fa';

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
  const [reveal, setReveal] = useState(false);
  // This gives us the types of events for the right person
  const personArray = getPersonArray(props.name);

  useEffect(() => {
    setReveal(true)
  })

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  }

  const componentArray = personArray.map( (event, index) => {
    const delay = ((index + 1) * 2000) + 500;
    const duration = 1500;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out ${delay}ms`,
      opacity: 0,
    }

    return (
      <Transition
        in={reveal}
        timeout={duration}
      >
        { state => (
            <div className='flex-end' style={{...defaultStyle, ...transitionStyles[state] }} >
              { getEventComponent(event, delay) }
            </div>
          )
        }
      </Transition>
    )
  })

  return (
    <React.Fragment>
      <button className="btn-home" onClick={() => {props.handelChoice('home')}} >
        <FaHome size={25} color='white' />
      </button>
      <CSSTransition 
        in={reveal} 
        timeout={100000} 
        className="timeline-title flex-center" 
        classNames="timeline-title"
      >
        <div>
          <h1> {props.name} and Mum </h1>
        </div>
      </CSSTransition>
      
      <TimelineSlider reveal={reveal} componentArray={componentArray} />
    </React.Fragment>
  )
}

function TimelineSlider ({ componentArray, reveal }) {
  const [transform, setTransform] = useState(0);

  const sliderStyles = {
    transform: `translateX(${transform}%)`,
    transition: 'all 1s ease'
  }

  return (
    <div className="viewport">
      <CSSTransition
        in={reveal}
        timeout={5000}
        classNames="slider-nav"
      >
        <div className="slider-nav flex-center">
          <button className="btn-hidden" onClick={() => transform !== 50 && setTransform(transform + 50)} >
            <FaAngleDoubleLeft color="white" size={40} />
          </button>
          <button className="btn-hidden" onClick={() => setTransform(transform - 50)} >
            <FaAngleDoubleRight color="white" size={40} />
          </button>
        </div>
      </CSSTransition>
      
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
      return Toby.map(data => data.event)
    case "Edward":
      return Edward.map(data => data.event)
    case "Aaron":
      return Aaron.map(data => data.event)
    case "Harry":
      return Harry.map(data => data.event)
    case "Dad":
      return Dad.map(data => data.event)
  }
}

function getEventComponent ({type, date, title, img, imgs, first, icon}, delay) {
  switch (type) {
    case 'singleImageEvent':
      return <SingleImageEvent 
              key={date} 
              date={date} 
              title={title} 
              img={img} 
              first={first === 'true'}
              delay={delay}
            />
    case 'fourImageEvent':
      return <FourImageEvent 
              key={date}
              date={date}
              title={title}
              imgs={imgs}
              first={first === 'true'}
              delay={delay}
            />
    case 'smallEvent':
      return <SmallEvent 
              key={date}
              date={date}
              title={title}
              icon={icon}
              first={first === 'true'}
              delay={delay}
            />
  }
}


