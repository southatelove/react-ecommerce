import { GoodsItem } from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "./context";

function GoodsList() {
  const { goods } = useContext(ShopContext);

  return (
    <div>
      {goods.length ? (
        <div className="goods">
          {goods.map((item) => (
            <GoodsItem key={item.mainId} {...item} />
          ))}
        </div>
      ) : (
        <div> Товары закончились </div>
      )}
    </div>
  );
}

export { GoodsList };
