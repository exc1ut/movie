import React from "react";
import styles from "./Card.module.css";
import BookmarkIcon from './svg/BookmarkIcon'
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from './svg/StarIcon'
import PlayButton from './svg/PlayButton'
interface Props {
  mainImage: string;
  title: string;
  details: {
    rating: number;
    cost: number;
    year: number;
    genre: string;
  };
  type: "large" | "small";
}
export const Card: React.FC<Props> = (props) => {
  return (
    <div className={props.type === "large" ? styles.Card : styles.Small}>

      <img src={props.mainImage} className={styles.CardImg} alt="" />
      <div className={styles.playButton}>
        <PlayButton width="56px" height="auto" stroke="#fff" />
      </div>

      <div className={styles.badges}>
        <div className={styles.bookmark}>
          <BookmarkIcon height={18} width={18} fill="#2f80ed" vertical-allign="middle" />
        </div>
        <div className={styles.rating}>
          <StarIcon height={18} width={18} fill="#2f80ed" />
          <span className={styles.ratingNumber}> {props.details.rating} </span>
        </div>
      </div>
      <div className={styles.movieInfo}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.otherData}>
          <div>{props.details.genre}</div>
          <div>{props.details.cost}</div>
          <div>{props.details.year}</div>
        </div>
      </div>
    </div>
  );
};
