import styles from "./AvailableList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableList = () => {
  const productList = DUMMY_MEALS.map((item) => <li>{item.name}</li>);
  return (
    <section className={styles.products}>
      <ul>{productList}</ul>
    </section>
  );
};

export default AvailableList;
