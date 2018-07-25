import React from 'react';
import { Slide, Heading, Image, List, ListItem, Appear } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import mobxLogo from '../static/img/state-management/mobx_logo.png';
import reduxLogo from '../static/img/state-management/redux_logo.png';
import state_1 from '../static/img/state-management/1.png';
import state_2 from '../static/img/state-management/2.png';
import state_3 from '../static/img/state-management/3.png';

// eslint-disable-next-line
import reduxFirst from '!raw-loader!./redux.example';
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
      <Appear>
        <ListItem>один источник данных</ListItem>
      </Appear>
      <Appear>
        <ListItem>только для чтения</ListItem>
      </Appear>
      <Appear>
        <ListItem>изменения производятся с помощью чистых функций</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Heading fit>Позитивные стороны</Heading>
    <List>
      <Appear>
        <ListItem>предсказуемое поведение</ListItem>
      </Appear>
      <Appear>
        <ListItem>огромное сообщество</ListItem>
      </Appear>
      <Appear>
        <ListItem>куча учебного материала</ListItem>
      </Appear>
      <Appear>
        <ListItem>инструменты разработчика</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Heading textColor="tertiary">Минусы</Heading>
    <List>
      <Appear>
        <ListItem>кривая обучения</ListItem>
      </Appear>
      <Appear>
        <ListItem>boilerplate code</ListItem>
      </Appear>
      <Appear>
        <ListItem>нужна экосистема</ListItem>
      </Appear>
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
  <Slide>
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
