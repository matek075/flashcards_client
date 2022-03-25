import React from 'react';
import Background from '../../components/background';
import NavBar from '../../components/nav_bar/index';
import LanguageLists from '../../components/language_lists/index';

const FlashCardsSectionPage = () => {
  return (
    <Background width="100%">
      <NavBar />
      <LanguageLists />
    </Background>
  );
};

export default FlashCardsSectionPage;
