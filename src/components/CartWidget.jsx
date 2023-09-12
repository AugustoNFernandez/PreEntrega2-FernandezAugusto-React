export default function CartWidget() {
    return (
      <>
        <img
          src="/src/components/img/cart.svg"
          alt="carrito"
          style={{ width: 45, height: 45 }}
        />
        <Contador count="3" />
      </>
    );
  }
  const Contador = ({ count }) => {
    return <span style={{ color: "red" }}>{count}</span>;
  };
  