import { useState } from "react";
import styles from "./App.module.css";
import CardComponent from "./components/CardComponent";
import Arrays from "./components/Arrays";
import StateUplifting from "./components/StateUplifting";

function App() {
  const [episodes, setEpisodes] = useState(0);
  const [movies, setMovies] = useState();
  return (
    <>
      <h1>React Recap ♻️ for the Alpakas 🦙</h1>
      <CardComponent
        firstname="Anya"
        lastname="Forger"
        age={5}
        highlight="hotpink"
      />
      <CardComponent firstname="Yor" lastname="Forger" age={27} />

      <CardComponent firstname="Loid" lastname="Forger" age={undefined} />
      <section>
        <h3>How many episodes of Spy Family have you watched so far?</h3>
        <p>Click on the button to increase your count of watched episodes!</p>
        <button
          onClick={() => {
            setEpisodes((prev) => prev + 1);
          }}
          className={styles["episode-counter"]}
        >
          Episode Counter
        </button>
        <p>Watched Episodes {episodes}</p>
      </section>
      <Arrays />
      <StateUplifting onSetMovies={setMovies} />
      {movies ? <p>Your estimate for published movies is: {movies}</p> : null}
    </>
  );
}

export default App;
