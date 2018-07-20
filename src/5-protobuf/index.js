import React from 'react';
import { Slide, Heading, List, ListItem, Appear } from 'spectacle';

export const Protobuf = () => [
  <Slide>
    <Heading>Protobuf</Heading>
    <List>
      <Appear>
        <ListItem>протокол сериализации</ListItem>
      </Appear>
      <Appear>
        <ListItem>создан в google</ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide>
    <Heading fit>Чем полезен?</Heading>
    <List>
      <Appear>
        <ListItem>широкая поддержка языков</ListItem>
      </Appear>
      <Appear>
        <ListItem>самодокументация</ListItem>
      </Appear>
      <Appear>
        <ListItem>генерация typescript тайпингов</ListItem>
      </Appear>
      <Appear>
        <ListItem>но нужно тащить в бандл схемы для дешифровки</ListItem>
      </Appear>
    </List>
  </Slide>,
];
