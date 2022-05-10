import logo from './logo.svg';
import './App.css';
// import HelloWorld from './HelloWorld'
import HelloWorldContainer from './HelloWorldContainer';
import TestComponent from './TestComponent'

import React from 'react';

function MyComponent(props) {
  const nextYearAge = props.age + 1
  console.log(props); 
  return(
    <>
    <h1>Hi, my name is {props.name}, age: {nextYearAge}</h1>
    </>
  )
  return <h1>Header Here!</h1>;
}


function App() {
  const age = 55

  return (
    <div className="App">
      <MyComponent name="Gris" age={age}/>  
    </div>
  )
  // return (
  //   <div className="App">
  //     <HelloWorldContainer />
  //       <p>Repeat ...</p>
  //       <HelloWorldContainer />
  //       <TestComponent />
  //   </div>
  // );
}

export default App;
