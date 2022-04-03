import React from 'react';
import FlashCard from '../../atoms/FlashCard/FlashCard';
import styles from './index.module.scss';

const FlashCardContainer = ({ flashCardCollection }) => {
  let flashCards = flashCardCollection.map(flashCard => {
    return <FlashCard key={flashCard.question} card={flashCard} />;
  });
  return <div className={styles.container}>{flashCards}</div>;
};

export default FlashCardContainer;
