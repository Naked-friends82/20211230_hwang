import React, { useRef } from 'react';
import EachDetail from '../components/EachDetail';
import Exhi_RECK from '../data/Exhi_RECK';

import ent_1 from '../asset/penet/entrances1.jpg'
import ent_2 from '../asset/penet/entrances2.jpg'
import ent_3 from '../asset/penet/entrances3.png'

import sam_1 from '../asset/penet/sameAsBefore1.jpg'
import sam_2 from '../asset/penet/sameAsBefore2.jpg'
import sam_3 from '../asset/penet/sameAsBefore3.png'

import bou_1 from '../asset/penet/boundaries1.jpg'
import bou_2 from '../asset/penet/boundaries2.jpg'
import bou_3 from '../asset/penet/boundaries3.png'

import sha_1 from '../asset/penet/shadow1.jpg'
import sha_2 from '../asset/penet/shadow2.jpg'
import sha_3 from '../asset/penet/shadow3.png'

import spo_1 from '../asset/penet/spotlight1.jpg'
import spo_2 from '../asset/penet/spotlight2.jpg'
import spo_3 from '../asset/penet/spotlight3.png'

import gra_1 from '../asset/penet/grass.jpg'
// function
import { useHorizontalScroll } from "../function/scroll.js";

// CSS
import '../styles/web/penet/penet.css';
import '../styles/mobile/penet/penet_m.css';

// 함수_리펙토링
import ShiftThumb from '../function/ShiftThumb.js';
import ToggleDetail from '../function/ToggleDetail.js';

const Penet = () =>  {
  const ent1 = useRef();
  const sam1 = useRef();
  const bou1 = useRef();
  const sha1 = useRef();
  const spo1 = useRef();
  
  const ent2 = useRef();
  const sam2 = useRef();
  const bou2 = useRef();
  const sha2 = useRef();
  const spo2 = useRef();

  const ent3 = useRef();
  const sam3 = useRef();
  const bou3 = useRef();
  const sha3 = useRef();
  const spo3 = useRef();

  const gra1 = useRef();
  const penet_video = useRef();


  const PENET_RECK = [
      {
        title:'Entrances',
        caption: '. 한지에 수묵. 180.0 × 130.3cm. 2020',
        src: ent_1,
        ref: ent1,
      },
      {
        title:'모방명가화보-Entrances',
        caption: '. 종이에 유성판화. 20.0 × 30.0cm. 2020',
        src: ent_2,
        ref: ent2,
      },
      {
        title:'모방명가화보-하던대로 해주세요',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: sam_2,
        ref: sam2,
      },
      {
        title:'모방명가화보-Boundaries',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: bou_2,
        ref: bou2,
      },
      {
        title:'모방명가화보-Spotlight',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: spo_2,
        ref: spo2,
      },
      {
        title:'모방명가화보-그림자놀이',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: sha_2,
        ref: sha2,
      },
      {
        title:'죽란보-불이선란도',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: gra_1,
        ref: gra1,
      },


      {
        title:'Entrances_print',
        caption: '. 한지에 먹가루. 57.0 × 89.5cm. 2020',
        src: ent_3,
        ref: ent3,
      },
      {
        title:'하던대로 해주세요_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: sam_3,
        ref: sam3,
      },
      {
        title:'Boundaries_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: bou_3,
        ref: bou3,
      },
      {
        title:'Spotlight_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: spo_3,
        ref: spo3,
      },
      {
        title:'그림자놀이_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: sha_3,
        ref: sha3,
      },


      {
        title:'하던대로 해주세요',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: sam_1,
        ref: sam1,
      },
      {
        title:'Boundaries',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: bou_1,
        ref: bou1,
      },
      {
        title:'Spotlight',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: spo_1,
        ref: spo1,
      },
      {
        title:'그림자놀이',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: sha_1,
        ref: sha1,
      },
  ];
  
  // ShiftThumb 사용
  const initial_value = "Penetrating Stone";
  const ref_deck = [
    ent1,ent2,ent3,
    sam1,sam2,sam3,
    bou1, bou2, bou3,
    sha1, sha2, sha3,
    spo1, spo2, spo3,
    gra1, penet_video
  ]
  // shiftThumbPack[0]은 현재 thumb
  // shiftThumbPack[1]은 thumb 바꾸는 함수
  const shiftThumbPack = ShiftThumb(initial_value, ref_deck);
  
  const scrollRef = useHorizontalScroll();
  const scrollRef2 = useHorizontalScroll();

  // ToggleDetail 사용
  // shiftThumbPack[0]은 현재 detail
  // shiftThumbPack[1]은 detail 바꾸는 함수
  const toggleDetailPack = ToggleDetail();

  // Exhi_RECK에서 data 받아오기
  const detailDeck = Exhi_RECK(1)

  return (
    <section className="section">
      <div className="section_title">
        <h1>Penetrating Stone</h1>
        <button onClick={toggleDetailPack[1]}><i className="fa-solid fa-info" /></button>
      </div>
      <div className="section_reck" ref={scrollRef}>
        <iframe className='penet_reck_video' src="https://www.youtube.com/embed/0xzx0hLralY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ref={penet_video} alt="Penetrating Stone" onMouseEnter={shiftThumbPack[1]}></iframe>
        {PENET_RECK.map((each, index) => {
            return <img key={index} className="penet_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} onMouseEnter={shiftThumbPack[1]} />
          })}
      </div>
      <div className="img_info">
        <span>{shiftThumbPack[0]}</span>
      </div>
      <div className="thumbnail" ref={scrollRef2}>
        {PENET_RECK.map((each, index) => {
            return <img key={index} className={shiftThumbPack[0] === each.title+each.caption ? "thumbnail_each":"thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumbPack[2]} />
          })}
      </div>
      {
      toggleDetailPack[0] ? <EachDetail detailDeck={detailDeck} showDetail={toggleDetailPack[1]} />
      :(
      <></>
      )}
    </section>
  );
}

export default Penet;

