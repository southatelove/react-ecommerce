function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket,
  } = props;

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={displayAssets[0].full_background} alt={displayName} />
        </div>
        {displayDescription ? (
          <div className="card-content">
            <span className="card-title">{displayName}</span>
            <p>{displayDescription}</p>
          </div>
        ) : (
          <div style={{ padding: 24, margin: 0 }}>
            <p className="card-title" style={{ margin: 0 }}>
              Здесь Должно быть наименование
            </p>
            <p style={{ margin: 0 }}> Здесь должен быть текст с бэка </p>
          </div>
        )}

        <div className="card-action">
          <button
            className="btn"
            onClick={() =>
              addToBasket({
                mainId,
                displayName,
                price: price.finalPrice,
              })
            }
          >
            Купить
          </button>
          <span className="right" style={{ fontSize: "2rem" }}>
            {price.finalPrice} руб.
          </span>
        </div>
      </div>
    </>
  );
}

export { GoodsItem };
