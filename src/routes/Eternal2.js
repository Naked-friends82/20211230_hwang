import React, { useRef, useEffect, useState } from 'react';
import { useScreenshot } from 'use-react-screenshot'
import EachDetail from '../components/EachDetail';
import EterZero from '../components/eters/EterZero';
import EterOne from '../components/eters/EterOne';
import EterTwo from '../components/eters/EterTwo';
import EterThree from '../components/eters/EterThree';
import EterFour from '../components/eters/EterFour';
import EterFive from '../components/eters/EterFive';
import EterSix from '../components/eters/EterSix';
import EterSeven from '../components/eters/EterSeven';
import EterEight from '../components/eters/EterEight';
import EterNine from '../components/eters/EterNine';
import EterTen from '../components/eters/EterTen';
import Spread from '../components/Spread';

import eter_exhi_1 from '../asset/exhi/eter_exhi_1.jpg';
import eter_exhi_2 from '../asset/exhi/eter_exhi_2.jpg';
import eter_exhi_3 from '../asset/exhi/eter_exhi_3.jpg';
import "../style/web/eternal2.css";
import "../style/mobile/eternal2_m.css";
import "../style/web/eachEter.css";
import "../style/mobile/eachEter_m.css";

// 방법1 리렌더링 안되게 className으로 보였다 안보였다 하기
// 방법2 그냥 화면 나누기 => 안이쁘다.

const Eternal2 = () =>  {
  const [savedReck, setSavedReck] = useState([]);

  // 이거 수정해야 함. 리 렌더링 시 안바뀜
  const saveReck = (e) => {
    const clickedImg = e.target;
    if (clickedImg.alt === "img"){
      clickedImg.className = "dragablImg filter";
      clickedImg.alt = "false";
      const newReck = [...savedReck, clickedImg];
      setSavedReck(newReck);
    };
  };
  useEffect(() => {
    console.log("savedReck 감지",savedReck);
    console.log("savedReck 갯수", savedReck.length);
  }, [savedReck])

const showSpread = () => {
  if (ref.current.className === "eter_spreadH"){
    ref.current.className = "eter_reck"
    ref2.current.className = "eter_spreadH"
    screenshot_ref.current.className = "screenshot_reck"
    clicked_ref.current.className = "eter_spreadH"
  } else{
    ref.current.className = "eter_spreadH"
    ref2.current.className = "eter_reck"
    screenshot_ref.current.className = "eter_spreadH"
    clicked_ref.current.className = "clicked_reck"
  };
}

  //스크린 샷
  const [screenshot, takeScreenShot] = useScreenshot();
  const [screenshotReck, setScreenshotReck] = useState([]);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const clicked_ref = useRef(null);
  const screenshot_ref = useRef(null);


  const takeescreenshot = () => {
    if (ref.current.className === "eter_spreadH"){
      alert("Change Mode");
    }else{
      takeScreenShot(ref.current);
    }
  };

  useEffect(()=>{
    if(screenshotReck.length < 4){
      const newScreenshotReck = [...screenshotReck, screenshot];
      setScreenshotReck(newScreenshotReck);
    } else{
      alert("That's enough. fuck")
    }
  },[screenshot]);

  // 이미지 저장
  const saveScreenshotImg = (e) => {
    const link = document.createElement('a');

  }

  const [eterDetail,setEterDetail] = useState(false)
  const showEterDetail = (e) => {
    setEterDetail(!eterDetail)
    console.log(eterDetail);
  }
  const eter_detailDeck = 
    {
      detailExhi:[
        eter_exhi_1,
        eter_exhi_2,
        eter_exhi_3,
      ],
      title: "황씨화보(黃氏畵譜)",
      author: "황규민",
      paper:
      <p>
        나는 동양화단을 비유한 시스템을 짜 그 안에 내 그림을 입력해 작동시키는 작업을 한다. 동아시아의 서화에서 현대 한국의 동양화로 이어지는 흐름의 중심에 ‘전이모사(轉移模寫)’의 법을 위치시켜, 원본 그림을 배우기 위한 ‘화보’를 제작한 후 화보를 ‘그림화(化)’하고, 이를 점(點), 획(劃), 탁(擢) 등 ‘단위’로 이용해 새로운 그림을 만들어내는 시스템이 작업의 틀이다. 사혁에 의해 육법이 제시되었을 때 전이모 사는 마지막 육법으로, 비교적 덜 중요한 것으로 소개된다. 그러나 필묵법이나 대상을 대하는 태도, 화 보와 열전과 같은 서화형식을 보면 그 중심에 끝없이 반복되는 과거 참조의 역사가 흐른다. 이 법을 중 심으로 만든 시스템은 동양화를 숭배하거나 부정하기보다는 전시장에 유사 생태계를 만들어 관찰하는 방법으로 동양화를 재정의하려는 목적을 가진다. <br /><br />

        작품의 디자인은 청조 중국에서 발행한 개자원화보(芥子園畵譜)를 비롯한 여러 화보를 참고했다. 화 보는 산수, 인물, 사군자 등 목차가 잘 구분되어 있고 그 안에서 또 가지, 잎, 준법과 이들의 구성법과 같은 세부가 잘 정리되어 있어 교재로 쓰기에 적합하다. 여기에 입각해 모, 임, 방 순으로 그림을 익히 는데, 쉽게 말하면 원작을 대고 그리고(모), 보고 그리고(임), 원작 풍으로 그린다(방, 재해석의 영역을 포함). 과거에는 소수만이 고화를 얻고 이 과정을 거쳐 새로운 서화를 만들어나갔지만, 화보의 등장은 많은 사람이 임·방을 할 수 있는 길을 열었다. 다만 20세기를 넘어오며 누구나 고화의 고화질 디지털 이미지를 얻고, 고품질로 인쇄할 수 있게 되었는데도 많은 이들이 보급형 교재였던 화보를 답습한다는 점이 이상하다. 이 모습이 내게는 교재의 내용인 원작을 모사하는 것이 아닌 마치 교재 그 자체를 재현 하는 것으로 보였는데, 두 번의 개인전을 거치면서 이 시선을 반영한 화보의 형식을 적극적으로 차용하 기로 마음먹었다. <br /><br />

        동양화 담론은 이 땅에 그 이름이 출현한 이래 스스로 긍정하고 부정하길 반복하고 있다. 여기에는 민족주의, 동양화의 현대화, 동양화 해체 혹은 탈출, 때를 기다리는 잠룡 등 여러 입장이 있다. 민족주 의적 입장은 현실의 문제를 현재에서 찾지 못한다는 비판을 받기도 하고, 동양화의 현대화는 동양화 담 론 외부의 미술가들이 전통을 성공적으로 참조해내고 있다는 점에서 그 효력을 잃는다. 동양화의 해체 와 탈출은 여러 번 시도되었으나, 동양화단을 견인하지 못하고 그 주역들은 각자의 길을 갔고, 때를 기 다리기를 결심한 이들에게 모험을 제안하는 것은 오지랖이다. 나의 입장 역시 위에 소개한 것의 조합으 로 설명할 수 있을 것이다. 그러나 이 입장들과 무관하게 동양화 담론은 미술계의 주변부로 서서히 밀 려났고, 꽤 오래전부터 동양화 위기론이 있었다. <br /><br />

        미술 작품에서 매체의 범위는 확장되어왔고 평면 회화와 조각 역시 전통 매체로 취급되어 여러 번 위 기론에 휩싸였다. 회화와 조각을 거듭 새로 정의하여 이를 유의미한 형식으로 갱신한 이들에게 위대한 예술가의 지위가 주어진 것을 봤을 때, 이들의 메타 그림·조각으로부터 동양화 담론을 활성화하는 실마 리를 얻을 수 있을 것이다. 다만 걱정인 것은 회화와 조각이 전통 매체라면 동양화는 ‘전통의 전통 매 체’라는 지점인데, 그 걱정을 해결하는 것까지가 《화보》의 문제의식이자 목표이다. <br /><br />

        대외적으로 스스로 동양화가라 소개하는 일은 어쩐지 머뭇거리게 되지만, 교육제도 안에서 동양화가 로 길러진 부분이 있음을 인정한다. 배워온 것에 대한 애정과 초심이 눈앞을 흐릴 수 있고, 이 시도의 끝에 유의미한 새로운 담론이나 형식을 얻어내지 못하거나 자가당착에 빠져 더 강하게 동양화를 부정할 수 있음을 인지하고 있다. 그러나 동양화에 대한 반성은 서화적 형식을 통해 이루어져야 하고, 혹여 동 양화 개념을 폐기해야 하더라도 자연스럽게 축소되어 소멸하기보다는 더 적극적으로 당사자들이 정리해 야 한다고 생각한다. 교육제도와 미술제도 안에 동양화라는 개념이 분명히 존재하고 지금도 이 안에 새 로 유입되는 후배 미술인들이 있으니, 더 풍부한 담론의 장을 만들어 놓는 것이 현직에 있는 이들의 도리일 것이다.
      </p>
    };


  return (
    <section className="section_eter">
      <div className="eter_title">
        <h1><span>Hwang's Manual of</span> Eternal Classics</h1>
        <button onClick={showEterDetail}>i</button>
      </div>
      <div className="eter_spreadH" ref={ref}>
        <Spread savedReck={savedReck}/ >
      </div>
      <div className="eter_reck" ref={ref2}>
        <EterZero saveReck={saveReck}/>
        <EterFour saveReck={saveReck}/>
        <EterOne saveReck={saveReck}/>
        <EterTwo saveReck={saveReck}/>
        <EterThree saveReck={saveReck}/>
        <EterFive saveReck={saveReck}/>
        <EterSix saveReck={saveReck}/>
        <EterSeven saveReck={saveReck}/>
        <EterEight saveReck={saveReck}/>
        <EterNine saveReck={saveReck}/>
        <EterTen saveReck={saveReck}/>
      </div>
        <div className="eter_btns">
            <button className="eter_btn" onClick={showSpread}>
              {savedReck.length !== 0 ? 
                <button className="push">
                  {savedReck.length}
                </button> 
                : <></>}
              <i className="fontAwesome fas fa-exchange-alt" />
            </button>
            <button className="eter_btn" onClick={takeescreenshot}>
              <i className="fontAwesome fas fa-camera" />
            </button> 
            <button className="eter_btn" onClick={saveScreenshotImg}>
              <i className="fontAwesome far fa-save" />
            </button>
        </div>
      <div className="eter_spreadH" ref={screenshot_ref}>
        {screenshotReck[1] ? <img className="screenshot" src={screenshotReck[1]} alt="hello" /> : <></>}
        {screenshotReck[2] ? <img className="screenshot" src={screenshotReck[2]} alt="hello" /> : <></>}
        {screenshotReck[3] ? <img className="screenshot" src={screenshotReck[3]} alt="hello" /> : <></>}
      </div>
      <div className="clicked_reck" ref={clicked_ref}>
      {savedReck.map((section,index) => 
          <img 
            key = {index}
            className="clicked_img"
            src={section.src}
            alt="saved Img" />
      )}
      </div>
      {
      eterDetail ? <EachDetail detailDeck={eter_detailDeck} showDetail={showEterDetail} />
      :(
      <></>
      )}
    </section>
  );
}

export default Eternal2;

