import React from 'react';
import { Slide, Heading, Image, List, ListItem } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import mobxLogo from '../static/img/state-management/mobx_logo.png';
import reduxLogo from '../static/img/state-management/redux_logo.png';
import state_1 from '../static/img/state-management/1.png';
import state_2 from '../static/img/state-management/2.png';
import state_3 from '../static/img/state-management/3.png';

// eslint-disable-next-line
import reduxFirst from '!raw-loader!./redux.example';
// eslint-disable-next-line
import reduxSecond from '!raw-loader!./redux_2.example';
// eslint-disable-next-line
import mobxFirst from '!raw-loader!./mobx.example';
// eslint-disable-next-line
import mobxSecond from '!raw-loader!./mobx_2.example';

export const StateManagement = () => [
  <Slide>
    <Heading>Организация состояния</Heading>
  </Slide>,
  <Slide bgColor="white">
    <Image src={state_1} />
  </Slide>,
  <Slide bgColor="white">
    <Image src={state_2} />
  </Slide>,
  <Slide bgColor="white">
    <Image src={state_3} />
  </Slide>,
  <Slide bgColor="white">
    <Image src={reduxLogo} />
  </Slide>,
  <Slide>
    <Heading fit>Ключевые принципы</Heading>
    <List>
      <ListItem>один источник данных</ListItem>
      <ListItem>только для чтения</ListItem>
      <ListItem>изменения производятся с помощью чистых функций</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading fit>Позитивные стороны</Heading>
    <List>
      <ListItem>предсказуемое поведение</ListItem>
      <ListItem>огромное сообщество</ListItem>
      <ListItem>куча учебного материала</ListItem>
      <ListItem>инструменты разработчика</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading textColor="tertiary">Минусы</Heading>
    <List>
      <ListItem>кривая обучения</ListItem>
      <ListItem>boilerplate code</ListItem>
      <ListItem>нужна экосистема</ListItem>
    </List>
  </Slide>,
  <CodeSlide
    color="white"
    transition={[]}
    lang="ts"
    code={reduxFirst}
    ranges={[
      { loc: [0, 3], title: 'Пишем action' },
      { loc: [4, 8], title: 'Описываем начальное состояние' },
      { loc: [11, 23] },
      { loc: [26, 31] },
      { loc: [32, 36] },
    ]}
  />,
  <CodeSlide
    color="white"
    transition={[]}
    lang="ts"
    code={reduxSecond}
    ranges={[
      { loc: [0, 4], title: 'Пишем actions' },
      { loc: [5, 10] },
      { loc: [11, 16] },
      { loc: [17, 18] },
      { loc: [18, 19] },
      { loc: [27, 30] },
      { loc: [32, 35] },
      { loc: [36, 39] },
      { loc: [52, 57] },
      { loc: [57, 63] },
      { loc: [63, 69] },
      { loc: [72, 77] },
      { loc: [83, 86] },
      { loc: [89, 93] },
    ]}
  />,
  <Slide bgColor="white">
    <Image width={400} height={400} src={mobxLogo} />
    <Heading textColor="black" caps>
      Mobx
    </Heading>
  </Slide>,
  <CodeSlide
    color="white"
    transition={[]}
    lang="ts"
    code={mobxFirst}
    ranges={[
      { loc: [1, 2], title: 'Помечаете данные' },
      { loc: [3, 7], title: 'Описываете действия' },
      { loc: [9, 12], title: 'Подключаете к компоненту' },
    ]}
  />,
  <CodeSlide
    color="white"
    transition={[]}
    lang="ts"
    code={mobxSecond}
    ranges={[
      { loc: [1, 3] },
      { loc: [11, 12] },
      { loc: [20, 23] },
      { loc: [24, 29] },
      { loc: [32, 35] },
    ]}
  />,
];
