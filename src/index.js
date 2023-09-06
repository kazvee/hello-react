import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return <button onClick={props.reset} value={props.children}>Reset</button>;
};

const Application = (props) => {

  // your code here

  const reset = () => {
    console.log("Reset! 🤠");
    // your code here
  };

  return (
    <main>
      <Button reset={reset}/>
      <h1>Hello React! 🌞</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
