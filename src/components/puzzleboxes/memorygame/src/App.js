import Cards from "./components/Cards";
import "../src/index.css";

function MemoryGame() {
  return (
    <div>
      <h1>Memory Game - React</h1>
      <div className="App">
        <Cards />
      </div>
    </div>
  );
}

export default MemoryGame;
