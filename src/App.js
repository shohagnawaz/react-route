import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {

  const myStyle = {
    backgroundColor: "green",
    color: "White",
    margin: "40px",
    padding: "20px"
  }

  return (
    <div className="App">
      <h1 style={myStyle}>Md. Shah Nawaz Shohag</h1>
      <About></About>
      <Contact></Contact>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
