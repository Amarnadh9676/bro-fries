function FoodCard(props) {
  return (
    <div className="food-card">

      <img
        src={props.image}
        alt={props.name}
      />

      <h2>{props.name}</h2>

      <h3>₹{props.price}</h3>

      <button>
        Add to Cart
      </button>

    </div>
  );
}

export default FoodCard;
