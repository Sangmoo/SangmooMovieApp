import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends React.Component {
    state = {
    isLoading: true,
    movies: []
  };	  
};
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading } = this.state;	  
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
   };
  
export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
