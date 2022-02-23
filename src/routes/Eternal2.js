import React, { useRef, useEffect, useState } from 'react';
import Exhi_RECK from '../data/Exhi_RECK';
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

// CSS
import "../style/web/eternal2.css";
import "../style/mobile/eternal2_m.css";
import "../style/web/eachEter.css";
import "../style/mobile/eachEter_m.css";

// 함수_리펙토링
import ToggleDetail from '../function/ToggleDetail.js';
import TakeScreenshot from '../function/TakeScreenshot';
import SaveScreenshot from '../function/SaveScreenshot';



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

const ref = useRef(null);
const ref2 = useRef(null);
const clicked_ref = useRef(null);
const screenshot_ref = useRef(null);

  //스크린 샷 찍기
  // TakeScreenshot 사용
  // takeScreenshotPack[0]은 현재 찍은 screenshot
  // takeScreenshotPack[1]은 현재 들어있는 screenshot들
  // takeScreenshotPack[2]은 screenshot 찍는 함수
  const takeScreenshotPack = TakeScreenshot(ref);

  // 이미지 저장
  // SaveScreenshot 사용
  // saveScreenshotPack[0]은 현재 찍은 screenshot
  // saveScreenshotPack[1]은 다운받을 이미지 선택
  // saveScreenshotPack[2]은 비어있는거 방지 함수
  // saveScreenshotPack[3]은 다운받을 이미지 src
  const saveScreenshotPack = SaveScreenshot(takeScreenshotPack[0]);

  // ToggleDetail 사용
  // shiftThumbPack[0]은 현재 detail
  // shiftThumbPack[1]은 detail 바꾸는 함수
  const toggleDetailPack = ToggleDetail();

  // Exhi_RECK에서 data 받아오기
  const detailDeck = Exhi_RECK(2)


  return (
    <section className="section_eter">
      <div className="eter_title">
        <h1><span>Hwang's Manual of</span> Eternal Classics</h1>
        <button onClick={toggleDetailPack[1]}>i</button>
      </div>
      <div className="eter_spreadH" ref={ref}>
        <Spread savedReck={savedReck} setSavedReck={setSavedReck} / >
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
            <button className="eter_btn" onClick={takeScreenshotPack[2]}>
              <i className="fontAwesome fas fa-camera" />
            </button> 
            <button className="eter_btn">
              <a className='btn_a' href={saveScreenshotPack[3]} download onClick={saveScreenshotPack[2]}>
                <i className="fontAwesome far fa-save" />
              </a>
            </button>
        </div>
      <div className="eter_spreadH" ref={screenshot_ref}>
        {takeScreenshotPack[1][1] ? <img className={saveScreenshotPack[0] === "screenshot_1"? "screenshot clickedForLoad":"screenshot"} src={takeScreenshotPack[1][1]} alt="screenshot_1" onClick={saveScreenshotPack[1]}/> : <></>}
        {takeScreenshotPack[1][2] ? <img className={saveScreenshotPack[0] === "screenshot_2"? "screenshot clickedForLoad":"screenshot"} src={takeScreenshotPack[1][2]} alt="screenshot_2" onClick={saveScreenshotPack[1]}/> : <></>}
        {takeScreenshotPack[1][3] ? <img className={saveScreenshotPack[0] === "screenshot_3"? "screenshot clickedForLoad":"screenshot"} src={takeScreenshotPack[1][3]} alt="screenshot_3" onClick={saveScreenshotPack[1]}/> : <></>}
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
      {toggleDetailPack[0] ? <EachDetail detailDeck={detailDeck} showDetail={toggleDetailPack[1]} /> : (<></>)}
    </section>
  );
}

export default Eternal2;

