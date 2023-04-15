import "./App.scss";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App bg-primary-light">
      <header className="App-header">
        <Nav />
      </header>
      <body>
        <Home />
      </body>
    </div>
  );
}

export default App;
