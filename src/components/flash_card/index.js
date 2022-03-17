import React, { useState } from 'react';
import styles from './index.module.scss';

const FlashCard = ({ card }) => {
  const [isFlipped, setFlipped] = useState('true');
  function flipCardToBackground(e) {
    setFlipped(!isFlipped);
  }

  return (
    <div className={styles.deck}>
      <div className={styles.card}>
        {isFlipped ?
        (
          <div className={`${styles.front} ${styles.face}`} onClick={e => flipCardToBackground(e)}>
            <h2>{card.question}</h2>
          </div>
         ): (
          <div className={`${styles.back} ${styles.face}`} onClick={e => flipCardToBackground(e)}>
            <h2>{card.answear}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashCard;
