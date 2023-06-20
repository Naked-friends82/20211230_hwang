import React from 'react';
import EachDetail from '../components/EachDetail';
import Exhi_RECK from '../data/Exhi_RECK';

// function
import { useHorizontalScroll } from "../function/scroll.js";
// CSS
import '../styles/web/penet/penet.css';
import '../styles/mobile/penet/penet_m.css';
// 함수_리펙토링
import ShiftThumb from '../function/ShiftThumb.js';
import ToggleDetail from '../function/ToggleDetail.js';



const Eter = ({shuffledData, TOTAL_REF_DATA}) =>  {  
  const initial_value = shuffledData[0].title + shuffledData[0].caption;

  // shiftThumbPack[0]은 현재 thumb
  // shiftThumbPack[1]은 thumb 바꾸는 함수
  const shiftThumbPack = ShiftThumb(initial_value, TOTAL_REF_DATA);

  const scrollRef = useHorizontalScroll();
  const scrollRef2 = useHorizontalScroll();

  // ToggleDetail 사용
  // shiftThumbPack[0]은 현재 detail
  // shiftThumbPack[1]은 detail 바꾸는 함수
  const toggleDetailPack = ToggleDetail();

  // Exhi_RECK에서 data 받아오기
  const detailDeck = Exhi_RECK(1);

  const moveToOtherPage = () => {
    window.location.href = '/eternal_classics';
  }
  return (
    <section className="section">
      <div className="section_title">
      <h1>Hwang's Manual<span> of Eternal Classics</span></h1>
        <div className="section_btns">
          <button onClick={moveToOtherPage}><i className='fontAwesome fas fa-exchange-alt'/></button>
          <button onClick={toggleDetailPack[1]}><i className="fa-solid fa-info" /></button>
        </div>
      </div>
      <div className="section_reck" ref={scrollRef}>
        {shuffledData.map((each, index) => {
            return <img key={index} className="penet_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} onMouseEnter={shiftThumbPack[1]}  />
          })}
      </div>
      <div className="img_info">
        <span>{shiftThumbPack[0]}</span>
      </div>
      <div className="thumbnail" ref={scrollRef2}>
        {shuffledData.map((each, index) => {
            return <img key={index} className={shiftThumbPack[0] === each.title+each.caption ? "thumbnail_each":"thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftThumbPack[1]} />
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

export default Eter;

