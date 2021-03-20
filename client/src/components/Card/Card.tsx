import React from "react";
import styles from "./Card.module.css";
import BookmarkIcon from './svg/BookmarkIcon'
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from './svg/StarIcon'
import PlayButton from './svg/PlayButton'
import { motion } from 'framer-motion'
import { useState } from "react";
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
  const [hover, setHover] = useState(false);
  const getTitle = (title) => {
    let titleArray: any = [];
    let newTitle = title.split('');
    // let newTitle = title.split('').splice(20);
    for (let item of newTitle) {
      if (+newTitle.indexOf(item) < 10 && +newTitle.indexOf(item) >= 0) {
        titleArray.push(item);
      }
    }

    newTitle = titleArray.join('')
    return `${newTitle}...`;
  }
  return (
    <div
      onMouseOver={(e) => {
        e.stopPropagation()
        setHover(true)
      }}
      onMouseOut={(e) => {
        e.stopPropagation()
        setHover(false)
      }}
      className={props.type === "large" ? styles.Card : styles.Small}>
      <div className={styles.imgWrapper}>
        <img src={props.mainImage} className={styles.CardImg} alt="" />
      </div>

      <motion.div
        animate={{ opacity: !hover ? '0' : '1' }}
        className={styles.playButton}>
        <PlayButton width="56px" height="auto" stroke="#fff" />
      </motion.div>

      <motion.div animate={{ opacity: !hover ? '0' : '1' }} className={styles.badges}>
        <div className={styles.bookmark}>
          <BookmarkIcon height={18} width={18} fill="#2f80ed" vertical-allign="middle" />
        </div>
        <div className={styles.rating}>
          <StarIcon height={18} width={18} fill="#2f80ed" />
          <span className={styles.ratingNumber}> {props.details.rating} </span>
        </div>
      </motion.div>
      <div className={styles.movieInfo}>
        <div className={styles.title}>{props.title.length <= 22 ? props.title : getTitle(props.title)}</div>
        <div className={styles.otherData}>
          <div>{props.details.genre}</div>
          <div>{props.details.cost}</div>
          <div>{props.details.year}</div>
        </div>
      </div>
    </div>
  );
};
