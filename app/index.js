import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PageGrid from './components/PageGrid'
import Timeline from './components/Timeline'

// style imports
import './index.scss';

function router(state, handelChoice) {
  if (state === "home") {
    return (
      <React.Fragment>
        <div className="flex-center column">
          <h1>Happy Mother's Day</h1>
          <p>Click on an image below:</p>
        </div>
        <PageGrid handelChoice={handelChoice} />  
      </React.Fragment>
    )
  } else {
    // We gonna do something clever here
    return <Timeline name={state} />
  }
}

function App (props) {
  const [chosen, setChosen] = useState('home');
  return (
    router(chosen, setChosen)
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
