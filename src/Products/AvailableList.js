import { useState, useEffect } from "react";
import styles from "./AvailableList.module.css";

import Item from "./Product/Item";
import CardWrapper from "../UI/Wrapper/CardWrapper";

const AvailableItem = ({ item, id }) => {
  return (
    <Item
      key={id}
      id={id}
      name={item.name}
      location={item.location}
      eng_name={item.eng_name}
      description={item.description}
      price={item.price}
      img={item.img}
    />
  );
};

const AvailableList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  const fetchProductsHandler = async () => {
    const response = await fetch(
      "https://tea-order-app-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error("Something went wrong((");
    }
    const data = await response.json();

    if (data) {
      const loadedProducts = Object.entries(data);
      setProducts(loadedProducts);
    } else {
      throw new Error("No tea is available");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductsHandler().catch((e) => {
      setIsError(e.message);
      setIsLoading(false);
      console.error(e.name + ": " + e.message);
    });
  }, []);

  return (
    <section className={styles.products}>
      <CardWrapper>
        {loading && <h1 className={styles.message}>Loading...</h1>}
        {error && <h1 className={styles.message}>{error}</h1>}
        <ul>
          {!loading &&
            !error &&
            products.map((item, id) => (
              <AvailableItem key={item[0]} id={item[0]} item={item[1]} />
            ))}
        </ul>
      </CardWrapper>
    </section>
  );
};

export default AvailableList;
