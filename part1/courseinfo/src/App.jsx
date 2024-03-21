const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  );
}

const Content = ({course}) => {
  let parts = course.parts;
  return (
    <div>{parts.map((a) => <Part key={a.name} part={a.name} exercise={a.exercises} />)}</div>
  );
}

const Part = ({part, exercise}) => {
  return (
    <p key={part}>{part} {exercise}</p>
  );
}

const Total = ({course}) => {
  let parts = course.parts;
  let total = parts.reduce((acc,obj) => acc + obj.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App