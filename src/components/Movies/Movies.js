import styles from "./Movies.module.css";
import soul from "./img/yan/soul.jpeg";
import anotherRound from "./img/yan/another-round.jpeg";

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
      />
      <MoviesItem
        pic={anotherRound}
        title="Another Round"
        desc="Movie is ok."
        location="Telford"
        date="9-May-2021"
      />
    </div>
  );
};

export default Movies;
