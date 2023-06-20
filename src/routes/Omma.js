import React, { useRef } from 'react';
import EachDetail from '../components/EachDetail';
import Exhi_RECK from '../data/Exhi_RECK';
import top from '../asset/omma/top.jpg';
import rock_1 from '../asset/omma/rock_1.jpg';
import rock_2 from '../asset/omma/rock_2.jpg';
import rock_3 from '../asset/omma/rock_3.jpg';
import rock_4 from '../asset/omma/rock_4.jpg';

import print_1 from '../asset/omma/print_1.jpg';
import print_2 from '../asset/omma/print_2.jpg';
import print_3 from '../asset/omma/print_3.jpg';
import print_4 from '../asset/omma/print_4.jpg';
import print_5 from '../asset/omma/print_5.jpg';
import print_6 from '../asset/omma/print_6.jpg';
import print_7 from '../asset/omma/print_7.jpg';
import print_8 from '../asset/omma/print_8.jpg';
import print_9 from '../asset/omma/print_9.jpg';
import print_10 from '../asset/omma/print_10.jpg';
import print_11 from '../asset/omma/print_11.jpg';
import print_12 from '../asset/omma/print_12.jpg';
import print_13 from '../asset/omma/print_13.jpg';
import print_14 from '../asset/omma/print_14.jpg';
import print_15 from '../asset/omma/print_15.jpg';
import print_16 from '../asset/omma/print_16.jpg';
import print_17 from '../asset/omma/print_17.jpg';
import print_18 from '../asset/omma/print_18.jpg';
import print_19 from '../asset/omma/print_19.jpg';
import print_20 from '../asset/omma/print_20.jpg';
import print_21 from '../asset/omma/print_21.jpg';
import print_22 from '../asset/omma/print_22.jpg';
import print_23 from '../asset/omma/print_23.jpg';
import print_24 from '../asset/omma/print_24.jpg';
import print_25 from '../asset/omma/print_25.jpg';
import print_26 from '../asset/omma/print_26.jpg';
import print_27 from '../asset/omma/print_27.jpg';
import print_28 from '../asset/omma/print_28.jpg';
import print_29 from '../asset/omma/print_29.jpg';
import print_30 from '../asset/omma/print_30.jpg';
import print_31 from '../asset/omma/print_31.jpg';
import print_32 from '../asset/omma/print_32.jpg';

import stone_1 from '../asset/omma/stone_1.jpg';
import stone_2 from '../asset/omma/stone_2.jpg';
import stone_3 from '../asset/omma/stone_3.jpg';
import stone_4 from '../asset/omma/stone_4.jpg';
import stone_5 from '../asset/omma/stone_5.jpg';
import stone_6 from '../asset/omma/stone_6.jpg';
import stone_7 from '../asset/omma/stone_7.jpg';
import stone_8 from '../asset/omma/stone_8.jpg';
import stone_9 from '../asset/omma/stone_9.jpg';
import stone_10 from '../asset/omma/stone_10.jpg';
import stone_11 from '../asset/omma/stone_11.jpg';
import stone_12 from '../asset/omma/stone_12.jpg';
import stone_13 from '../asset/omma/stone_13.jpg';
import stone_14 from '../asset/omma/stone_14.jpg';
import stone_15 from '../asset/omma/stone_15.jpg';
import stone_16 from '../asset/omma/stone_16.jpg';
import stone_17 from '../asset/omma/stone_17.jpg';
import stone_18 from '../asset/omma/stone_18.jpg';
import stone_19 from '../asset/omma/stone_19.jpg';
import stone_20 from '../asset/omma/stone_20.jpg';
import stone_21 from '../asset/omma/stone_21.jpg';
import stone_22 from '../asset/omma/stone_22.jpg';
import stone_23 from '../asset/omma/stone_23.jpg';
import stone_24 from '../asset/omma/stone_24.jpg';
import stone_25 from '../asset/omma/stone_25.jpg';
import stone_26 from '../asset/omma/stone_26.jpg';
import stone_27 from '../asset/omma/stone_27.jpg';
import stone_28 from '../asset/omma/stone_28.jpg';
import stone_29 from '../asset/omma/stone_29.jpg';
import stone_30 from '../asset/omma/stone_30.jpg';
import stone_31 from '../asset/omma/stone_31.jpg';
import stone_32 from '../asset/omma/stone_32.jpg';

// CSS
import '../styles/web/omma/omma.css';
import '../styles/mobile/omma/omma_m.css';

// 함수_리펙토링
import { useHorizontalScroll } from "../function/scroll";
import ShiftThumb from '../function/ShiftThumb.js';
import ToggleDetail from '../function/ToggleDetail.js';

const Omma = () =>  {
  const fog1 = useRef();
  const fog2 = useRef();
  const stone1 = useRef();
  const stone2 = useRef();
  const stone3 = useRef();
  const mdf01 = useRef();
  const mdf02 = useRef();
  const mdf03 = useRef();
  const mdf04 = useRef();
  const mdf05 = useRef();
  const mdf06 = useRef();
  const mdf07 = useRef();
  const mdf08 = useRef();
  const mdf09 = useRef();
  const mdf10 = useRef();
  const mdf11 = useRef();
  const mdf12 = useRef();
  const mdf13 = useRef();
  const mdf14 = useRef();
  const mdf15 = useRef();
  const mdf16 = useRef();
  const mdf17 = useRef();
  const mdf18 = useRef();
  const mdf19 = useRef();
  const mdf20 = useRef();
  const mdf21 = useRef();
  const mdf22 = useRef();
  const mdf23 = useRef();
  const mdf24 = useRef();
  const mdf25 = useRef();
  const mdf26 = useRef();
  const mdf27 = useRef();
  const mdf28 = useRef();
  const mdf29 = useRef();
  const mdf30 = useRef();
  const mdf31 = useRef();
  const mdf32 = useRef();

  const paper01 = useRef();
  const paper02 = useRef();
  const paper03 = useRef();
  const paper04 = useRef();
  const paper05 = useRef();
  const paper06 = useRef();
  const paper07 = useRef();
  const paper08 = useRef();
  const paper09 = useRef();
  const paper10 = useRef();
  const paper11 = useRef();
  const paper12 = useRef();
  const paper13 = useRef();
  const paper14 = useRef();
  const paper15 = useRef();
  const paper16 = useRef();
  const paper17 = useRef();
  const paper18 = useRef();
  const paper19 = useRef();
  const paper20 = useRef();
  const paper21 = useRef();
  const paper22 = useRef();
  const paper23 = useRef();
  const paper24 = useRef();
  const paper25 = useRef();
  const paper26 = useRef();
  const paper27 = useRef();
  const paper28 = useRef();
  const paper29 = useRef();
  const paper30 = useRef();
  const paper31 = useRef();
  const paper32 = useRef();

  const FOG_RECK = [

    {
      title:'Beyond the Stone',
      caption: '. 한지에 수묵채색. 162.2 × 130.3cm. 2019',
      src: rock_1,
      ref: fog1,
    },
  ]
  const FOG_RECK2 = [
    {
      title:'Muh Emdap Inam Mo',
      caption: '. 한지에 수묵, 호분. 175.0 × 334.0cm. 2019',
      src: top,
      ref: fog2,
    },
  ]
  const STONE_RECK = [
    //바위
    {
      title:'Beyond the Stone_1',
      caption: '. 한지에 수묵채색. 162.2 × 112.1cm. 2019',
      src: rock_2,
      ref: stone1,
    },
    {
      title:'Beyond the Stone_2',
      caption: '. 한지에 수묵채색. 162.2 × 130.3cm. 2019',
      src: rock_3,
      ref: stone2,
    },
    {
      title:'Beyond the Stone_3',
      caption: '. 한지에 수묵채색. 162.2 × 130.3cm. 2019',
      src: rock_4,
      ref: stone3,
    },
  ]
  const PRINT_MDF_RECK = [
    //비석
    {
      title:'Muh Emdap Inam Mo를 위한 비석-1',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_1,
      ref : mdf01,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-2',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_2,
      ref : mdf02,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-3',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_3,
      ref : mdf03,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-4',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_4,
      ref : mdf04,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-5',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_5,
      ref : mdf05,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-6',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_6,
      ref : mdf06,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-7',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_7,
      ref : mdf07,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-8',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_8,
      ref : mdf08,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-9',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_9,
      ref : mdf09,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-10',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_10,
      ref : mdf10,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-11',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_11,
      ref : mdf11,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-12',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_12,
      ref : mdf12,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-13',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_13,
      ref : mdf13,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-14',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_14,
      ref : mdf14,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-15',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_15,
      ref : mdf15,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-16',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_16,
      ref : mdf16,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-17',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_17,
      ref : mdf17,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-18',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_18,
      ref : mdf18,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-19',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_19,
      ref : mdf19,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-20',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_20,
      ref : mdf20,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-21',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_21,
      ref : mdf21,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-22',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_22,
      ref : mdf22,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-23',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_23,
      ref : mdf23,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-24',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_24,
      ref : mdf24,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-25',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_25,
      ref : mdf25,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-26',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_26,
      ref : mdf26,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-27',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_27,
      ref : mdf27,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-28',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_28,
      ref : mdf28,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-29',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_29,
      ref : mdf29,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-30',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_30,
      ref : mdf30,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-31',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_31,
      ref : mdf31,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석-32',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_32,
      ref : mdf32,
    },
  ]
  const PRINT_PAPER_RECK = [
    //판화
    {
      title:'Muh Emdap Inam Mo를 위한 판화-1',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_1,
      ref: paper01,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-2',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_2,
      ref: paper02,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-3',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_3,
      ref: paper03,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-4',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_4,
      ref: paper04,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-5',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_5,
      ref: paper05,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-6',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_6,
      ref: paper06,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-7',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_7,
      ref: paper07,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-8',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_8,
      ref: paper08,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-9',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_9,
      ref: paper09,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-10',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_10,
      ref: paper10,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-11',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_11,
      ref: paper11,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-12',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_12,
      ref: paper12,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-13',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_13,
      ref: paper13,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-14',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_14,
      ref: paper14,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-15',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_15,
      ref: paper15,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-16',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_16,
      ref: paper16,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-17',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_17,
      ref: paper17,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-18',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_18,
      ref: paper18,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-19',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_19,
      ref: paper19,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-20',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_20,
      ref: paper20,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-21',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_21,
      ref: paper21,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-22',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_22,
      ref: paper22,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-23',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_23,
      ref: paper23,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-24',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_24,
      ref: paper24,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-25',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_25,
      ref: paper25,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-26',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_26,
      ref: paper26,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-27',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_27,
      ref: paper27,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-28',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_28,
      ref: paper28,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-29',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_29,
      ref: paper29,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-30',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_30,
      ref: paper30,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-31',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_31,
      ref: paper31,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화-32',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_32,
      ref: paper32,
    },
  ]


  // ShiftThumb 사용
  const initial_value = "Beyond the Stone. 한지에 수묵채색. 162.2 × 130.3cm. 2019";
  const ref_deck = [
    fog1,fog2,
    stone1,stone2,stone3,
    mdf01,
    mdf02,
    mdf03,
    mdf04,
    mdf05,
    mdf06,
    mdf07,
    mdf08,
    mdf09,
    mdf10,
    mdf11,
    mdf12,
    mdf13,
    mdf14,
    mdf15,
    mdf16,
    mdf17,
    mdf18,
    mdf19,
    mdf20,
    mdf21,
    mdf22,
    mdf23,
    mdf24,
    mdf25,
    mdf26,
    mdf27,
    mdf28,
    mdf29,
    mdf30,
    mdf31,
    mdf32,
    paper01,
    paper02,
    paper03,
    paper04,
    paper05,
    paper06,
    paper07,
    paper08,
    paper09,
    paper10,
    paper11,
    paper12,
    paper13,
    paper14,
    paper15,
    paper16,
    paper17,
    paper18,
    paper19,
    paper20,
    paper21,
    paper22,
    paper23,
    paper24,
    paper25,
    paper26,
    paper27,
    paper28,
    paper29,
    paper30,
    paper31,
    paper32
  ]

  const scrollRef = useHorizontalScroll();
  const scrollRef2 = useHorizontalScroll();

  // shiftThumbPack[0]은 현재 thumb
  // shiftThumbPack[1]은 thumb 바꾸는 함수
  const shiftThumbPack = ShiftThumb(initial_value, ref_deck);

  // ToggleDetail 사용
  // shiftThumbPack[0]은 현재 detail
  // shiftThumbPack[1]은 detail 바꾸는 함수
  const toggleDetailPack = ToggleDetail();
  
  // Exhi_RECK에서 data 받아오기
  const detailDeck = Exhi_RECK(0)

  return (
    <section className="section">
      <div className="section_title">
        <h1>MUH EMDAP INAM MO</h1>
        <button onClick={toggleDetailPack[1]}><i className="fa-solid fa-info" /></button>
      </div>
      <div className="section_reck" ref={scrollRef}>
        {FOG_RECK.map((each) => {
          return <img key={each.src} className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} onMouseEnter={shiftThumbPack[1]}/>
        })}
        {PRINT_MDF_RECK.map((each) => {
          return <img key={each.src} className="omma_reck_each_print" src={each.src} alt={each.title+each.caption} ref={each.ref} onMouseEnter={shiftThumbPack[1]}/>
        })}
        {FOG_RECK2.map((each) => {
          return <img key={each.src} className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} onMouseEnter={shiftThumbPack[1]}/>
        })}
        {PRINT_PAPER_RECK.reverse().map((each) => {
          return <img key={each.src} className="omma_reck_each_print" src={each.src} alt={each.title+each.caption} ref={each.ref} onMouseEnter={shiftThumbPack[1]}/>
        })}
        {STONE_RECK.map((each) => {
          return <img key={each.src} className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} onMouseEnter={shiftThumbPack[1]}/>
        })}
      </div>
      <div className="img_info">
        <span>{shiftThumbPack[0]}</span>
        </div>
      <div className="thumbnail" ref={scrollRef2}>
        <div className="omma_thumbnail_black">
          {FOG_RECK.map((each, index) => {
            return <img key={index} className={shiftThumbPack[0] === each.title+each.caption ? "thumbnail_each": "thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumbPack[1]} />
          })}
          {PRINT_MDF_RECK.map((each, index) => {
            return <img key={index} className={shiftThumbPack[0] === each.title+each.caption ? "omma_print_thumbnail_each": "omma_print_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumbPack[1]} />
          })}
          {FOG_RECK2.map((each, index) => {
            return <img key={index} className={shiftThumbPack[0] === each.title+each.caption ? "thumbnail_each": "thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumbPack[1]} />
          })}
        </div>
        <div className="omma_thumbnail_white">
          {PRINT_PAPER_RECK.reverse().map((each, index) => {
            return <img key={index} className={shiftThumbPack[0] === each.title+each.caption ? "omma_print_thumbnail_each": "omma_print_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumbPack[1]} />
          })}
          {STONE_RECK.map((each, index) => {
            return <img key={index} className={shiftThumbPack[0] === each.title+each.caption ? "thumbnail_each": "thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumbPack[1]} />
          })}

        </div>
      </div>
      {
      toggleDetailPack[0] ? <EachDetail detailDeck={detailDeck} showDetail={toggleDetailPack[1]} />
      :(
      <></>
      )}
    </section>
  );
}

export default Omma;

