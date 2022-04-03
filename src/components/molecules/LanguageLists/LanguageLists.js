import React from 'react';
import SectionCard from '../../atoms/SectionCard/SectionCard';

const LanguageLists = () => {
  return (
    <>
      <SectionCard text={'javascript'} list={['hoisting', 'zmienne', 'eventy', 'tablice', 'cos jeszcze']} />
      <SectionCard text={'html'} list={['podstawowe znaczniki', 'dodawanie obrazka']} />
      <SectionCard text={'css'} list={['flex', 'jednostki', 'animacje']} />
      <SectionCard text={'php'} list={['formularze', 'zmienne', 'dodawanie komentarzy']} />
      <SectionCard text={'express'} list={['podstawy', 'odbieranie danych', 'łączenie z bazą danych']} />
      <SectionCard text={'react'} list={['komponenty', 'stan komponentu']} />
    </>
  );
};

export default LanguageLists;
