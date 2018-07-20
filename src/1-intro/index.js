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

import avatar from '../static/img/intro/photo.jpg';
import bulletTrain from '../static/img/intro/bullet_train.jpg';
import pennywise from '../static/img/intro/pennywise.jpg';
import pennywise_dance from '../static/img/intro/pennywise_dance.mp4';
import t_shaped from '../static/img/intro/t-shaped.png';
import semver from '../static/img/intro/semver.png';
import npm from '../static/img/intro/npm.png';

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

  <Slide bgImage={bulletTrain} bgDarken={0.8}>
    <Heading textColor="primary" size={4}>
      На что похожа фронтенд разработка сейчас?
    </Heading>
  </Slide>,
  <Slide>
    <Heading size={5}>2013-2014</Heading>
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
    <Heading size={5}>2015 - Хаос</Heading>
    <List>
      <Appear>
        <ListItem>10 разных реализаций Flux</ListItem>
      </Appear>
      <Appear>
        <ListItem>В мае вышел Redux</ListItem>
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
    <Heading size={5}>2016 - Усталость</Heading>
    <Text>
      Взрывной рост языка и экосистемы, появление кучи инструментов, библиотек и
      подходов.
    </Text>
  </Slide>,

  <Slide bgImage={pennywise} bgDarken={0.5}>
    <Text textColor="primary">Все отлично</Text>
  </Slide>,

  <Slide bgColor="black">
    <video width={640} height={480} autoPlay loop src={pennywise_dance} muted />
  </Slide>,

  <Slide>
    <Heading size={5}>2017 - Ренессанс?</Heading>
    <BlockQuote fit>
      <Quote textColor="black" textSize="2.5rem">
        Доступность, простота, динамическая природа и платформа распространения
        JavaScript позволяет нам наблюдать новый инструмент фреймворк или
        парадигму каждую неделю! Мы называем это "Ренессанс JavaScript"
      </Quote>
      <Cite>Sean T. Larkin Webpack Core team</Cite>
    </BlockQuote>
  </Slide>,

  <Slide>
    <Image src={semver} />
  </Slide>,

  <Slide>
    <Image src={npm} />
  </Slide>,

  <Slide>
    <Heading size={5}>2018 - You are here</Heading>
    <Text>Что осталось?</Text>
    <List>
      <Appear>
        <ListItem>влияние корпораций на язык</ListItem>
      </Appear>
      <Appear>
        <ListItem>влияние open source сообщества</ListItem>
      </Appear>
      <Appear>
        <ListItem>огромное количество решений</ListItem>
      </Appear>
      <Appear>
        <ListItem>слабая связанность инструментов</ListItem>
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
    <Text>Что изменилось?</Text>
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
    <Text>Что делать?</Text>
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
    <Heading>Что брать?</Heading>
    <List>
      <Appear>
        <ListItem>
          Фреймворк/библиотеку реализующую компонентный подход
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>State management</ListItem>
      </Appear>
    </List>
  </Slide>,
];
