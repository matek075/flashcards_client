import React, { useState } from 'react';
import Button from '../button/';
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
          <div className={`${styles.front} ${styles.face}`}>
            <h2>{card.question}</h2>
            <Button
              text={'flipp me'}
              onClick={e => flipCardToBackground(e)}
            />
          </div>
         ): (
          <div className={`${styles.back} ${styles.face}`}>
            <h2>{card.answear}</h2>
            <Button
              text={'flipp me back'}
              onClick={e => flipCardToBackground(e)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashCard;
