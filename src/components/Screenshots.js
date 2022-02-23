import React from 'react';

const Screenshots = ({screenshotReck, toLoad, setImgToLoad, screenshot_ref}) => {

  return(
  <div className="eter_spreadH" ref={screenshot_ref}>
    {screenshotReck[1] ? <img className={toLoad === "screenshot_1"? "screenshot clickedForLoad":"screenshot"} src={screenshotReck[1]} alt="screenshot_1" onClick={setImgToLoad}/> : <></>}
    {screenshotReck[2] ? <img className={toLoad === "screenshot_2"? "screenshot clickedForLoad":"screenshot"} src={screenshotReck[2]} alt="screenshot_2" onClick={setImgToLoad}/> : <></>}
    {screenshotReck[3] ? <img className={toLoad === "screenshot_3"? "screenshot clickedForLoad":"screenshot"} src={screenshotReck[3]} alt="screenshot_3" onClick={setImgToLoad}/> : <></>}
  </div>
  )
}

export default Screenshots