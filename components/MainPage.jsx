import React from 'react'
import { useAppSelector } from '/hooks/redux'
import Head from "next/head";
import Form1 from './forms/Form1'

import FirstBlock from '../components/FirstBlock'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoBlock from '../components/VideoBlock'
import Advantages from '../components/Advantages'
import WhatIs from '../components/WhatIs'
import Numbers from '../components/Numbers'
import NewCity from '../components/NewCity'
import GameLibrary from '../components/GameLibrary'
import WorkWithUs from '../components/WorkWithUs'
import Comments from '../components/Comments'
import Zoom from '../components/Zoom'
import Photos from '../components/Photos'
import Team from '../components/Team'
import Arenas from '../components/Arenas'
import JoinUs from '../components/JoinUs'
import { dataForm } from './dataForm/data'
import { useRouter } from 'next/router';
import MassMedia from './mass_media/MassMedia';
import Reviews from './reviews/Reviews';

// import favicon from '../images/svg/logo.svg'; 

const MainPage = () => {
  const {show} = useAppSelector(state => state.UserReducer)
  const {show2} = useAppSelector(state => state.UserReducer)
  const {show3} = useAppSelector(state => state.UserReducer)
  const {show4} = useAppSelector(state => state.UserReducer)
  const {show5} = useAppSelector(state => state.UserReducer)
  const {showFinal} = useAppSelector(state => state.UserReducer)

  const router = useRouter();
  const enOption = (router.asPath.indexOf('/en') >= 0) ? true : false;

  let firstBlockSubtitle = "Ошибка Router";

  let title = 'Не франшиза ZAGA-GAME - сеть быстроокупаемых арен виртуальной реальности по всему миру. Звоните!';
  if (enOption) {
    title = 'Not a franchise ZAGA-GAME is a network of fast-paying virtual reality arenas around the world. Call!';
  }

  switch (router.asPath) {
    case '/':
      firstBlockSubtitle = <span>Успешный бизнес <span className='color-red fw-800'>с доходом до 5 млн. руб.</span><br /> в сфере виртуальной реальности</span>;
      break;
    case '/case1':
      firstBlockSubtitle = <span>Мы открыли <span className='color-red fw-800'>12 арен в декабре!</span><br /> Поможем открыть и в Вашем городе<br />Бизнес <span className='color-red fw-800'>с доходом до 5 млн. руб.</span></span>;
      break;
    case '/case2':
      firstBlockSubtitle = <span>Мы открыли <span className='color-red fw-800'>1500 м<sup>2</sup> площадей в декабре!</span><br /> Поможем открыть и в Вашем городе<br />Бизнес <span className='color-red fw-800'>с доходом до 5 млн. руб.</span></span>;
      break;
    case '/case3':
      firstBlockSubtitle = <span>Наш партнёр <span className='color-red fw-800'>окупился за 3 месяца!</span><br />Хотите так же? Получите презентацию<br />и узнайте как!</span>;
      break;
    case '/case4':
      firstBlockSubtitle = <span>Наши партнёры зарабатывают<br/><span className='color-red fw-800'>1 млн. руб. за 3 месяца!</span><br />Поможем заработать и Вам!</span>;
      break;
    case '/case5':
      firstBlockSubtitle = <span><span className='color-red fw-800'>Доход 1 млн. руб.</span> в Вашем городе реален!<br />Получите презентацию и узнайте<br/>свободен ли ваш город!</span>;
      break;
    case '/case1/en':
      firstBlockSubtitle = <span>We have opened <span className='color-red fw-800'>12 arenas in December!</span><br /> We will help you open your city<br />Business <span className='color-red fw-800'>with an income of up to 5 million rubles</span></span>;
      break;
    case '/case2/en':
      firstBlockSubtitle = <span>We opened <span className='color-red fw-800'>1500 m<sup>2</sup> of space in December!</span><br /> We will help you open it in your city<br /> Business <span className='color-red fw-800'>with an income of up to 5 million rubles</span></span>;
      break;
    case '/case3/en':
      firstBlockSubtitle = <span>Our partner <span className='color-red fw-800'>paid off in 3 months!</span><br />Do you want the same? Get the presentation<br />and find out how!</span>;
      break;
    case '/case4/en':
      firstBlockSubtitle = <span>Our partners earn<br/><span className='color-red fw-800'>1 million rubles. in 3 months!</span><br />We will help you earn money too!</span>;
      break;
    case '/case5/en':
      firstBlockSubtitle = <span><span className='color-red fw-800'>Income of 1 million rubles</span> is real in your city!<br />Get a presentation and find out<br/>if your city is free!</span>;
      break;
    case '/en':
      firstBlockSubtitle = <span>Successful business <span className='color-red fw-800'>with an income of up to 5 million rubles</span> in the field of virtual reality</span>;
      break;
  }

  return (
    <>
      <Head en={ enOption }>
        <title>{ title }</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {  show ? <Form1 en={ enOption } classes='form-block active' btnId={1} h2={dataForm[0].h2} h3={dataForm[0].h3} button={dataForm[0].button} buttond={dataForm[0].buttond} mail={dataForm[0].mail} />
        : show2 ? <Form1 en={ enOption } classes='form-block active' btnId={2} h2={dataForm[1].h2} h3={dataForm[1].h3} button={dataForm[1].button} buttond={dataForm[1].buttond} />
        : show3 ? <Form1 en={ enOption } classes='form-block active' btnId={3} h2={dataForm[2].h2} h3={dataForm[2].h3} button={dataForm[2].button} mail={dataForm[2].mail} buttond={dataForm[2].buttond} />
        : show4 ? <Form1 en={ enOption } classes='form-block active' btnId={4} h2={dataForm[3].h2} h3={dataForm[3].h3} button={dataForm[3].button} mail={dataForm[3].mail} buttond={dataForm[3].buttond} city={dataForm[3].city} time={dataForm[3].time} />
        : show5 ? <Form1 en={ enOption } classes='form-block active' btnId={5} h2={dataForm[4].h2} h3={dataForm[4].h3} button={dataForm[4].button} buttond={dataForm[4].buttond} mail={dataForm[4].mail} time={dataForm[4].time} />
        : showFinal ? <Form1 en={ enOption } classes='form-block active' btnId={6} />
        : <Form1 en={ enOption } classes='form-block' />
      }
      <Header en={ enOption } />
      {/* <Header /> */}
      <FirstBlock en={ enOption } subtitle={ firstBlockSubtitle } />
      <Reviews en={ enOption } />
      <VideoBlock en={ enOption } />
      <Advantages en={ enOption } />
      <WhatIs en={ enOption } />
      <Numbers en={ enOption } />
      <NewCity en={ enOption } />
      <GameLibrary en={ enOption } />
      <WorkWithUs en={ enOption } />
      {/* <Comments /> */}
      <Zoom en={ enOption } />
      <Photos en={ enOption } />
      <Team en={ enOption } />
      <MassMedia en={ enOption } />
      <Arenas en={ enOption } />
      <JoinUs en={ enOption } />
      <Footer en={ enOption } />
    </>
  )
}

export default MainPage