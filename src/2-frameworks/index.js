import React from 'react';
import { Slide, Heading, List, ListItem, Appear, Text, Image } from 'spectacle';

import composition from '../static/img/frameworks/composition.png';
import vueLogo from '../static/img/frameworks/vue.png';
import angularLogo from '../static/img/frameworks/angular.png';
import reactLogo from '../static/img/frameworks/react.png';

export const Frameworks = () => [
  <Slide key="0">
    <Heading>Disclaimer</Heading>
    <Text>Выбор технологий — холиварная тема</Text>
  </Slide>,
  <Slide key="1">
    <Heading fit>Компонентные фреймворки и библиотеки</Heading>
  </Slide>,
  <Slide key="2">
    <Text>Зачем?</Text>
    <List>
      <ListItem>реиспользуемость</ListItem>
      <ListItem>композиция</ListItem>
      <ListItem>декларативность</ListItem>
    </List>
    <Image src={composition} />
  </Slide>,
  <Slide key="3">
    <Heading>Что общего?</Heading>
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
        <ListItem>server-side rendering</ListItem>
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
  <Slide key="4">
    <Text>Различия</Text>
    <List>
      <ListItem>гибкость</ListItem>
      <ListItem>навязывает архитектуру</ListItem>
      <ListItem>экосистема</ListItem>
      <ListItem>кривая обучения</ListItem>
      <ListItem>документация</ListItem>
    </List>
  </Slide>,
  <Slide key="5">
    <Image src={angularLogo} />
  </Slide>,
  <Slide key="6">
    <Heading fit>Почему не взяли?</Heading>
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
  <Slide key="7">
    <Image src={reactLogo} />
  </Slide>,
  <Slide key="10">
    <Heading fit>Почему мы выбрали?</Heading>
    <List>
      <Appear>
        <ListItem>только view слой</ListItem>
      </Appear>
      <Appear>
        <ListItem>огромная экосистема</ListItem>
      </Appear>
      <Appear>
        <ListItem>гибкость</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide key="11">
    <Image src={vueLogo} />
  </Slide>,
  <Slide key="12">
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
