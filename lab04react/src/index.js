import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
    <div>
      <h1>give feedback</h1>
      <button onClick={GoodClick}>good</button>
      <button onClick={NeutralClick}>neutral</button>
      <button onClick={BadClick}>bad</button>
      <div>
        <h1>Statictics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good+neutral+bad}</p>
        <p>average {(good-bad) / (good+neutral+bad)}</p>
        <p>positive {good / (good+neutral+bad)*100} %</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)