import { useEffect, useContext, useState } from "react";
// import { API_KEY, API_URL } from "../config";

import { ShopContext } from "./context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  const { order, alertName, isBasketShow } = useContext(ShopContext);
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(function getGoods() {
  //   fetch("https://fortniteapi.io/v2/shop?lang=ru", {
  //     headers: {
  //       Authorization: "42b2d7d7-3b93d8a5-60f55d5b-c6fe7f91",
  //     },
  //   }).then((response) =>
  //     response.json().then((data) => {
  //       setGoods(data.shop);
  //     })
  //   );
  //   // eslint-disable-next-line
  // }, []);
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
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
