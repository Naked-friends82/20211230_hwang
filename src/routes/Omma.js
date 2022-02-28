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
import "../style/web/route/omma.css";
import "../style/mobile/route/omma_m.css";

// 함수_리펙토링
import ShiftThumb from '../function/ShiftThumb.js';
import ToggleDetail from '../function/ToggleDetail.js';

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


  // ShiftThumb 사용
  const initial_value = "Beyond the Stone. 한지에 수묵채색. 162.2 × 130.3cm. 2019";
  const ref_deck = [
    fog1,fog2,
    stone1,stone2,stone3,
    mdf,paper
  ]
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
        <button onClick={toggleDetailPack[1]}><span>i</span></button>
      </div>
      <div className="section_reck">
        {FOG_RECK.map((each) => {
          return <img key={each.src} className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} />
        })}
        {PRINT_MDF_RECK.map((each) => {
          return <img key={each.src} className="omma_reck_each_print" src={each.src} alt={each.title+each.caption} ref={mdf} />
        })}
        {FOG_RECK2.map((each) => {
          return <img key={each.src} className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} />
        })}
        {PRINT_PAPER_RECK.map((each) => {
          return <img key={each.src} className="omma_reck_each_print" src={each.src} alt={each.title+each.caption} ref={paper} />
        })}
        {STONE_RECK.map((each) => {
          return <img key={each.src} className="omma_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref}/>
        })}
      </div>
      <div className="img_info">
        <span>{shiftThumbPack[0]}</span>
        </div>
      <div className="thumbnail">
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
          {PRINT_PAPER_RECK.map((each, index) => {
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

