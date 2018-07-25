import React from 'react';
import {
  Slide,
  Image,
  Heading,
  Appear,
  List,
  ListItem,
  CodePane,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// eslint-disable-next-line
import protoExample from '!raw-loader!./protobuf.example';
// eslint-disable-next-line
import typescriptExample from '!raw-loader!./typescript.example';
// eslint-disable-next-line
import typescriptExample2 from '!raw-loader!./typescript2.example';

const nan_joke = require(`../static/img/type-check/nan_joke.jpg`);
const typescript_bg = require(`../static/img/type-check/typescript_bg.png`);
const typescript_error = require(`../static/img/type-check/typescript_error.png`);
const type_joke = require(`../static/img/type-check/type_joke.jpg`);

const old_websites = require(`../static/img/type-check/old_websites.mp4`);

export const TypeChecking = () => [
  <Slide>
    <Heading>Проверка типов</Heading>
  </Slide>,

  <Slide>
    <Image src={type_joke} />
  </Slide>,
  <Slide bgImage={typescript_bg} />,
  <Slide>
    <Heading>Что это?</Heading>
    <List>
      <ListItem>надстройка над Javascript</ListItem>
      <ListItem>создан в Microsoft</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading>Зачем нам это?</Heading>
    <Appear>
      <Image width={456} height={495} src={nan_joke} />
    </Appear>
  </Slide>,

  <Slide>
    <video width={800} height={600} autoPlay loop src={old_websites} muted />
  </Slide>,

  <CodeSlide
    color="white"
    transition={[]}
    lang="ts"
    code={typescriptExample}
    ranges={[
      {
        loc: [0, 3],
      },
    ]}
  />,

  <Slide>
    <Image src={typescript_error} />
  </Slide>,

  <Slide>
    <Heading>Зачем нам это?</Heading>
    <List>
      <ListItem>
        популярность (4600+ типизированных библиотек @definitelyTyped)
      </ListItem>
      <ListItem>самодокументация</ListItem>
      <ListItem>отличная поддержка в IDE</ListItem>
      <ListItem>меняет стиль написания кода</ListItem>
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
  <Slide>
    <Heading>Bonus: Protobuf</Heading>
    <List>
      <ListItem>протокол сериализации</ListItem>
      <ListItem>создан в google</ListItem>
    </List>
  </Slide>,

  <Slide>
    <CodePane textSize="2rem" bgColor="#292D3E" source={protoExample} />
  </Slide>,

  <Slide>
    <Heading fit>Чем полезен?</Heading>
    <List>
      <ListItem>широкая поддержка языков</ListItem>
      <ListItem>самодокументация</ListItem>
      <ListItem>генерация typescript тайпингов</ListItem>
    </List>
    <Appear>
      <Text textColor="white">
        но нужно тащить в бандл схемы для дешифровки
      </Text>
    </Appear>
  </Slide>,
];
