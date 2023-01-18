import styles from './Movies.module.css';
import soul from './img/yan/soul.jpeg';
import anotherRound from './img/yan/another-round.jpeg';
import theresNoEvil from './img/yan/there-is-no-evil.jpeg';
import time from './img/yan/time.jpeg';
import firstGirlILoved from './img/yan/first-girl-i-loved.jpeg';
import handRolledCigaratte from './img/yan/hand-rolled-cigaratte.JPG';
import theFrenchDispatch from './img/yan/french-dispatch.jpeg';
import yueLao from './img/yan/yue-lao.jpeg';
import driveMyCar from './img/yan/drive-my-car.jpeg';
import flee from './img/yan/flee.jpeg';
import everythingEverywhereAllAtOnce from './img/yan/everything-everywhere-all-at-once.jpeg';
import quoVadisAida from './img/yan/quo-vadis-aida.jpeg';
import elvis from './img/yan/elvis.jpeg';
import broker from './img/yan/broker.jpeg';
import tableForSix from './img/yan/table-for-six.jpeg';
import theSparringPartner from './img/yan/the_sparring_partner.jpeg';
import carol from './img/yan/carol.jpeg';
import theNarrowRoad from './img/yan/the_narrow_road.jpeg';
import toMyNineteenYearOldSelf from './img/yan/to-my-nineteen-year-old-self.jpeg';

import MoviesItem from './MovieItem';

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
      <MoviesItem
        pic={handRolledCigaratte}
        title="手捲煙"
        desc="Okay movie."
        location="D2 Place(?)"
        date="3-Dec-2021(?)"
        rating="7.5"
      />
      <MoviesItem
        pic={theFrenchDispatch}
        title="The French Dispatch"
        desc="The cinematography is nice."
        location="The One"
        date="12-Dec-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={yueLao}
        title="月老"
        desc={`
        Okay movie. Some part a bit kam.
        Actor and actresses are good looking.`}
        location="Movie Town"
        date="25-Dec-2021"
        rating="7.5"
      />
      <MoviesItem
        pic={driveMyCar}
        title="Drive My Car"
        desc="Longggggg"
        location="Cinematheque"
        date="27-Dec-2021"
        rating="7.0"
      />
      <MoviesItem
        pic={flee}
        title="Flee"
        desc="Movie is good."
        location="Cinematheque"
        date="4-June-2022"
        rating="8.0"
      />
      <MoviesItem
        pic={everythingEverywhereAllAtOnce}
        title="Everything Everywhere All at Once"
        desc="Well…. Interesting"
        location="D Park"
        date="15-June-2022"
        rating="7.5"
      />
      <MoviesItem
        pic={quoVadisAida}
        title="Quo Vadis, Aida?"
        desc="Okay movie."
        location="K11 ART HOUSE"
        date="26-June-2022"
        rating="7.5"
      />
      <MoviesItem
        pic={elvis}
        title="Elvis"
        desc="I like Elvis!
        剩係聽歌都正！"
        location="Festival Grand"
        date="9-July-2022"
        rating="8.0"
      />
      <MoviesItem
        pic={broker}
        title="孩子轉運站"
        desc="Okay movie.
        Fell asleep again…"
        location="Cinematheque"
        date="23-July-2022"
        rating="7.5"
      />
      <MoviesItem
        pic={tableForSix}
        title="飯戲攻心"
        desc="Funny movie."
        location="Paris London New York Milano"
        date="24-Sep-2022"
        rating="8.5"
      />
      <MoviesItem
        pic={theSparringPartner}
        title="正義迴廊"
        desc="Nice movie."
        location="Paris London New York Milano"
        date="12-Nov-2022"
        rating="8.0"
      />
      <MoviesItem
        pic={carol}
        title="Carol"
        desc="Who doesn't love Carol?
        對觀眾感到很失望。。。"
        location="古天樂電影院"
        date="25-Dec-2022"
        rating="8.5"
      />
      <MoviesItem
        pic={theNarrowRoad}
        title="窄路微塵"
        desc="Nice movie.
        A nice movie to end 2022."
        location="Cinematheque"
        date="27-Dec-2022"
        rating="9.0"
      />
      <MoviesItem
        pic={toMyNineteenYearOldSelf}
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
