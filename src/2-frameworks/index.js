import React from 'react';
import {
  Slide,
  Heading,
  List,
  ListItem,
  Appear,
  Text as SpectacleText,
  Image,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import styled from 'react-emotion';

// eslint-disable-next-line
import reactExample from '!raw-loader!./react.example';
// eslint-disable-next-line
import slidesExample from '!raw-loader!./slides.example';

import composition from '../static/img/frameworks/composition.png';
import vueLogo from '../static/img/frameworks/vue.svg';
import angularLogo from '../static/img/frameworks/angular.png';
import reactLogo from '../static/img/frameworks/react.png';
import buttons from '../static/img/frameworks/buttons.png';

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
    <Image src={buttons} />
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
  <Slide bgColor="white">
    <Image src={angularLogo} />
  </Slide>,
  <Slide>
    <List>
      <ListItem>полноценное решение</ListItem>
      <ListItem>статическая типизация</ListItem>
      <ListItem>обширная документация</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading textColor="secondary" fit>
      Почему не взяли?
    </Heading>
    <List>
      <ListItem>кривая обучения</ListItem>
      <ListItem>монолит</ListItem>
      <ListItem>завязан на typescript</ListItem>
      <ListItem>декораторы</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="white">
    <Image src={reactLogo} />
  </Slide>,
  <Slide>
    <Heading fit>Почему мы выбрали?</Heading>
    <List>
      <ListItem>только слой представления</ListItem>
      <ListItem>огромная экосистема</ListItem>
      <ListItem>гибкость</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading>Минусы</Heading>
    <List>
      <ListItem>сильно завязан на js</ListItem>
      <ListItem>JSX</ListItem>
    </List>
  </Slide>,
  <CodeSlide
    color="white"
    transition={[]}
    showLineNumbers={false}
    lang="jsx"
    code={slidesExample}
    ranges={[
      {
        loc: [0, 7],
        title: 'Презентация на React',
      },
    ]}
  />,
  <Slide bgColor="white">
    <Image src={vueLogo} />
  </Slide>,
  <Slide>
    <Heading fit>Почему стоит взглянуть?</Heading>
    <List>
      <ListItem>кривая обучения</ListItem>
      <ListItem>документация</ListItem>
      <ListItem>берет лучшее из angular/react</ListItem>
      <ListItem>много чего из коробки</ListItem>
    </List>
    <Appear>
      <Text>Но не такая большая экосистема как у React</Text>
    </Appear>
  </Slide>,
];
