import logo from "./logo.svg";
import dribbleLogo from "./dribbble-4.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="dribbble-button">
        <img
          color="white"
          src={dribbleLogo}
          className="dribbble-logo"
          alt="logo"
        />
      </div>
      This is a dockerized app, ain't it?
    </div>
  );
}

export default App;
