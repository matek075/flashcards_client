import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './index.module.scss';
import FlashCardsApi from '../../api/flashCardsApi';
import FlashCardContainer from '../../components/molecules/FlashCardContainer/FlashCardContainer';
import Background from '../../components/atoms/Background/Background';
import Header from '../../components/atoms/Header/Header';

const FlashCardsPage = () => {
  const [state, setState] = useState({
    isLoaded: false,
    data: '',
  });

  let { languageType } = useParams();
  useEffect(() => {
    FlashCardsApi.fetchFlashCards(languageType)
      .then(data => {
        setState({
          isLoaded: true,
          data: data.flashCards,
        });
      })
      .catch(error => {
        console.log(error);
      });
  });
  let { isLoaded, data } = state;
  if (!isLoaded) {
    return <p>This is {languageType} page to learn,loading...</p>;
  } else if (isLoaded) {
    return (
      <Background width="100%">
        <Header text={`Welcome in ${languageType} section`} />
        <span className={styles.backText} onClick={() => window.history.back()}>
          <span role="img" aria-label="back">
            ◀️
          </span>{' '}
          powrot
        </span>
        <FlashCardContainer flashCardCollection={data} />
      </Background>
    );
  }
};

export default FlashCardsPage;
