import "../index.css";

function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";
  console.log(item.img);
  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img className="card-img" src={item.img} alt="tile" />
    </div>
  );
}

export default Card;



