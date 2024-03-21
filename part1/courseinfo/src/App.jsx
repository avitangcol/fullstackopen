const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>{parts.map((a) => <Part key={a.name} part={a.name} exercise={a.exercises} />)}</div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p key={part}>{part} {exercise}</p>
  )
}

const Total = ({exercises}) => {
  let total = exercises.reduce((acc,obj) => acc + obj.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content parts={[part1,part2,part3]} />
      <Total exercises={[part1, part2, part3]} />
    </div>
  )
}

export default App