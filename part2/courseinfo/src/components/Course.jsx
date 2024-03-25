const Header = ({course}) => {
    return (
      <h2>{course.name}</h2>
    );
  }
  
  const Content = ({parts}) => {
    return (
      <div>{parts.map((a) => <Part key={a.id} part={a.name} exercise={a.exercises} />)}</div>
    );
  }
  
  const Part = ({part, exercise}) => {
    return (
      <p key={part}>{part} {exercise}</p>
    );
  }
  
  const Total = ({parts}) => {
    let total = parts.reduce((accumulator,obj) => accumulator + obj.exercises, 0);
    return (
      <p>Number of exercises {total}</p>
    );
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <b><Total parts={course.parts} /></b>
      </div>
    );
  }

  export default Course