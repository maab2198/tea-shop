import styles from "./CardWrapper.module.css";

const CardWrapper = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default CardWrapper;
