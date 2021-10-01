import React from 'react';

import {
  OptionsContainer
} from './styles';

export default function Options({menuOpen, setSection, section}) {
  return (
    <>
      <OptionsContainer
        pressed={section === 'main' && menuOpen}
        onClick={() => setSection('main')}
      >
        Despesas
      </OptionsContainer>
      <OptionsContainer
        pressed={section === 'charts' && menuOpen}
        onClick={() => setSection('charts')}
      >
        Gráficos
      </OptionsContainer>
      <OptionsContainer
        pressed={section === 'about' && menuOpen}
        onClick={() => setSection('about')}
      >
        Sobre
      </OptionsContainer>
    </>
  )
}
