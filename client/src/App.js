import React from 'react';
import './App.css';
import './Fib.js';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './NavBar'
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <NavBar/>
    <Router>
      <div className="App">
          <header className="App-header">
            <p>
              Fibonacci Calculator
            </p>
            <Link to="/">Home</Link>
            <Link to="/otherPage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
      </div>
    </Router>
  );
}

export default App;
