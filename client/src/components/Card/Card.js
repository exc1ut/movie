import React from 'react';
import styles from './Card.module.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const Card = (props) => {
    return (
        <div className = {props.type === "large"? styles.Card :styles.Small }>
            <img  src={props.mainImage} alt=""/>            
             <div className = {styles.playButton}>
                <PlayCircleOutlineIcon/>
             </div>
             <div className = {styles.badges}>
                 <div className={styles.bookmark}>
                     <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bookmark-2613565-2172090.png" alt=""/>
                 </div>
                 <div className={styles.rating}>
                     <img src="https://img.favpng.com/17/22/5/star-icon-interface-icon-assets-icon-signs-icon-png-favpng-wR6wNvuserURDPAFfpqnYuuvA.jpg" alt=""/>
                     <span className={styles.ratingNumber}> 9.1 </span>
                 </div>
             </div>
            <div className ={styles.movieInfo}>
                <div className={styles.title}>
                    Fast and Fourious 9
                </div>
                <div className={styles.otherData}>
                    <div>Ganre</div>
                    <div>Cost</div>
                    <div>2021</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
