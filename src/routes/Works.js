import React, { useState } from 'react';
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
import '../style/web/works.css';
import '../style/mobile/works_m.css';
// function
import { useHorizontalScroll } from "../function/scroll";
//data
import Exhi_INFO from '../data/Exhi_INFO';

const Works = () =>  {
  const EXHI = Exhi_INFO(0);
  const [info, setInfo] = useState('');

  const shiftInfo = async(e) => {
    const {target: {alt}} = e;
    if (alt === EXHI[0].title){
      setInfo(EXHI[0])
    } else if(alt === EXHI[1].title){
      setInfo(EXHI[1])
    } else if(alt === EXHI[2].title){
      setInfo(EXHI[2])
    } else if(alt === EXHI[3].title){
      setInfo(EXHI[3])
    } else if(alt === EXHI[4].title){
      setInfo(EXHI[4])
    }
  };

  const scrollRef = useHorizontalScroll();

  return (
    <section className="section_works">
      <div className="works_title">
        <h1>HWANG KYU MIN</h1>
        <button>i</button>
      </div>
      <div className="works_exhi" ref={scrollRef}>
        <Link to='/muhmdapinammo'>
          <div className="img_index">
            <img className="works_exhi_index1" src={omma_main} alt="MUH EMDAP INAM MO" onMouseEnter={shiftInfo} />
            <img className="works_exhi_index2" src={omma_sec} alt="MUH EMDAP INAM MO" onMouseEnter={shiftInfo} />
          </div>
        </Link>
        <Link to='/penetrating_stone'>
          <div className="img_index">
            <img className="works_exhi_index1" src={penet_main} alt="Penetrating Stone" onMouseEnter={shiftInfo} />
            <img className="works_exhi_index2" src={penet_sec} alt="Penetrating Stone" onMouseEnter={shiftInfo} />
          </div>
        </Link>
        <Link to='/eternal_classics'>
          <div className="img_index">
            <img className="works_exhi_index1" src={eternal_main} alt="Eternal classics" onMouseEnter={shiftInfo} />
            <img className="works_exhi_index2" src={eternal_sec} alt="Eternal classics" onMouseEnter={shiftInfo} />
          </div>
        </Link>
        <Link to='/group_exhibitions' className='link_index'>
          <div className="img_index">
            <img className="works_exhi_index1" src={group_death} alt="Group Exhibitions" onMouseEnter={shiftInfo} />
            <img className="works_exhi_index2" src={group_hang} alt="Group Exhibitions" onMouseEnter={shiftInfo} />
          </div>
        </Link>
        <Link to='/exhibition'>
          <div className="img_index">
            <img className="works_exhi_index1" src={exhibi_main} alt="Exhibition Detail" onMouseEnter={shiftInfo} />
          </div>
        </Link>
      </div>
      <ExhiInfo info={info} />
    </section>
  );
}

export default Works;

