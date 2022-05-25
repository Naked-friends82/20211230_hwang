import React from 'react';
//redux
import { connect } from 'react-redux';

const ClickedReck = ({savedReck_rdx ,clicked_ref, saveOrRemove, onSpread}) => {
  const dragStart = (e) => {
    const imgId = e.target.id.split('/')[0];
    if (onSpread.includes(imgId)){
      alert('사용 중인 이미지입니다.')
    } else {
      e.dataTransfer.setData("Text", [imgId, e.target.src]);
    }
  };
  const dragEnd = (e) => {
  }

  return(
    <div className="clicked_reck" ref={clicked_ref}>
      {savedReck_rdx.map((section) => 
          <img 
            key = {section.id}
            id={`${section.imgId}/clicked`}
            className={onSpread.includes(section.imgId) ? "clicked_img filter" : "clicked_img"}
            onClick={saveOrRemove}
            draggable="true"
            onDragStart={dragStart}
            onDragEnd={dragEnd}
            src={section.src}
            alt='clicked_img' />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(ClickedReck)