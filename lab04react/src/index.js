import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics ';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; 

const App = () => {
  // save clicks of each button to its own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const GoodClick = () =>{
    setGood(good + 1)
  }
  const NeutralClick = () =>{
    setNeutral(neutral + 1)
  }
  const BadClick = () =>{
    setBad(bad + 1)
  }
  return (
    <div className="container">
      <div className="card">
        <h1>give feedback</h1>
        <button className="btn btn-primary" onClick={GoodClick}>good</button>
        <button className="btn btn-success" onClick={NeutralClick}>neutral</button>
        <button className="btn btn-danger" onClick={BadClick}>bad</button>
        <div>
          <h2>Statictics</h2>
          {good===0 && neutral===0 && bad===0 ? (
            <p>Nada wey</p>
          ): (
            <Statistics good={good} neutral={neutral} bad={bad} />
          )}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)