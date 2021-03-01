import React from "react";
import styles from "./Card.module.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
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
      <img src={props.mainImage} alt="" />

      <div className={styles.playButton}>
        <PlayCircleOutlineIcon className={styles.playButtonMaterial} />
      </div>

      <div className={styles.badges}>
        <div className={styles.bookmark}>
          <BookmarkBorderIcon className={styles.bookmarkIcon} />
        </div>
        <div className={styles.rating}>
          <StarOutlineIcon className={styles.ratingIcon} />
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
