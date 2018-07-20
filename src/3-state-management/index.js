import React from 'react';
import { Slide, Heading, Image, List, ListItem, Appear } from 'spectacle';

import mobxLogo from '../static/img/state-management/mobx_logo.png';
import reduxLogo from '../static/img/state-management/redux_logo.png';
import state_1 from '../static/img/state-management/1.png';
import state_2 from '../static/img/state-management/2.png';
import state_3 from '../static/img/state-management/3.png';

export const StateManagement = () => [
  <Slide>
    <Heading>Организация состояния</Heading>
  </Slide>,
  <Slide>
    <Image src={state_1} />
  </Slide>,
  <Slide>
    <Image src={state_2} />
  </Slide>,
  <Slide>
    <Image src={state_3} />
  </Slide>,
  <Slide>
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
    <Heading size={3}>Минусы</Heading>
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
  <Slide>
    <Image width={400} height={400} src={mobxLogo} />
    <Heading textColor="black" caps>
      Mobx
    </Heading>
  </Slide>,
];
