import React from 'react';

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
        <i className="fontAwesome fas fa-exchange-alt" />
      </button>
      <button className="eter_btn" onClick={takeScreenshot}>
        <i className="fontAwesome fas fa-camera" />
      </button> 
      <button className="eter_btn">
        <a className='btn_a' href={imgsrcToLoad} download onClick={preventEmpty}>
          <i className="fontAwesome far fa-save" />
        </a>
      </button>
    </div>
    </>
  )
}

export default SwitchTakeSaveBtn