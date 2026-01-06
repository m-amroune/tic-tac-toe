import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <p>Next Player: X</p>
      <Board />
    </div>
  );
}

export default App;
