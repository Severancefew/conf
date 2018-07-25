import React from 'react';
import { Slide, Appear, List, ListItem, Heading } from 'spectacle';

const thatsAll = require(`../static/img/Thats_all_folks.svg`);

export const Ending = () => [
  <Slide>
    <Heading>Тезисы</Heading>
    <List>
      <Appear>
        <ListItem>изучайте подход, а не API</ListItem>
      </Appear>
      <Appear>
        <ListItem>инструменты должны приносить пользу</ListItem>
      </Appear>
      <Appear>
        <ListItem>обсуждайте, предлагайте, делегируйте</ListItem>
      </Appear>
      <Appear>
        <ListItem>не бойтесь пробовать новое</ListItem>
      </Appear>
      <Appear>
        <ListItem>но можете подождать пока останется один победитель</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide bgImage={thatsAll} />,
];
