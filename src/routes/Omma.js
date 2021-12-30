import React, { useEffect, useRef, useState } from 'react';
import EachDetail from '../components/EachDetail';
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


// 전시전경
import omma_exhi_1 from '../asset/exhi/omma_exhi_1.jpg';
import omma_exhi_2 from '../asset/exhi/omma_exhi_2.jpg';
import omma_exhi_3 from '../asset/exhi/omma_exhi_3.jpg';
import "../style/web/omma.css";
import "../style/mobile/omma_m.css";




const Omma = () =>  {
  const fog1 = useRef();
  const fog2 = useRef();
  const stone1 = useRef();
  const stone2 = useRef();
  const stone3 = useRef();
  const mdf = useRef();
  const paper = useRef();

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
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_1,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_2,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_3,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_4,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_5,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_6,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_7,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_8,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_9,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_10,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_11,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_12,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_13,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_14,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_15,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_16,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_17,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_18,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_19,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_20,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_21,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_22,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_23,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_24,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_25,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_26,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_27,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_28,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_29,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_30,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_31,
      ref : mdf,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 비석',
      caption: '. MDF에 부조, 스프레이. 40.0 × 30.0cm. 2019',
      src: stone_32,
      ref : mdf,
    },
  ]
  const PRINT_PAPER_RECK = [
    //판화
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_1,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_2,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_3,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_4,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_5,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_6,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_7,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_8,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_9,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_10,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_11,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_12,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_13,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_14,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_15,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_16,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_17,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_18,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_19,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_20,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_21,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_22,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_23,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_24,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_25,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_26,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_27,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_28,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_29,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_30,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_31,
      ref: paper,
    },
    {
      title:'Muh Emdap Inam Mo를 위한 판화',
      caption: '. 한지에 유성판화. 40.0 × 30.0cm. 2019',
      src: print_32,
      ref: paper,
    },
  ]
  const [thumb, setThumb] = useState("");

  useEffect(() => {
    setThumb("Beyond the Stone. 한지에 수묵채색. 162.2 × 130.3cm. 2019");
  }, []);
  useEffect(() => {
    console.log(thumb, fog1.current.alt);
    if (thumb === fog1.current.alt){
      fog1.current.scrollIntoView({behavior: "smooth"});
    } else if (thumb === fog2.current.alt){
      fog2.current.scrollIntoView({behavior: "smooth", inline: "center"});
    } else if (thumb === stone1.current.alt){
      stone1.current.scrollIntoView({behavior: "smooth", inline: "center"});
    } else if (thumb === stone2.current.alt){
      stone2.current.scrollIntoView({behavior: "smooth", inline: "center"});
    } else if (thumb === stone3.current.alt){
      stone3.current.scrollIntoView({behavior: "smooth", inline: "center"});
    } else if (thumb === mdf.current.alt){
      mdf.current.scrollIntoView({behavior: "smooth", inline: "center"});
    } else if (thumb === paper.current.alt){
      paper.current.scrollIntoView({behavior: "smooth", inline: "center"});
    }
  }, [thumb])
  

  const shiftThumb = (e) => {
    const {target:{alt}} = e;
    setThumb(alt)
  }

  const [ommaDetail,setOmmaDetail] = useState(false)
  const showOmmaDetail = (e) => {
    setOmmaDetail(!ommaDetail)
    console.log(ommaDetail);
  }
  const omma_detailDeck = 
    {
      detailExhi:[
        omma_exhi_1,
        omma_exhi_2,
        omma_exhi_3,
      ],
      title: "돌의 언어에서 흘러나오는 공명의 파워: 문자-추상에서 그림-추상까지",
      author: "김남수(미술비평)",
      paper:
      <div>
        #1. “돌에게서 인간은 불변(das Unveränderliche)을 배운다. 돌은 자신의 불변을 모든 변하는 것을 초월한 위치에 놓는다.” (롬바흐) <br /><br />
        #2. “네팔의 산길을 걷다 보면 발에 채일 듯 많지만 주민들에게 성스럽게 여겨지는 돌들을 만날 수 있다. 이 돌들을 만나면 이것들의 왼쪽으로 걸어야 하며 아침에 이 문자들을 만지면서 ‘옴마니뺏메옴마니뺏메옴마니뻿메……’하고 주문을 외면 하루의 일이 잘 풀릴 것이라고 한다.” (황규민 작가노트 중에서)<br /><br /><br />

        ‘태초의 조건’을 재현한 입자가속기에 필요한 초고전압의 발명가 니콜라 테슬라, 그는 1899년 인터뷰에서 자신은 번개 다발로 콘서트를 만들 수 있으며, 그 콘서트의 사운드는 마치 히말라야 산정의 얼음 피크 소리와 같을 것이라고 했다. 그 피크 소리는 번개와 같은 것인가. 그런 것이다. 번개와 피크 소리가 마치 한 사람의 두뇌 속 측두엽에 자극을 가하고 다시 피드백이 반복되어 알아차리게 된다는 것이다. 무엇을? 눈에 보이는 자연 내부에 다른 자연이 있음을. 즉 ‘보이는 자연’ 안에 잠재한 ‘알아차리는 대자연’의 체험, 이것이 각성이다. 요는 번개가 빛이기는 하나, 결국 극단적 신경 자극이라는 것이다. 두뇌에 가해지는 공명으로서, 빛과 소리는 호환된다. 그 호환의 과정이 그림-추상과 문자-추상 사이의 오고감 현상이다.<br /><br />
        황규민 작가는 마치 테슬라처럼 네팔의 산악을 걷는 기분으로 전시 공간을 장치화한다. 네팔의 산악은 히말라야이고, 그 히말라야 산정에 부는 얼음 피크 소리는 신의 음성이라 불린다. 그 음성은 산정 높이 오르는 사람들의 귓가에는 들려도 무슨 뜻을 전달하려는 것인지는 알 길이 없다. 작가는 이 비의미의 음성을 종교가 포획하여 마법적 언어로 기획한 짧은 주문에 주목한다. ‘옴 마니 팟메 훔’, 이는 인도와 티벳을 거쳐 동아시아 일대까지 전파되어 나아간 주문이다. “연꽃 속의 진주”라거나 “요니 속의 링감” 같은 식으로 의미화를 시도하나, 실은 그 주문에 응축된 신의 음성은 소수의 헐벗은 밀교 수행자들만이 오랜 시간 그 음성의 서사시를 염송하면서 길을 가야만 겨우 느낄 수 있는 비의미의 공명 사운드이다. 황규민 작가는 이 메커니즘이 담겨있는 주문이 왜 히말라야 산길 모퉁이의 돌에 새겨져 있는가에 착목하고, 그 돌의 초월적인 장치를 전시장에 재현한다. 그것도 거꾸로 뒤집어서 MUH EMDAP INAM MO 라는 거울상의 소리이자 문자이다. 그와 함께 이 소리를 환청하게 하는 문자가 추상도를 더해가면서 외려 그림-추상으로 화해간다. 그림-추상은 소리가 신의 음성 그대로 이 세계를 창조하려는 직전 단계의 임계점을 현상하는 것처럼 보여진다. 그럼으로써 우리는 왼쪽 모퉁이를 돌면서 ‘알아차리는 대자연’의 섭리에 노출되게 될 것이다. <br /><br />

        #3. “더욱 중요한 것은 형태의 아름다움이 ‘무형의 공간’에서 만들어지는 것일 때, “무형이 곧 유형”이 된다.” (이응로)<br /><br /><br />

        이 모든 것이 돌에 새겨진 것이다. 혹은 돌에 새겨진 것으로 제작되거나 복사될 것이다. 그럼에도 불구하고 중요한 것은 돌이라는 태초의 매체가 무엇이며, 어떤 성격인가 하는 것이다. 철학자 롬바흐에 의하면, 돌은 ‘대항할 수 없는 것’, ‘파괴할 수 없는 것’으로서 오늘날의 언어로 우리는 이를 절대자(das Absolute)라고 칭할 수 있다. 사실 돌에게서 처음으로 절대자가 알려진 것이다. ‘옴 마니 팟메 훔’이라는 주문이 돌에 쓰여져 있다는 것은 돌이 말한다는 것이다. ‘말하는 돌’(윤병렬)은 우주로부터 들어오는 메시지를 담는 그릇으로서 미래학자 레이 커즈와일은 10의 27승 정도의 정보를 담을 수 있다고 한다. 이 정보량은 현재 개발된 수퍼컴퓨터의 10경배에 해당한다. ‘말하는 돌’에 의해 증폭된 주문이 그 산길 모퉁이에서 마주쳐서 다시 염송하는 사람들에게는 공명의 파워가 엄청날 것은 물론이다. 그러나 이는 소위 문화적인 형태의 믿음과 깊이 결속되어 있어서 지나치게 근대화된 교육을 받은 이의 마음에서는 발생하지 않는다. ‘알아차리는 대자연’은 믿는 이와 상응적으로만 교류한다.<br /><br />
        황규민 작가가 고심하는 것도 이 대목일 것이다. 작가 자신이 네팔에서 겪었던 불행한 비극과 함께 삶 그리고 그 바깥의 가능세계까지 살피는 경험은 ‘알아차리는 대자연’으로 예술의 세계가 이동하기를 바라게 된 터수다. 그럼에도 불구하고 히말라야라는 ‘보이는 자연’을 이곳으로 오브제처럼 옮겨놓는 것은 어떻게 가능한가, 라는 것. 즉 ‘보이는 자연’ 속에 잠재해 있는 것이 ‘알아차리는 대자연’이므로. 이때 작가는 “양쪽으로 늘어선 돌들과 함께 막다른 벽을 채우는 안개 낀 풍경 그림”을 배치하여 실재적 권능과 상징적 권능이라는 두마리 토끼를 겨냥한다. 돌은 실재하며, 여기서 어쨌든 말하게 될 것이다. <br /><br />
        하이데거는 “돌에게는 세계가 없고, 동물은 세계의 빈곤 속에 거주하며, 인간은 세계를 형성한다” 라는 명제를 비판하는 롬바흐처럼 황규민 작가는 “돌은 대자연의 ‘돌의 세계’가 있고, 동물은 세계의 풍요 속에서 이미 ‘인간’을 알고 있으며, 인간이야말로 이제 알아차려야 한다” 라고 말한다. 돌과 동물을 인간 닮은 창조주의 휴머니즘의 소산으로만 여기는 유럽중심주의에 황혼이 드리우고, 풍경화 속의 안개는 되레 인간과 사물, 인간과 동물, 인간과 인간이 서로 초-자연으로 통하고 호환하는 매개물이 될 것이다. 돌은 그러한 매개 작용을 독려하는 히말라야 피크 소리처럼 초월적인 권능으로 작용할까? 작가는 여기서 “부피를 잃은 돌의 복사물들”로부터 허탈한 웃음을 띠면서 되돌아가는 페이소스와 각성을 기대한다. 그런데 그 복사된 돌은 원래의 돌과 동일하게 ‘말하는 돌’로 개입한다는 것이 흥미롭다. ‘말하는 돌’은 쩡 하는 그 육중한 사운드와 함께 억년 동안의 지질 시대 동안 지켜온 침묵의, 침묵으로서의 말을 하고 있을 것이다. <br /><br />
        허탈한 웃음, 헛헛한 미소 속에서 우리가 깨달아야 할 것은 작가가 의도한 것이 예술적 퀄리티의 추구가 아니라 어떤 영적인 현현의 시도라는 점이다. 그는 관람객들이 자기변형으로서의 과정을 겪기를, 그 과정으로서의 관람행위가 참여가 되기를 바라는 것이다. 즉 우리가 현재 살고 있는 감각적 욕망의 삶과는 다른 삶, 낯설고 새로운 모습으로 자기 자신을 변형시키는 운동이 여전히 가능하다는 것, ‘알아차리는 대자연’의 진실은 저기 저 전시장 공간에도 선험적 공간으로서 히말라야라는 특정한 장소의 공간성과 마찬가지라고 주장하는 것이다. <br /><br />
        다시 말하지만, 황규민 작가는 네팔의 산길을 걸을 때 자신에게 일어난 사건을 경유하여 자신의 전시 공간을 걷도록 요청한다. 네팔의 산악은 히말라야이고, 그 산정 위로 부는 얼음 피크 소리는 신의 음성으로서 인간에 의해 염송되었다. 비의미의 심오한 음성은 수행자에게만 신탁처럼 풀이가 가능했고, 밀라래빠 십만송 같은 거대한 시는 그렇게 출현했다. 줄일 수 없는 기나긴 시간, 몰역사적인 장구한 시간 동안 히말라야에는 밀교 수행자들이 문명의 이기나 역사의 근대적 흐름과는 무관하게 그 ‘알아차리는 대자연’이라는 본질을 체득해내기 위해 거주했고, 그 산정의 흐르는 산[流山]의 성격대로 함께 흐르면서 살아왔다. 그러한 비-근대적 삶을 주목할 수 있는 것은 러시아 출신 화가 니콜라스 로어리치 정도의 화폭이었다. <br /><br />
        포스트모던이 하나의 유한성의 닫힌 시간 시스템이었음을 확인하는 작업으로 재정의하면서 우리는 그 ‘유한성 이후’의 새롭고 낯선 시간 단계로 접어들 수 있다. 그럴 때 우리가 주목해야 하는 것은 여전히 뉴욕발이나 베를린발 회귀성 모더니즘의 향수 같은 보수적인 시도가 아니라 오히려 그런 유한성의 끝물 같은 판과는 졀연된 전향적인 시도여야 한다. 로어리치의 히말라야와 티벳 주제의 회화와 황규민 작가의 뒤집어진 거울상의 주문이 흘러나오는 공명 장치의 전시가 보여주는 것은 그러한 유한성의 근대와 무관하게 흘러가도 예술의 동시대 현상이 될 수 있다는 것이다. 이처럼 황규민 작가는 ‘알아차리는 대자연’을 이 ‘유한성 이후’의 시대에 다시 착목하는 작업을 하고 있다. 
      </div>
    };


  return (
    <section className="section_omma">
      <div className="omma_title">
        <h1>MUH EMDAP INAM MO</h1>
        <button onClick={showOmmaDetail}>i</button>
      </div>
      <div className="omma_reck">
        {FOG_RECK.map((each) => {
          return <img className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} />
        })}
        {PRINT_MDF_RECK.map((each) => {
          return <img className="omma_reck_each_print" src={each.src} alt={each.title+each.caption} ref={mdf} />
        })}
        {FOG_RECK2.map((each) => {
          return <img className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} />
        })}
        {STONE_RECK.map((each) => {
          return <img className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref}/>
        })}
        {PRINT_PAPER_RECK.map((each) => {
          return <img className="omma_reck_each_print" src={each.src} alt={each.title+each.caption} ref={paper} />
        })}
      </div>
      <div className="img_info">
        <span>{thumb}</span>
        </div>
      <div className="omma_thumbnail">
        <div className="omma_thumbnail_black">
          {FOG_RECK.map((each) => {
            return <img className={thumb === each.title+each.caption ? "omma_thumbnail_each": "omma_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumb} />
          })}
          {PRINT_MDF_RECK.map((each) => {
            return <img className={thumb === each.title+each.caption ? "omma_print_thumbnail_each": "omma_print_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumb} />
          })}
          {FOG_RECK2.map((each) => {
            return <img className={thumb === each.title+each.caption ? "omma_thumbnail_each": "omma_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumb} />
          })}
        </div>
        <div className="omma_thumbnail_white">
          {STONE_RECK.map((each) => {
            return <img className={thumb === each.title+each.caption ? "omma_thumbnail_each": "omma_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumb} />
          })}
          {PRINT_PAPER_RECK.map((each) => {
            return <img className={thumb === each.title+each.caption ? "omma_print_thumbnail_each": "omma_print_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumb} />
          })}
        </div>
      </div>
      {
      ommaDetail ? <EachDetail detailDeck={omma_detailDeck} showDetail={showOmmaDetail} />
      :(
      <></>
      )}
    </section>
  );
}

export default Omma;

