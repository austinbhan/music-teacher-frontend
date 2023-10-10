import {
  BrowserRouter as Router,
} from 'react-router-dom';

export default function App() {

  // Make a basic fizbuzz question
  // If divisible by 3, fizz
  // if divisible by 5, buzz
  // if divisible by both, fizzbuzz
  // if not divisible by either, return number

  const chosenNumber = prompt('Pick a number!');

  for (let i = 0; i < chosenNumber; i++) {
    if (i % 3 == 0) {
      console.log('fizz');
    }
    else if (i % 5 == 0) {
      console.log('buzz');
    }
    else if (i % 15 == 0)
    {
      console.log('fizzbuzz');
    }
    else {
      console.log(i);
    }
  }

  return(
    <Router>
      <h1>Hello World</h1>
    </Router>
  );
}
