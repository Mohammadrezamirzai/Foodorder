import { currencyFormatter } from "../util/formatting.js";

export default function CarItem({
  name,
  quantity,
  price,
  onIcrease,
  onDescrese,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDescrese}>-</button>
        <span>{quantity}</span>
        <button onClick={onIcrease}>+</button>
      </p>
    </li>
  );
}
