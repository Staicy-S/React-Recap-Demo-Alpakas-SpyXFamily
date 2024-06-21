import styles from "./StateUplifting.module.css";

function StateUplifting({ onSetMovies }) {
  return (
    <>
      <h1>State Uplifting</h1>
      <h3>
        How many movies have been published in the Spy x Family franchise?
      </h3>
      <button onClick={() => onSetMovies(0)}>0</button>
      <button onClick={() => onSetMovies(1)}>1</button>
      <button onClick={() => onSetMovies(2)}>2</button>
    </>
  );
}

export default StateUplifting;
