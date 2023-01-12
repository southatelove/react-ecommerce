import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    console.log("Я ветка arm1");
    setAlertName([...alertName, item.displayName]);
  };
  console.log("Я arm2");
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((element) => element.mainId !== itemId);

    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((element) => {
      if (element.mainId === itemId) {
        const newQuantity = element.quantity + 1;
        return {
          ...element,
          quantity: newQuantity,
        };
      } else {
        return element;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((element) => {
      if (element.mainId === itemId) {
        const newQuantity = element.quantity - 1;
        return {
          ...element,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return element;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };
  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v2/shop?lang=ru", {
      headers: {
        Authorization: "42b2d7d7-3b93d8a5-60f55d5b-c6fe7f91",
      },
    }).then((response) =>
      response.json().then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
    );
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
