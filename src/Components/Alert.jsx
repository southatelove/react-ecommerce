import { useEffect } from "react";

function Alert(props) {
  const { name, closeAlert } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    //eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name[0]} добавлен в корзину</div>
      {name.length > 1 && (
        <div className="toast">{name[1]} добавлен в корзину</div>
      )}
      {name.length > 2 && (
        <div className="toast">{name[2]} добавлен в корзину</div>
      )}
      {name.length > 3 && (
        <div className="toast">{name[3]} добавлен в корзину</div>
      )}
      {name.length > 4 && (
        <div className="toast">{name[4]} добавлен в корзину</div>
      )}
    </div>
  );
}

export { Alert };
