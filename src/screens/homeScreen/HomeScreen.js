import React from "react";
import profile from "../../assets/images/development/profile.svg";
import scoreCoin from "../../assets/images/development/score.png";
import timeimg from "../../assets/images/development/timeimg.png";
import sudokuimg from "../../assets/images/development/sudoku.png";
import slidingimg from "../../assets/images/development/slidingimg.png";
import memoryimg from "../../assets/images/development/memoryimg.png";
import UserGameDetails from "../../components/userInfo/userInfo.js";
import SlidingGame from "../../components/puzzleboxes/slidingPuzzle/src/App.js";
import MemoryGame from "../../components/puzzleboxes/memorygame/src/App.js";
import SudokuGame from "../../components/puzzleboxes/sudoku/src/screens/Game/Game";
import CipherPuzzle from "../../components/puzzleboxes/Cipher puzzle/cipherpuzzle";
import { FaSyncAlt } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { db, auth } from "../../firebase-config.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState, useEffect, useCallback } from "react";
import "./homeScreen.css";

function HomeScreen() {
  const [users, setUserData] = useState({});
  const userDocument = doc(db, "users", auth.currentUser.uid);
  useEffect(() => {
    const getUsers = async () => {
      const userData = await getDoc(userDocument);
      setUserData(userData.data());
      console.log(userData);
    };
    getUsers();
  }, [users]);

  const memoryGameComponent = <MemoryGame></MemoryGame>;
  const sliginGameComponent = <SlidingGame></SlidingGame>;
  const sudokuGameComponent = <SudokuGame></SudokuGame>;

  const initialPrompt = (
    <div
      style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <h1>Solve the challenge to unlock the portal</h1>
      <div
        onClick={async () => {
          await updateDoc(userDocument, { started: true });
        }}
        style={{
          color: "white",
          padding: "20px 40px",
          borderRadius: "20px",
          backgroundColor:
            "linear-gradient(110deg, rgba(22.91, 0, 163.62, 0.70), rgba(35.93, 0.27, 255, 0.75))",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
          // "linear-gradient(110deg, rgba(22.91, 0, 163.62, 0.70), rgba(35.93, 0.27, 255, 0.75))",
        }}
      >
        START
      </div>
    </div>
  );

  const gamePrompt = (
    <div className="heading">
      <h1>Solve the challenge to unlock the portal</h1>
      <FaSyncAlt></FaSyncAlt>
      <AiOutlineInfoCircle />
    </div>
  );
  return (
    <div className="background">
      <div className="topbar">
        <div className="profile">
          <img src={profile} alt="profile" />
          <h1>{users.userName}</h1>
        </div>
        <div className="profile">
          <h1>SCORE :</h1>
          <div className="scoreboard">
            <img
              src={scoreCoin}
              alt="score coin"
              style={{ paddingRight: "20px" }}
            />
            <h1>{users.score}</h1>
          </div>
        </div>
      </div>
      <div className="centerbar">
        <div className="stageBoard">
          <h1>Stage : {users.level}</h1>
        </div>
        {users.started ? gamePrompt : <></>}
        <div className="centerbarComponents">
          <img
            src={
              users.started && users.level == "slidingGame" ? (
                slidingimg
              ) : users.started && users.level == "memoryGame" ? (
                memoryimg
              ) : users.started && users.level == "sudoku" ? (
                sudokuimg
              ) : (
                <div></div>
              )
              // users.level == "neonClock"
              //   ? timeimg
              //   :
            }
            alt=""
          />
          {
            // users.level == "neonClock"
            //   ? timeimg
            //   :
            users.started && users.level == "slidingGame"
              ? sliginGameComponent
              : users.started && users.level == "memoryGame"
              ? memoryGameComponent
              : users.started && users.level == "sudoku"
              ? sudokuGameComponent
              : initialPrompt
          }
          <UserGameDetails></UserGameDetails>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
