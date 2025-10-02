import { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Check the console for a list of movies!</h1>
      </header>
    </div>
  );
}

export default App;
