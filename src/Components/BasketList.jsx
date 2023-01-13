import { useContext } from "react";
import { ShopContext } from "./context";
import { BasketItem } from "./BasketItem";

function BasketList() {
  const { order, handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price * element.quantity;
  }, 0);
  return (
    <ul className="collection basket-list ">
      <li className="collection-item active">Корзина</li>

      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item">Корзина Пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость:{totalPrice} руб.
      </li>
      <li className="collection-item">
        <button className="btn ">Оформить </button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
export { BasketList };
