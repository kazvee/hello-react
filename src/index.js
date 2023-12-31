import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset} value={props.children}>
      Reset
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState('');

  const reset = () => {
    setName('');
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Please type in your name'
      ></input>
      <Button reset={reset} name={setName} />
      {name && <h1>Hi {name}! 🌞</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
