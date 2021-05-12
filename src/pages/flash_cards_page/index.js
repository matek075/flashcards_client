import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FlashCardsApi from '../../utils/flashCardsApi';
import FlashCardContainer from '../../components/flash_card_container';
import Background from '../../components/background';
import Header from '../../components/header';

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
        <FlashCardContainer flashCardCollection={data} />
      </Background>
    );
  }
};

export default FlashCardsPage;
