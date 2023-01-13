import { ShopContext } from "./context";
import { useContext } from "react";

function Cart() {
  const { order, handleBasketShow } = useContext(ShopContext);

  const quantity = order.length;
  return (
    <div className="cart blue lighten-1 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}
export { Cart };
