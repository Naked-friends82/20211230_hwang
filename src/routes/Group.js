import React, { useState } from 'react';
import ExhiInfo from '../components/ExhiInfo';
import hungry from '../asset/group/poster_hungry.jpg';
import sing from '../asset/group/poster_sing.jpg';
import hang from '../asset/group/poster_hang.jpg';
import death from '../asset/group/poster_death.jpg';
import '../style/web/group.css'
import '../style/mobile/group_m.css'
//data
import Exhi_INFO from '../data/Exhi_INFO';



const Group = () =>  {
  const EXHI = Exhi_INFO(1);
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


  return (
    <section className="section_group">
      <div className="group_title">
        <h1>Group Exhibitions</h1>
      </div>
      <div className="group_reck">
          <div className="each_group">
            <img className="group_img" src={death} alt="나의 사인이 너와 같다면" onMouseEnter={shiftInfo} />
          </div>

          <div className="each_group">
            <img className="group_img" src={hang} alt="P는 그림을 걸었다" onMouseEnter={shiftInfo} />
          </div>

          <div className="each_group">
            <img className="group_img" src={sing} alt="노래하던 새들도 지금은 사라지고" onMouseEnter={shiftInfo} />
          </div>

          <div className="each_group">
            <img className="group_img_s" src={hungry} alt="어쨌든 아주 배가 고팠던 모양이구나" onMouseEnter={shiftInfo} />
          </div>
      </div>
      <ExhiInfo info={info} />
    </section>
  );
}

export default Group;

