const Navigation = ({ cart }) => {
  const totalCount = Object.values(cart).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <nav className="nav wrapper">
      <h2>LMJ</h2>
      <div className="cartContainer">
        <i className="fa fa-light fa-cart-shopping"></i>
        <span className="counter">{totalCount}</span>
      </div>
    </nav>
  );
};

export default Navigation;
