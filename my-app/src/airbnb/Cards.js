function Card(props) {
  console.log(props);
  return (
    <div className="single-card">
      <p className="status">{props.item.status}</p>
      <img className="card-img" src={props.item.img} alt="cards"></img>
      <p className="rating">
        {props.item.rating}
        <span className="country">{props.item.country}</span>
      </p>
      <p className="details">{props.item.details}</p>
      <p className="cost">
        <strong>{props.item.cost}</strong>
        {props.item.person}
      </p>
    </div>
  );
}

export default Card;
