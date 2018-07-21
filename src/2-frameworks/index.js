import React from 'react';
import {
  Slide,
  Heading,
  List,
  ListItem,
  Appear,
  Text as SpectacleText,
  Image,
  CodePane,
} from 'spectacle';
import { Button } from '@alicantoio/ui-kit';
import { ButtonPlayGround } from './ButtonPlayground';

import styled from 'react-emotion';

// eslint-disable-next-line
import reactExample from '!raw-loader!./react.example';

import composition from '../static/img/frameworks/composition.png';
import vueLogo from '../static/img/frameworks/vue.svg';
import angularLogo from '../static/img/frameworks/angular.png';
import reactLogo from '../static/img/frameworks/react.png';

const Text = styled(SpectacleText)`
  color: white;
`;

export const Frameworks = () => [
  <Slide>
    <Heading fit textColor="tertiary">
      Выбор технологий — холиварная тема
    </Heading>
  </Slide>,
  <Slide>
    <Heading fit>Компонентные фреймворки и библиотеки</Heading>
  </Slide>,
  <Slide>
    <Text>Зачем?</Text>
    <List>
      <ListItem>реиспользуемость</ListItem>
      <ListItem>композиция</ListItem>
      <ListItem>декларативность</ListItem>
    </List>
    <Image src={composition} />
  </Slide>,
  <Slide>
    <Text margin="0 0 50px 0" textColor="tertiary">
      Как пример
    </Text>
    <CodePane
      margin="0 0 50px 0"
      textSize="2rem"
      bgColor="#292D3E"
      source={reactExample}
    />
    <div style={{ marginBottom: 10 }}>
      <Button theme="warning" text="Hello world" />
    </div>
    <ButtonPlayGround />
  </Slide>,
  <Slide>
    <Heading textColor="secondary">Что общего?</Heading>
    <List>
      <Appear>
        <ListItem>поддерживает большая компания</ListItem>
      </Appear>
      <Appear>
        <ListItem>популярность</ListItem>
      </Appear>
      <Appear>
        <ListItem>performance</ListItem>
      </Appear>
      <Appear>
        <ListItem>быстрое развертывание</ListItem>
      </Appear>
      <Appear>
        <ListItem>инструменты / поддержка IDE</ListItem>
      </Appear>
      <Appear>
        <ListItem>тестируемость</ListItem>
      </Appear>
      <Appear>
        <ListItem>возраст</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Heading textColor="secondary">Различия</Heading>
    <List>
      <ListItem>гибкость</ListItem>
      <ListItem>навязывает архитектуру</ListItem>
      <ListItem>экосистема</ListItem>
      <ListItem>кривая обучения</ListItem>
      <ListItem>документация</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Image src={angularLogo} />
  </Slide>,
  <Slide>
    <Heading textColor="secondary" fit>
      Почему не взяли?
    </Heading>
    <List>
      <Appear>
        <ListItem>кривая обучения</ListItem>
      </Appear>
      <Appear>
        <ListItem>монолит</ListItem>
      </Appear>
      <Appear>
        <ListItem>завязан на typescript и декораторы</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Image src={reactLogo} />
  </Slide>,
  <Slide>
    <Heading fit>Почему мы выбрали?</Heading>
    <List>
      <Appear>
        <ListItem>только слой представления</ListItem>
      </Appear>
      <Appear>
        <ListItem>огромная экосистема</ListItem>
      </Appear>
      <Appear>
        <ListItem>гибкость</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Image src={vueLogo} />
  </Slide>,
  <Slide>
    <Heading fit>Почему стоит взглянуть?</Heading>
    <List>
      <Appear>
        <ListItem>кривая обучения</ListItem>
      </Appear>
      <Appear>
        <ListItem>документация</ListItem>
      </Appear>
      <Appear>
        <ListItem>берет лучшее из angular/react</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          поддержка css препроцессоров, изоляции стилей из коробки
        </ListItem>
      </Appear>
    </List>
    <Appear>
      <Text>Но не такая большая экосистема как у React</Text>
    </Appear>
  </Slide>,
];
