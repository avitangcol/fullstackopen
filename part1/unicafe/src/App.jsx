import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handlNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button key="Good" handleClick={handleGoodClick} text="Good" />
      <Button key="Neutral" handleClick={handlNeutralClick} text="Neutral" />
      <Button key="Bad" handleClick={handleBadClick} text="Bad" />

      <h1>Statistics</h1>
      <p>
        Good: {good}
        <br/>Neutral: {neutral}
        <br/>Bad: {bad}
      </p>
      <p>
        All: {good+neutral+bad}
        <br/> Average: {
          ((1*good) + ((-1)*bad)) / (good+neutral+bad)
        }
        <br/> Positive: {
          100 * (good / (good+neutral+bad))
        }%
      </p>
    </div>
  )
}

export default App