import React from 'react';
import {
  Heading,
  Text,
  Slide,
  Image,
  Appear,
  List,
  ListItem,
  Layout,
  Fill,
  BlockQuote,
  Quote,
  Cite,
} from 'spectacle';
import { css } from 'react-emotion';

import avatar from '../static/img/intro/photo.jpg';
import bulletTrain from '../static/img/intro/bullet_train.jpg';
import back_front from '../static/img/intro/frontend_backend.jpg';
import pennywise from '../static/img/intro/pennywise.jpg';
import pennywise_dance from '../static/img/intro/pennywise_dance.mp4';
import t_shaped from '../static/img/intro/t-shaped.png';
import semver from '../static/img/intro/semver.png';
// import npm from '../static/img/intro/npm.png';

const image = css`
  width: 500px;
`;

export const Intro = () => [
  <Slide>
    <div>
      <Heading caps fit>
        Вячеслав Минин
      </Heading>
      <Heading caps fit>
        Особенности выбора технологического стека в фронтенде
      </Heading>
    </div>
  </Slide>,

  <Slide>
    <Layout>
      <Fill>
        <Image margin={10} src={avatar} />
      </Fill>
      <Fill>
        <List>
          <ListItem>
            Фронтенд инженер в <em>SBrains</em>
          </ListItem>
          <ListItem>Занимаюсь разработкой с 2014</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,

  <Slide>
    <Heading fit>На что похожа фронтенд разработка сейчас?</Heading>
  </Slide>,

  <Slide>
    <Image src={bulletTrain} />
  </Slide>,

  <Slide>
    <Heading textColor="secondary" size={5}>
      2013-2014
    </Heading>
    <List>
      <Appear>
        <ListItem>2013 выходит React</ListItem>
      </Appear>
      <Appear>
        <ListItem>2014 выходит Flux</ListItem>
      </Appear>
      <Appear>
        <ListItem>2014 становится популярным webpack</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    <Heading textColor="secondary" size={5}>
      2015 - Хаос
    </Heading>
    <List>
      <Appear>
        <ListItem>10 разных реализаций Flux</ListItem>
      </Appear>
      <Appear>
        <ListItem>В мае вышла 11 - Redux</ListItem>
      </Appear>
      <Appear>
        <ListItem>React в половине тем докладов на конференциях</ListItem>
      </Appear>
      <Appear>
        <ListItem>В июне вышел стандарт ECMA 6</ListItem>
      </Appear>
      <Appear>
        <ListItem>6to5 → Babel, Traceur</ListItem>
      </Appear>
      <Appear>
        <ListItem>Функциональная парадигма</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    <Heading textColor="secondary" size={5}>
      2016 - Усталость
    </Heading>
    <Text textColor="secondary">
      Взрывной рост языка и экосистемы, появление кучи инструментов, библиотек и
      подходов.
    </Text>
  </Slide>,

  <Slide>
    <Heading>Систематическая ошибка выжившего</Heading>
  </Slide>,

  <Slide>
    <BlockQuote fit>
      <Quote textColor="secondary" textSize="2.5rem">
        Как мы решили проблему X с помощью [длинный набор технологий]
      </Quote>
      <Cite>Software architect A from huge company B</Cite>
    </BlockQuote>
  </Slide>,

  <Slide>
    <Image className={image} src={back_front} />
  </Slide>,

  <Slide bgImage={pennywise} bgDarken={0.3} />,

  <Slide bgColor="black">
    <video width={800} height={600} autoPlay loop src={pennywise_dance} muted />
  </Slide>,

  <Slide>
    <Heading textColor="secondary" size={5}>
      2017 - Ренессанс?
    </Heading>
    <BlockQuote fit>
      <Quote textColor="secondary" textSize="2.5rem">
        Доступность, простота, динамическая природа и платформа распространения
        JavaScript позволяет нам наблюдать новый инструмент фреймворк или
        парадигму каждую неделю! Мы называем это "Ренессанс JavaScript"
      </Quote>
      <Cite>Sean T. Larkin Webpack Core team</Cite>
    </BlockQuote>
  </Slide>,

  <Slide>
    <Heading textColor="secondary" size={3}>
      npm
    </Heading>
  </Slide>,

  <Slide>
    <Image src={semver} />
  </Slide>,

  <Slide>
    <Heading textColor="secondary" size={5}>
      2018 - You are here
    </Heading>
    <Text textColor="secondary">Что осталось?</Text>
    <List>
      <Appear>
        <ListItem>влияние корпораций на язык</ListItem>
      </Appear>
      <Appear>
        <ListItem>влияние open source сообщества</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          огромное количество решений порождает слабую взаимосвязь между
          инструментами
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          пишем через препроцессоры, компиляторы и используем бандлеры
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>все еще нет серебрянной пули</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    <Text textColor="secondary">Что изменилось?</Text>
    <List>
      <Appear>
        <ListItem>tooling стал легче</ListItem>
      </Appear>
      <Appear>
        <ListItem>инструменты стали круче</ListItem>
      </Appear>
      <Appear>
        <ListItem>единый codestyle</ListItem>
      </Appear>
      <Appear>
        <ListItem>полная поддержка ES6 всеми современными браузерами</ListItem>
      </Appear>
      <Appear>
        <ListItem>PWA уже не просто рекоммендация</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    <Heading size={2} margin="0 0 50px 0" textColor="secondary">
      Что делать?
    </Heading>
    <Appear>
      <Image src={t_shaped} />
    </Appear>
    <List>
      <Appear>
        <ListItem>Deep expertise in one area</ListItem>
      </Appear>
      <Appear>
        <ListItem>Cross-domain generalist</ListItem>
      </Appear>
    </List>
  </Slide>,

  <Slide>
    <Heading textColor="secondary">Что изучать?</Heading>
    <List>
      <Appear>
        <ListItem>
          Фреймворк или библиотеку реализующую компонентный подход
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>State management</ListItem>
      </Appear>
    </List>
  </Slide>,
];
