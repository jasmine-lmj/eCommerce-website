import Navigation from "./Navigation";
import Header from "./Header";
import ProductPage from "./ProductPage";
import { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState({});

  return (
    <>
      <Navigation cart={cart} />
      <Header />
      <ProductPage cart={cart} setCart={setCart} />
    </>
  );
};

export default Home;
