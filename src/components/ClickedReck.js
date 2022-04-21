import React from 'react';
//redux
import { connect } from 'react-redux';

const ClickedReck = ({savedReck_rdx ,clicked_ref}) => {
  const removeAlert = () => {
    alert("If you want remove this img, Click in upper side")
  }

  return(
    <div className="clicked_reck" ref={clicked_ref}>
      {savedReck_rdx.map((section) => 
          <img 
            key = {section.id}
            className="clicked_img"
            onClick={removeAlert}
            src={section.src}
            alt='cliced_img' />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(ClickedReck)