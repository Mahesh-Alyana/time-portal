import React, { useState } from "react";

import "./Game.css";
import { doc, updateDoc } from "firebase/firestore";
import {
  db,
  auth,
} from "/home/mahesh/Documents/timeportal/src/firebase-config.js";

import { Grid, ChoiceBoard, Button } from "../../components/index.js";

import {
  animateElement,
  arrayDeepCopy,
  checkBoard,
  checkPlayerWon,
  createSudokuGrid,
} from "../../utility";

import useLocalStorage from "../../hooks/useLocalStorage";

const mediumMaxEmptyCells = 40;

const SudokuGame = (props) => {
  const docRef = doc(db, "users", auth.currentUser.uid, "puzzles", "sudoku");
  const nextGame = doc(db, "users", auth.currentUser.uid);

  const [grid, setGrid] = useLocalStorage("currentGrid", null);
  const [startingGrid, setStartingGrid] = useLocalStorage("startingGrid", null);
  const [clickValue, setClickValue] = useLocalStorage("clickValue", 1);

  // Game Score logic
  const [gameMode, setGameMode] = useLocalStorage(
    "gameMode",
    mediumMaxEmptyCells
  );
  const [movesTaken, setMovesTaken] = useLocalStorage("movesTaken", 0);
  const [isPlayerWon, setIsPlayerWon] = useLocalStorage("playerWon", false);

  const [startTime, setStartTime] = useLocalStorage("startTime", () =>
    Date().toLocaleString()
  );

  const handleNewGame = (maxEmptyCellsCount) => {
    // Waiting for the function to return the grid
    let newSudokuGrid = createSudokuGrid(maxEmptyCellsCount);

    setStartingGrid(arrayDeepCopy(newSudokuGrid));
    setGrid(arrayDeepCopy(newSudokuGrid));

    // Setting the game mode with maxEmptyCellsCount
    setGameMode(maxEmptyCellsCount);

    setIsPlayerWon(false);
    setStartTime(() => Date().toLocaleString());
  };

  const handleClearBoard = () => {
    setIsPlayerWon(false);
    setGrid(arrayDeepCopy(startingGrid));
  };

  const handleCellClick = async (row, column, isModifiable) => {
    if (!isModifiable) {
      animateElement(".grid-table", "headShake");
      return;
    }

    // moves registered when the value is not 0
    if (clickValue !== 0) setMovesTaken((moves) => moves + 1);

    let newGrid = arrayDeepCopy(grid);
    newGrid[row][column].value = clickValue;

    // Marking the node valid or invalid depending on the grid
    checkBoard(newGrid);

    // Checking if the player has won
    let playerWon = checkPlayerWon(newGrid);
    if (playerWon) {
      // Dosomething here
      setIsPlayerWon(true);
      const game = await updateDoc(docRef, { completed: true });
      const gmaes = await updateDoc(nextGame, {
        score: props.score,
        level: "memoryGame",
        completed: true,
        started: false,
      });
    }

    // setting the value to the grid and also to the local storage
    setGrid(newGrid);
  };

  console.log("....");

  // If we donot have anything in the local storage
  if (grid == null && startingGrid == null) handleNewGame(gameMode);

  return (
    <div className="Game">
      <h1 className="main-title">Sudoku Game</h1>

      <Grid handleCellClick={handleCellClick} grid={grid} />
      <ChoiceBoard setClickValue={setClickValue} selected={clickValue} />
      <div className="action-container">
        <Button
          onClick={handleClearBoard}
          buttonStyle="btn--primary--solid"
          text="Clear"
        />
        <Button
          onClick={() => handleNewGame(mediumMaxEmptyCells)}
          buttonStyle="btn--danger--solid"
          text="New Game"
        />
      </div>
    </div>
  );
};

export default SudokuGame;
