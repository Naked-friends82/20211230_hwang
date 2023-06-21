import React from 'react';
import EachExhibi from '../components/EachExhibi.js';
import CV from '../components/CV';

// CSS
import '../styles/web/exhibi/exhibi.css';
import '../styles/mobile/exhibi/exhibi_m.css';

// 함수_리펙토링
import { useHorizontalScroll } from "../function/scroll";
import ToggleDetail from '../function/ToggleDetail.js';

const Exhibi = () =>  {
  // ToggleDetail 사용
  // shiftThumbPack[0]은 현재 detail
  // shiftThumbPack[1]은 detail 바꾸는 함수
  const toggleDetailPack = ToggleDetail();

  //const scrollRef = useHorizontalScroll();

  return (
    <section className="section">
      <div className="section_title">
        <h1>Exhibitions</h1>
        <button onClick={toggleDetailPack[1]}><i className="fa-solid fa-info" /></button>
      </div>
      <div className="exhibi_reck">
        <EachExhibi exhiIndex={0} />
        <EachExhibi exhiIndex={1} />
        <EachExhibi exhiIndex={2} />
        <EachExhibi exhiIndex={3} />
      </div>
      {
        toggleDetailPack[0] ? <CV showDetail={toggleDetailPack[1]} />
      :(
      <></>
      )}
    </section>
  );
}

export default Exhibi;

