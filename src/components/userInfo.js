import "../components/userInfo.css";
import arrow from "../assets/images/development/arrow.svg";

function UserGameDetails(params) {
  return (
    <div className="panel">
      <div className="divider"></div>
      <img src={arrow} alt="arrow-right" />
      <div className="PanelComponents">
        <div className="stats"></div>
        <div className="stats"></div>
        <div className="stats"></div>
      </div>
    </div>
  );
}

export default UserGameDetails;
