import React from "react";
import profile from "../../assets/images/development/profile.svg";
import scoreCoin from "../../assets/images/development/score.png";
import sudokuimg from "../../assets/images/development/sudoku.png";
import UserGameDetails from "../../components/userInfo/userInfo.js";
import App from "../../components/puzzleboxes/slidingPuzzle/src/App.js";
import MemoryGame from "../../components/puzzleboxes/memorygame/src/App.js";
import CipherPuzzle from "../../components/puzzleboxes/Cipher puzzle/cipherpuzzle";
import { FaSyncAlt } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../../../src/screens/homeScreen/homeScreen.css";

function HomeScreen() {
  return (
    <div className="container">
      <div className="background">
        <div className="topbar">
          <div className="profile">
            <img src={profile} alt="profile" />
            <h1>Mahesh Alyana</h1>
          </div>
          <div className="profile">
            <h1>SCORE :</h1>
            <div className="scoreboard">
              <img
                src={scoreCoin}
                alt="score coin"
                style={{ paddingRight: "20px" }}
              />
              <h1>5000</h1>
            </div>
          </div>
        </div>
        <div className="centerbar">
          <div className="stageBoard">
            <h1>Stage : EGYPT</h1>
          </div>
          <div className="heading">
            <h1>Solve the challenge to unlock the portal</h1>
            <FaSyncAlt></FaSyncAlt>
            <AiOutlineInfoCircle />
          </div>
          <div className="centerbarComponents">
            <img src={sudokuimg} alt="" />
            <CipherPuzzle></CipherPuzzle>
            {/* <MemoryGame></MemoryGame> */}
            {/* <App /> */}
            {/* <Sodoku></Sodoku> */}
            <UserGameDetails></UserGameDetails>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
