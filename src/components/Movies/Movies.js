import styles from "./Movies.module.css";
import soul from "./img/yan/soul.jpeg";
import anotherRound from "./img/yan/another-round.jpeg";
import theresNoEvil from "./img/yan/there-is-no-evil.jpeg";
import time from "./img/yan/time.jpeg";
import firstGirlILoved from "./img/yan/first-girl-i-loved.jpeg";

import MoviesItem from "./MovieItem";

const Movies = () => {
  return (
    <div className={styles.movies}>
      <MoviesItem
        pic={soul}
        title="Soul"
        desc="First time watching movie with Yan!!!"
        location="Festical Walk"
        date="3-Apr-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={anotherRound}
        title="Another Round"
        desc="Movie is ok."
        location="Telford"
        date="9-May-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={theresNoEvil}
        title="There is no evil"
        desc="Fell asleep during the movie…"
        location="Cinematheque"
        date="16-May-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={time}
        title="殺出個黃昏"
        desc="Fun movie! I like it!"
        location="The One"
        date="21-August-2021"
        rating="8.5"
      />
      <MoviesItem
        pic={firstGirlILoved}
        title="喜歡你是你"
        desc="Wtf did I watch?!"
        location="D2 Place"
        date="3-Dec-2021"
        rating="6.0"
      />
    </div>
  );
};

export default Movies;
