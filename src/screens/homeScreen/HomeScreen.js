import React from "react";
import profile from "../../assets/images/development/profile.svg";
import scoreCoin from "../../assets/images/development/score.png";
import "../../../src/screens/homeScreen/homeScreen.css";
import UserGameDetails from "../../components/userInfo.js";

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
          <p></p> 
          <UserGameDetails></UserGameDetails>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
