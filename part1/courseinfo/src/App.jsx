const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = ({parts, exercises}) => {
    return (
      <div>{parts.map((a,b) => <Part key={a} part={a} exercise={exercises[b]} />)}</div>
    )
  }

  const Part = ({part, exercise}) => {
    return (
      <p key={part}>{part} {exercise}</p>
    )
  }

  const Total = ({exercises}) => {
    let total = exercises.reduce((a,b) => a+b, 0)
    return (
      <p>Number of exercises {total}</p>
    )
  }

  return (
    <div>
      <Header course = {course} />
      <Content parts={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App