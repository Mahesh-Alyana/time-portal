import Cards from "./components/Cards";
import "../src/index.css";

function MemoryGame(props) {
  return (
    <div>
      <h1>Memory Game - React</h1>
      <div className="App">
        <Cards score={props.score} />
      </div>
    </div>
  );
}

export default MemoryGame;
