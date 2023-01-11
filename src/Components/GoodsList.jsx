import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods, addToBasket } = props;

  return (
    <div>
      {goods.length ? (
        <div className="goods">
          {goods.map((item) => (
            <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
          ))}
        </div>
      ) : (
        <div> Товары закончились </div>
      )}
    </div>
  );
}

export { GoodsList };
