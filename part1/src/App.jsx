const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.parts} {props.values}</p>
      
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.exercises1+props.exercises2+props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts[0].name} values={parts[0].exercises} />
      <Content parts={parts[1].name} values={parts[1].exercises} />
      <Content parts={parts[2].name} values={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/> 
    </div>
  )
}

export default App