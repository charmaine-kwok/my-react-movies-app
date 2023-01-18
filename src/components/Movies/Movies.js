import styles from './Movies.module.css';

import images from '../../assets/images';

import MoviesItem from './MovieItem';

const Movies = () => {
  return (
    <div className={styles.movies}>
      <MoviesItem
        pic={images.soul}
        title="Soul"
        desc="First time watching movie with Yan!!!"
        location="Festical Walk"
        date="3-Apr-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={images.anotherRound}
        title="Another Round"
        desc="Movie is ok."
        location="Telford"
        date="9-May-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={images.theresNoEvil}
        title="There is no evil"
        desc="Fell asleep during the movie…"
        location="Cinematheque"
        date="16-May-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={images.time}
        title="殺出個黃昏"
        desc="Fun movie! I like it!"
        location="The One"
        date="21-August-2021"
        rating="8.5"
      />
      <MoviesItem
        pic={images.firstGirlILoved}
        title="喜歡你是你"
        desc="Wtf did I watch?!"
        location="D2 Place"
        date="3-Dec-2021"
        rating="6.0"
      />
      <MoviesItem
        pic={images.handRolledCigaratte}
        title="手捲煙"
        desc="Okay movie."
        location="D2 Place(?)"
        date="3-Dec-2021(?)"
        rating="7.5"
      />
      <MoviesItem
        pic={images.theFrenchDispatch}
        title="The French Dispatch"
        desc="The cinematography is nice."
        location="The One"
        date="12-Dec-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={images.yueLao}
        title="月老"
        desc={`
        Okay movie. Some part a bit kam.
        Actor and actresses are good looking.`}
        location="Movie Town"
        date="25-Dec-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={images.driveMyCar}
        title="Drive My Car"
        desc="Longggggg"
        location="Cinematheque"
        date="27-Dec-2021"
        rating="7.0"
      />
      <MoviesItem
        pic={images.flee}
        title="Flee"
        desc="Movie is good."
        location="Cinematheque"
        date="4-June-2022"
        rating="8.0"
      />
      <MoviesItem
        pic={images.everythingEverywhereAllAtOnce}
        title="Everything Everywhere All at Once"
        desc="Well…. Interesting"
        location="D Park"
        date="15-June-2022"
        rating="7.5"
      />
      <MoviesItem
        pic={images.quoVadisAida}
        title="Quo Vadis, Aida?"
        desc="Okay movie."
        location="K11 ART HOUSE"
        date="26-June-2022"
        rating="7.5"
      />
      <MoviesItem
        pic={images.elvis}
        title="Elvis"
        desc="I like Elvis!
        剩係聽歌都正！"
        location="Festival Grand"
        date="9-July-2022"
        rating="8.0"
      />
      <MoviesItem
        pic={images.broker}
        title="孩子轉運站"
        desc="Okay movie.
        Fell asleep again…"
        location="Cinematheque"
        date="23-July-2022"
        rating="7.5"
      />
      <MoviesItem
        pic={images.tableForSix}
        title="飯戲攻心"
        desc="Funny movie."
        location="Paris London New York Milano"
        date="24-Sep-2022"
        rating="8.5"
      />
      <MoviesItem
        pic={images.theSparringPartner}
        title="正義迴廊"
        desc="Nice movie."
        location="Paris London New York Milano"
        date="12-Nov-2022"
        rating="8.0"
      />
      <MoviesItem
        pic={images.carol}
        title="Carol"
        desc="Who doesn't love Carol?
        對觀眾感到很失望。。。"
        location="古天樂電影院"
        date="25-Dec-2022"
        rating="8.5"
      />
      <MoviesItem
        pic={images.theNarrowRoad}
        title="窄路微塵"
        desc="Nice movie.
        A nice movie to end 2022."
        location="Cinematheque"
        date="27-Dec-2022"
        rating="9.0"
      />
      <MoviesItem
        pic={images.toMyNineteenYearOldSelf}
        title="給十九歲的我"
        desc="Nice documentary."
        location="M+ Cinema<"
        date="07-Jan-2023"
        rating="9.0"
      />
    </div>
  );
};

export default Movies;
