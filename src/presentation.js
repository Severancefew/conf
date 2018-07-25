import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { Intro } from './1-intro';
import { Frameworks } from './2-frameworks';
import { StateManagement } from './3-state-management';
import { TypeChecking } from './4-type-checking';
import { Ending } from './5-ending';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#292D3E',
    secondary: '#FFFFFF',
    tertiary: '#FFFFFF',
    quartenary: '#ad42f4',
    purple: '#C691E9',
  },
  {
    primary: 'Helvetica',
    secondary: 'Helvetica',
  },
);

const slides = [
  ...Intro(),
  ...Frameworks(),
  ...StateManagement(),
  ...TypeChecking(),
  ...Ending(),
].map((element, idx) => ({ ...element, key: idx }));

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="pacman"
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        {slides}
      </Deck>
    );
  }
}
