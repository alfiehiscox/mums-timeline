import React, {useState, useEffect} from 'react';
import './events.scss';
import { Transition, CSSTransition } from 'react-transition-group';

// Single Image Event
export function SingleImageEvent ({img, title, date, first, delay}) {
  return (
    <div> 
      <div className="single-image-event">
        <h2 className="event-title text-center">{title}</h2>
        <img src={img} alt={`Event on ${date}`} />
        <h3 className="text-center">{date}</h3>
        <div className="connector center"></div>
      </div>
      <Connector first={first} delay={delay}/>
    </div>
  )
}

// // Four Image Event
export function FourImageEvent ({title, imgs, date, first, delay}) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
      <div className="four-image-event">
        <h2 className="event-title text-center">{title}</h2>
        
        { selectedImage === null && 
          <div className="grid-four">
            { imgs.map((img, index) => (
                <button
                  className="btn-hidden"
                  onClick={() => setSelectedImage(index)}
                  key={`${title}${index}`} 
                >
                  <img 
                    src={img} 
                    alt={`Image ${index+1} of ${title} event`} 
                  />
                </button>
              )
            )}
          </div>
        }

        { selectedImage !== null && 
            <button 
              className="btn-hidden" 
              onClick={() => setSelectedImage(null)}
            >
              <img className="chosen-image" src={imgs[selectedImage]} alt={`Image for ${date}`} />
            </button>
        }
        <h3 className="text-center">{date}</h3>
        <div className="connector center"></div>
      </div>
      <Connector first={first} delay={delay} />
    </div>
  )
}

// Small Event
export function SmallEvent({title, date, first, icon, delay}) {
  return (
      <div className="flex-end">
        <div>
          <div className="small-event">
            { icon }
            <h2 className="text-center">{title}</h2>
            <h3 className="text-center">{date}</h3>
          </div>
          <Connector first={first} delay={delay}/>
        </div>
      </div>
  )
}

function Connector ({first, delay}) {
  const [active, setActive] = useState(false)
  useEffect(() => setActive(true))
  

  const lineDefaultStyle = {
    height: '2px',
    flexGrow: 0.0001,
    backgroundColor: 'white',
    marginLeft: '25px',
    transition: `flex-grow 2500ms ease ${delay}ms`, 
  }
  
  const lineTransitionStyles = {
    entering: { flexGrow: 1 },
    entered: { flexGrow: 1 },
  }

  return (
    <div className="connector-container">
      {!first && <div className="connector-line-left" ></div>}
      <div className={`connector-dot ${first && 'first'}`}></div>
      <Transition
        in={active}
        timeout={5000}
      >
        { state => (
            <div style={{...lineDefaultStyle, ...lineTransitionStyles[state]}}></div>
        )}
      </Transition>
    </div>
  )
}