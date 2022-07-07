import React from 'react';
import { Link } from 'react-router-dom';
import Works_info from '../components/works/Works_info';
import omma_main from '../asset/main/omma_main.png';
import penet_main from '../asset/main/penet_main.jpg';
import eternal_main from '../asset/main/eternal_main.jpg';
import exhibi_main from '../asset/main/exhibi_main.jpg';
import CV from '../components/CV';
// CSS
import '../styles/web/univ.css';
import '../styles/web/works/works.css';
import '../styles/web/eachExhiDetail.css';
import '../styles/web/cv.css';

import '../styles/mobile/univ_m.css';
import '../styles/mobile/works/works_m.css';
import '../styles/mobile/eachExhiDetail_m.css';
import '../styles/mobile/cv_m.css';
// function
import { useHorizontalScroll } from "../function/scroll.js";
import ShiftInfo from '../function/ShiftInfo.js';
import ToggleDetail from '../function/ToggleDetail.js';
//data
import Exhi_INFO from '../data/Exhi_INFO';

const Works = () =>  {
  const EXHI = Exhi_INFO(0);
  const thumbImgs  = Exhi_INFO(1);

  // shiftInfoPack[0]은 현재 info
  // shiftInfoPack[1]은 info 바꾸는 함수
  const shiftInfoPack = ShiftInfo(EXHI);

  const scrollRef = useHorizontalScroll();

    // ToggleDetail 사용
  // shiftThumbPack[0]은 현재 detail
  // shiftThumbPack[1]은 detail 바꾸는 함수
  const toggleDetailPack = ToggleDetail();

  return (
    <section className="section">
      <div className="section_title">
        <h1>HWANG KYU MIN</h1>
        <button onClick={toggleDetailPack[1]}><i className="fa-solid fa-info" /></button>
      </div>
      <div className="section_reck" ref={scrollRef}>
        <Link to='/muhmdapinammo' className="img_index">
            <img className="works_exhi_index1" src={omma_main} alt="MUH EMDAP INAM MO" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/penetrating_stone' className="img_index">
            <img className="works_exhi_index1" src={penet_main} alt="Penetrating Stone" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/eternal_classics' className="img_index">
            <img className="works_exhi_index1" src={eternal_main} alt="황씨화보 (Eternal classics)" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/group_exhibitions' className="img_index">
            <img className="works_exhi_index1" src={thumbImgs[0].imgSrc} alt="Group Exhibitions" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/exhibition' className="img_index">
            <img className="works_exhi_index1" src={exhibi_main} alt="Exhibition Detail" onMouseEnter={shiftInfoPack[1]} />
        </Link>
      </div>
      <Works_info info={shiftInfoPack[0]} />
      {
        toggleDetailPack[0] ? <CV showDetail={toggleDetailPack[1]} />
      :(
      <></>
      )}
    </section>
  );
}

export default Works;

