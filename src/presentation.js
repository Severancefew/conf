import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { Intro } from './1-intro';
import { Frameworks } from './2-frameworks';
import { StateManagement } from './3-state-management';
import { TypeChecking } from './4-type-checking';
import { Protobuf } from './5-protobuf';
import { Ending } from './6-ending';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#03A9FC',
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
  ...Protobuf(),
  ...Ending(),
].map((element, idx) => ({ ...element, key: idx }));

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="number"
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        {slides}
      </Deck>
    );
  }
}
