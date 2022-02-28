import React from 'react';
import '../style/web/component/switchTakeSaveBtn.css';
import '../style/mobile/component/switchTakeSaveBtn_m.css';

const SwitchTakeSaveBtn = ({savedReck, showSpread, takeScreenshot, imgsrcToLoad, preventEmpty}) => {

  return(
    <>
    <div className="eter_btns">
      <button className="eter_btn" onClick={showSpread}>
        {savedReck.length !== 0 ? 
          <button className="push">
            {savedReck.length}
          </button> 
          : <></>}
        <span>
          <i className="fontAwesome fas fa-exchange-alt" />
        </span>
      </button>
      <button className="eter_btn" onClick={takeScreenshot}>
        <span>
          <i className="fontAwesome fas fa-camera" />
        </span>
      </button> 
      <button className="eter_btn">
        <span>
          <a href={imgsrcToLoad} download onClick={preventEmpty}>
            <i className="fontAwesome far fa-save" />
          </a>
        </span>
      </button>
    </div>
    </>
  )
}

export default SwitchTakeSaveBtn