import React, { useRef, useEffect, useState } from 'react';
import Exhi_RECK from '../data/Exhi_RECK';
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

// CSS
import "../style/web/eternal2.css";
import "../style/mobile/eternal2_m.css";
import "../style/web/eachEter.css";
import "../style/mobile/eachEter_m.css";

// 함수_리펙토링
import ToggleDetail from '../function/ToggleDetail.js';



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
      alert("Sorry, You can only get 3 screenshot Images")
    }
  },[screenshot]);

  // 이미지 저장
  const [loadImg, setLoadImg] = useState(null);
  const [toLoad, setToLoad] = useState();

  const setClickedImgToLoad = (e) => {
    const {target:{src,alt}} = e;
    setLoadImg(src)
    setToLoad(alt)
  }
  const banEmpty = () => {
    console.log("hahahaha",screenshot)
    if (screenshot === null){
      alert("Take screenshot with camera button")
    } else if (loadImg === null){
      alert("Choose one of them")
    }
  }

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
            <button className="eter_btn" onClick={takeescreenshot}>
              <i className="fontAwesome fas fa-camera" />
            </button> 
            {/* <a className="eter_btn a_btn" href={eter_exhi_1} download>
              <i className="fontAwesome far fa-save" />
            </a> */}
            <button className="eter_btn">
              <a className='btn_a' href={loadImg} download onClick={banEmpty}>
                <i className="fontAwesome far fa-save" />
              </a>
            </button>
        </div>
      <div className="eter_spreadH" ref={screenshot_ref}>
        {screenshotReck[1] ? <img className={toLoad === "screenshot_1"? "screenshot clickedForLoad":"screenshot"} src={screenshotReck[1]} alt="screenshot_1" onClick={setClickedImgToLoad}/> : <></>}
        {screenshotReck[2] ? <img className={toLoad === "screenshot_2"? "screenshot clickedForLoad":"screenshot"} src={screenshotReck[2]} alt="screenshot_2" onClick={setClickedImgToLoad}/> : <></>}
        {screenshotReck[3] ? <img className={toLoad === "screenshot_3"? "screenshot clickedForLoad":"screenshot"} src={screenshotReck[3]} alt="screenshot_3" onClick={setClickedImgToLoad}/> : <></>}
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
        toggleDetailPack[0] ? <EachDetail detailDeck={detailDeck} showDetail={toggleDetailPack[1]} />
      :(
      <></>
      )}
    </section>
  );
}

export default Eternal2;

