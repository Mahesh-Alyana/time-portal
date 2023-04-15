import React, { useState, useEffect } from "react";
import "../userInfo/userInfo.css";
import arrow from "../../assets/images/development/arrow.svg";
import arrowleft from "../../assets/images/development/arrowleft.svg";
import key from "../../assets/images/development/key.png";
import link from "../../assets/images/development/link.png";
import lock from "../../assets/images/development/lock.png";

function UserGameDetails(params) {
  const [isOpen, setIsOpen] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={isOpen ? "panel open" : "panel closed"}>
      <img src={isOpen ? arrow : arrowleft} alt="arrow" onClick={handleClick} />
      <div className="divider"></div>
      <div
        className={
          isOpen ? "PanelComponents open" : "PanelComponents closeComponent"
        }
      >
        <div className="stats">
          <img src={key} alt="keys" className="images" />
          <h1>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
        </div>
        <div className="stats">
          <img src={link} alt="portals" className="images" />
          <h2>2 portals</h2>
        </div>
        <div className="stats">
          <img src={lock} alt="locked" className="images" />
          <h2>2 locked</h2>
        </div>
      </div>
    </div>
  );
}

export default UserGameDetails;
