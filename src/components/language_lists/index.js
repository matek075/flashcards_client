import React from 'react'
import Section_Card from '../section_card/index'


const LanguageLists = () => {
    return(
    <>
        <Section_Card text={'javascript'} list={['hoisting','zmienne','eventy','tablice','cos jeszcze']}/>
        <Section_Card text={'html'} list={['podstawowe znaczniki','dodawanie obrazka']}/>
        <Section_Card text={'css'} list={['flex','jednostki','animacje']}/>
        <Section_Card text={'php'} list={['formularze','zmienne','dodawanie komentarzy']}/>
        <Section_Card text={'express'} list={['podstawy','odbieranie danych','łączenie z bazą danych']}/>
        <Section_Card text={'react'} list={['komponenty','stan komponentu']}/>
    </>
    )
}

export default LanguageLists