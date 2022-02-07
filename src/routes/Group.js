import React, { useState } from 'react';
import hungry from '../asset/group/poster_hungry.jpg';
import sing from '../asset/group/poster_sing.jpg';
import hang from '../asset/group/poster_hang.jpg';
import death from '../asset/group/poster_death.jpg';
import '../style/web/group.css'

const GROUP = [
  {
    title: "나의 사인이 너와 같다면",
    date: "2021.05.10-2021.05.20",
    place: "로지은, 오윤, 황규민",
    donat: "서한국예술종합학교 미술원 2F 복도 갤러리"
  },
  {
    title: "P는 그림을 걸었다",
    date: "2021.10.05-2021.11.06",
    place: "황규민 외 20명",
    donat: "디피 d/p, 서울 종로구 삼일대로 428, 낙원악기상가 417호",
  },
  {
    title: "노래하던 새들도 지금은 사라지고",
    date: "2020.08.12-2020.08.31",
    place: "박지은, 진지현, 차현욱, 황규민",
    donat: "산수문화, 서울시 관악구 조원로 154"
  },
  {
    title: "어쨌든 아주 배가 고팠던 모양이구나",
    date: "2020.01.22-2020.01.30",
    place: "이은정, 황규민",
    donat: "SPACE 55, 서울시 은평구 증산로 19길 9-1"
  },
]


const Group = () =>  {

  const [info, setInfo] = useState('');

  const shiftInfo = async(e) => {
    const {target: {alt}} = e;
    if (alt === GROUP[0].title){
      setInfo(GROUP[0])
    } else if(alt === GROUP[1].title){
      setInfo(GROUP[1])
    } else if(alt === GROUP[2].title){
      setInfo(GROUP[2])
    } else if(alt === GROUP[3].title){
      setInfo(GROUP[3])
    } else if(alt === GROUP[4].title){
      setInfo(GROUP[4])
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
      <div className="group_info">
        <div className="title">
          <div className="title_title">{info.title}</div>
          <span className="title_detail">{info.date}</span> <br />
          <span className="title_detail">{info.place}</span> <br />
          <span className="title_detail">{info.donat}</span> <br />
        </div>
        <div className="contact">
          skedmask@naver.com <br />
          <a href="https://www.instagram.com/kyuminq/"> @kyuminq <br /></a>
          © 2021. kyumin Hwang. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}

export default Group;

