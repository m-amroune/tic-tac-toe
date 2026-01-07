import React from "react";
import { useState } from "react";
import "../App.css";

const Board = () => {
  // Store the 9 squares of the board
  const [squares, setSquares] = useState(Array(9).fill(""));

  // Track which player plays next (X or O)
  const [isXNext, setIsXNext] = useState(true);

  return (
    <div className="squares">
      {squares.map((value, index) => (
        <button
          key={index}
          className="square"
          onClick={() => {
            // Copy the board state
            const next = [...squares];

            // Set X or O in the clicked square
            next[index] = isXNext ? "X" : "O";

            // Update board and switch player
            setSquares(next);
            setIsXNext(!isXNext);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Board;
