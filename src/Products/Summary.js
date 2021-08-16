import styles from "./Summary.module.css";

const Summary = () => {
  return (
    <section className={styles.summary}>
      <h2>Browse and buy your tea online</h2>
      <p>
        When it comes to a cuppa, it’s China to which we owe our thanks. Even
        the most common words for the world’s favourite beverage – ‘cha’ and
        ‘tea’ – have their origins in China, where,legend has it, Emperor
        Shennong discovered it close to 5,000 years ago.
      </p>
      <p>
        In our online store, you will discover some of the finest examples of
        Chinese loose-leaf tea available: delicate white tea; light and fragrant
        Jasmine Dragon Pearls green tea; aged and earthy Pu-erh; charismatic
        oolongs; and cult brews such as smoky Tarry Lapsang Souchong black tea.
        Enjoy the journey!
      </p>
    </section>
  );
};

export default Summary;
