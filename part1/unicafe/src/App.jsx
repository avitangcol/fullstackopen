import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
    <div>
      <h1>Statistics</h1>
      No feedback given.
    </div>)
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={good+neutral+bad} />
          <StatisticLine text="Average" value={((1*good) + ((-1)*bad)) / (good+neutral+bad)} />
          <StatisticLine text="Positive" value={`${100 * (good / (good+neutral+bad))}%`} />
        </tbody>
      </table>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App