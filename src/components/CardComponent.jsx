import styles from "./CardComponent.module.css";

export default function CardComponent({ firstname, lastname, age, highlight }) {
  return (
    <section
      className={styles["card-container"]}
      style={{ backgroundColor: highlight }}
    >
      <h2>
        {firstname} {lastname}
      </h2>
      <p>
        {age
          ? `${firstname} ${lastname} is ${age} years old`
          : "The exact age is unknown 🕵🏼‍♂️"}
      </p>
    </section>
  );
}
