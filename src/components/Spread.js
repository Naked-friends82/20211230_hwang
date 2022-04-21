import React, { useState } from 'react';
import Draggable from 'react-draggable';
// import Media from 'react-media';
//redux
import { connect } from 'react-redux';
import { actionCreators } from '../store.js';

const Spread = ({savedReck_rdx,deleteToSavedReck}) => {
  const deleteFromReck = (e) => {
    const {target:{id}} = e;
    deleteToSavedReck(id)
  }

  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition:{
      x:0, y:0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  });

  const onStart = () => {
    setState({ activeDrags: ++state.activeDrags });
  };
  const onStop = () => {
    setState({ activeDrags: --state.activeDrags });
  };
  const dragHandlers = {onStart: onStart, onStop: onStop};


  // 반응형 그리드를 위함
  // 즉각적으로 바뀌는 걸로 수정해야 해.
  const grid_web = [80,120]
  const grid_mobile = [70,105]
  const match = window.matchMedia('(max-width: 768px)').matches
  return(
    <div className="grid_container2">
      {savedReck_rdx.map((section, index) => (
        <Draggable 
          // className="drag_tag"
          key={index}
          handle="strong"
          grid={match? grid_mobile:grid_web}
          {...dragHandlers}>
              <div className="drag_box" >
                <strong><div className="drag_handle"></div></strong>
                <img 
                  className="dragImg"
                  src={section.src}
                  alt="saved Img" />
                  <button id={section.imgId} onClick={deleteFromReck} >x</button>
              </div>
        </Draggable>
        // </Media>
      ))}
      </div>
  )
}

const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    deleteToSavedReck: (imgId) => dispatch(actionCreators.deleteImg(imgId)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Spread);