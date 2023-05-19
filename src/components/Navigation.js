const Navigation = ({ cart }) => {
  const totalCount = Object.values(cart).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <nav className="wrapper">
      <h1>LMJ</h1>
      <div>
        <i className="fa fa-light fa-cart-shopping"></i>
        <span className="counter">{totalCount}</span>
      </div>
    </nav>
  );
};

export default Navigation;
