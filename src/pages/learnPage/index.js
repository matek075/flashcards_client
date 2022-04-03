import React from 'react';
import Background from '../../components/atoms/Background/Background';
import NavBar from '../../components/molecules/Navbar/Navbar';
import LanguageLists from '../../components/molecules/LanguageLists/LanguageLists';

const FlashCardsSectionPage = () => {
  return (
    <Background width="100%">
      <NavBar />
      <LanguageLists />
    </Background>
  );
};

export default FlashCardsSectionPage;
