import React from 'react';
//redux
import { connect } from 'react-redux';
// 함수_리펙토링
import { useHorizontalScroll } from "../function/scroll.js";

const ClickedReck = ({savedReck_rdx, saveOrRemove, onSpread,isMobile, setDataTrans}) => {
  const dragStart = (e) => {
    const imgId = e.target.id.split('/')[0];
    if (onSpread.includes(imgId)){
      alert('사용 중인 이미지입니다.')
    } else {
      setDataTrans([imgId, e.target.src])
    }
  };
  const dragEnd = (e) => {
  }
  const nothing = (e) => {
  }

  const scrollRef = useHorizontalScroll();

  return(
    <div className="clicked_reck" ref={scrollRef}>
      {savedReck_rdx.map((section) => 
          <img 
            key = {section.id}
            id={`${section.imgId}/clicked`}
            className={onSpread.includes(section.imgId) ? "clicked_img filter" : "clicked_img"}
            onClick={saveOrRemove}
            draggable="true"
            onDragStart={isMobile? nothing: dragStart}
            onDragEnd={isMobile? nothing: dragEnd}
            onTouchStart={isMobile? dragStart: nothing}
            onTouchEnd={isMobile? dragEnd: nothing}
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