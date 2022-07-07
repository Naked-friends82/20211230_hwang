import React from 'react';
import Works_info from '../components/works/Works_info';
import hungry from '../asset/group/poster_hungry.jpg';
import sing from '../asset/group/poster_sing.jpg';
import hang from '../asset/group/poster_hang.jpg';
import death from '../asset/group/poster_death.jpg';
import carve from '../asset/group/poster_carve.jpg';
import shinjin from '../asset/group/poster_shinjin.jpg';
// CSS
import '../styles/web/group/group.css'
import '../styles/mobile/group/group_m.css'
//function
import { useHorizontalScroll } from "../function/scroll.js";
import ShiftInfo from '../function/ShiftInfo';
//data
import Exhi_INFO from '../data/Exhi_INFO';



const Group = () =>  {
  const EXHI = Exhi_INFO(1);

  const scrollRef = useHorizontalScroll();
  
  // shiftInfoPack[0]은 현재 info
  // shiftInfoPack[1]은 info 바꾸는 함수
  const shiftInfoPack = ShiftInfo(EXHI);


  return (
    <section className="section">
      <div className="section_title">
        <h1>Group Exhibitions</h1>
      </div>
      <div className="section_reck" ref={scrollRef}>
          <div className="each_group">
            <img className="group_img" src={shinjin} alt="믿음(しんじん, Belief)" onMouseEnter={shiftInfoPack[1]} />
          </div>
          <div className="each_group">
            <img className="group_img" src={carve} alt="배 위에 새겨 두고" onMouseEnter={shiftInfoPack[1]} />
          </div>
          <div className="each_group">
            <img className="group_img" src={death} alt="나의 사인이 너와 같다면" onMouseEnter={shiftInfoPack[1]} />
          </div>

          <div className="each_group">
            <img className="group_img" src={hang} alt="P는 그림을 걸었다" onMouseEnter={shiftInfoPack[1]} />
          </div>

          <div className="each_group">
            <img className="group_img" src={sing} alt="노래하던 새들도 지금은 사라지고" onMouseEnter={shiftInfoPack[1]} />
          </div>

          <div className="each_group">
            <img className="group_img_s" src={hungry} alt="어쨌든 아주 배가 고팠던 모양이구나" onMouseEnter={shiftInfoPack[1]} />
          </div>
      </div>
      <Works_info info={shiftInfoPack[0]} />
    </section>
  );
}

export default Group;

