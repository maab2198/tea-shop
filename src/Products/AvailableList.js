import styles from "./AvailableList.module.css";
import Item from "./Product/Item";
import CardWrapper from "../UI/Wrapper/CardWrapper";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "铁观音",
    location: "福建",
    eng_name: "Tie Guan Yin",
    description:
      "Our Iron Goddess of Mercy loose-leaf tea is a premium oolong with a creamy texture and divine floral notes.",
    price: 9.59,
    weight: 50,
    img:
      "https://cdn.shopify.com/s/files/1/0570/0593/2743/products/Product-90-Four-Season-Oolong-Tea-Loose-Leaf-Overhead-Web_eb15218c-6bb6-4ee0-aa6f-f82a8d0152ed_360x.jpg?v=1625222836",
  },
  {
    id: "m2",
    name: "米蘭香",
    eng_name: "Phoenix Honey Orchid",
    location: "广东",
    description:
      "This authentic oolong from the Guangdong mountains has near legendary status as a premium Chinese tea.",
    price: 10.5,
    weight: 25,
    img:
      "https://cdn.shopify.com/s/files/1/0570/0593/2743/products/PR9C2F_2_360x.jpg?v=1625222545",
  },
  {
    id: "m3",
    name: "茉莉花茶",
    location: "福建",
    eng_name: "Natural Jasmine Green Tea",
    description:
      "Aromatic and refreshing Jasmine Green Tea is a food-friendly brew naturally infused with the essential oils of summery jasmine.",
    price: 3.5,
    weight: 50,
    img:
      "https://cdn.shopify.com/s/files/1/0570/0593/2743/products/Product-53-Jasmine-Green-Tea-Loose-Leaf-Overhead-Web_2fde121a-60d2-4a51-8368-139b60ec09cf_360x.jpg?v=1625043549",
  },
  {
    id: "m4",
    name: "云南普洱",
    location: "云南",
    eng_name: "Yunnan Pu-Erh",
    description:
      "Fermented for up to five years by artisan producers, it’s a complex, earthy and authentic Chinese tea.",
    price: 5,
    weigth: 50,
    img:
      "https://cdn.shopify.com/s/files/1/0570/0593/2743/products/Product-80-Yunnan-Pu-Erh-Loose-Leaf-Tea-Overhead-Web_360x.jpg?v=1625154201",
  },
];

const AvailableList = () => {
  const productList = DUMMY_MEALS.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      location={item.location}
      eng_name={item.eng_name}
      description={item.description}
      price={item.price}
      img={item.img}
    />
  ));
  return (
    <section className={styles.products}>
      <CardWrapper>
        <ul>{productList}</ul>
      </CardWrapper>
    </section>
  );
};

export default AvailableList;
