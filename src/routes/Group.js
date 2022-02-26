import React from 'react';
import ExhiInfo from '../components/ExhiInfo';
import hungry from '../asset/group/poster_hungry.jpg';
import sing from '../asset/group/poster_sing.jpg';
import hang from '../asset/group/poster_hang.jpg';
import death from '../asset/group/poster_death.jpg';
// CSS
import '../style/web/route/group.css'
import '../style/mobile/route/group_m.css'
//function
import ShiftInfo from '../function/ShiftInfo';
//data
import Exhi_INFO from '../data/Exhi_INFO';



const Group = () =>  {
  const EXHI = Exhi_INFO(1);
  
  // shiftInfoPack[0]은 현재 info
  // shiftInfoPack[1]은 info 바꾸는 함수
  const shiftInfoPack = ShiftInfo(EXHI);


  return (
    <section className="section">
      <div className="section_title">
        <h1>Group Exhibitions</h1>
      </div>
      <div className="section_reck">
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
      <ExhiInfo info={shiftInfoPack[0]} />
    </section>
  );
}

export default Group;

