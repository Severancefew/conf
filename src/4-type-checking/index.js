import React from 'react';
import { Slide, Image, Heading, Appear, List, ListItem } from 'spectacle';

const nan_joke = require(`../static/img/type-check/nan_joke.jpg`);
const typescript_bg = require(`../static/img/type-check/typescript_bg.png`);

export const TypeChecking = () => [
  <Slide>
    <Heading>Проверка типов</Heading>
  </Slide>,
  <Slide bgImage={typescript_bg} />,
  <Slide>
    <Heading>Что это?</Heading>
    <List>
      <Appear>
        <ListItem>надстройка над Javascript</ListItem>
      </Appear>
      <Appear>
        <ListItem>создан в Microsoft</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Heading>Зачем нам это?</Heading>
    <Appear>
      <Image src={nan_joke} />
    </Appear>
  </Slide>,
  <Slide>
    <List>
      <Appear>
        <ListItem>статический анализатор типов</ListItem>
      </Appear>
      <Appear>
        <ListItem>самодокументация</ListItem>
      </Appear>
      <Appear>
        <ListItem>популярность</ListItem>
      </Appear>
      <Appear>
        <ListItem>отличная поддержка в IDE</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Heading>Минусы</Heading>
    <List>
      <Appear>
        <ListItem>кривая изучения</ListItem>
      </Appear>
      <Appear>
        <ListItem>отдельный язык</ListItem>
      </Appear>
      <Appear>
        <ListItem>типы не всегда свежие</ListItem>
      </Appear>
      <Appear>
        <ListItem>может ошибаться</ListItem>
      </Appear>
      <Appear>
        <ListItem>затраты на покрытие</ListItem>
      </Appear>
    </List>
  </Slide>,
];