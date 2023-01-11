function Cart(props) {
  const { quantity = 0, handleBasketShow } = props;
  return (
    <div className="cart blue lighten-1 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}
export { Cart };