import React from 'react';
import '../style/web/component/switchTakeSaveBtn.css';
import '../style/mobile/component/switchTakeSaveBtn_m.css';

//redux
import { connect } from 'react-redux';

const SwitchTakeSaveBtn = ({savedReck_rdx, showSpread, takeAndSave, screenshot, preventEmpty}) => {
  return(
    <>
    <div className="eter_btns">
      <button className="eter_btn fontAwesome fas fa-exchange-alt" onClick={showSpread}>
        {savedReck_rdx.length !== 0 ? 
          <div className="push">
            {savedReck_rdx.length}
          </div> 
          : <></>}
      </button>
      <button className="eter_btn fontAwesome fas fa-camera" onClick={takeAndSave} >
        {/* <a href={imgsrcToLoad} download /> */}
      </button>
      <button className="eter_btn">
          <a href={screenshot} onClick={preventEmpty} download className="fontAwesome far fa-save">
          </a>
      </button>
    </div>
    </>
  )
}

const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(SwitchTakeSaveBtn)