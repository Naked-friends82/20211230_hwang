import React from 'react';
import { Link } from 'react-router-dom';
import ExhiInfo from '../components/ExhiInfo';
import omma_main from '../asset/main/omma_main.png';
import omma_sec from '../asset/main/omma_sec.png';
import penet_main from '../asset/main/penet_main.jpg';
import penet_sec from '../asset/main/penet_sec.jpg';
import eternal_main from '../asset/main/eternal_main.jpg';
import eternal_sec from '../asset/main/eternal_sec.jpg';
import group_death from '../asset/main/group_death.jpg';
import group_hang from '../asset/main/group_hang.jpg';
import exhibi_main from '../asset/main/exhibi_main.jpg';
import CV from '../components/CV';
// CSS
import '../style/web/route/works.css';
import '../style/mobile/route/works_m.css';
// function
import { useHorizontalScroll } from "../function/scroll";
import ShiftInfo from '../function/ShiftInfo';
import ToggleDetail from '../function/ToggleDetail.js';
//data
import Exhi_INFO from '../data/Exhi_INFO';

const Works = () =>  {
  const EXHI = Exhi_INFO(0);

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
            <img className="works_exhi_index1" src={omma_main} alt="MUH EMDAP INAM MO" />
            <img className="works_exhi_index2" src={omma_sec} alt="MUH EMDAP INAM MO" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/penetrating_stone' className="img_index">
            <img className="works_exhi_index1" src={penet_main} alt="Penetrating Stone" />
            <img className="works_exhi_index2" src={penet_sec} alt="Penetrating Stone" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/eternal_classics' className="img_index">
            <img className="works_exhi_index1" src={eternal_main} alt="Eternal classics" />
            <img className="works_exhi_index2" src={eternal_sec} alt="Eternal classics" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/group_exhibitions' className="img_index">
            <img className="works_exhi_index1" src={group_death} alt="Group Exhibitions" />
            <img className="works_exhi_index2" src={group_hang} alt="Group Exhibitions" onMouseEnter={shiftInfoPack[1]} />
        </Link>
        <Link to='/exhibition' className="img_index">
            <img className="works_exhi_index1" src={exhibi_main} alt="Exhibition Detail" onMouseEnter={shiftInfoPack[1]} />
        </Link>
      </div>
      <ExhiInfo info={shiftInfoPack[0]} />
      {
        toggleDetailPack[0] ? <CV showDetail={toggleDetailPack[1]} />
      :(
      <></>
      )}
    </section>
  );
}

export default Works;

