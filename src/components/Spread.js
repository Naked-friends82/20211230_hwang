import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Media from 'react-media';

const Spread = ({savedReck}) => {

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
  console.log(match);
  return(
    <div className="grid_container2">
      {savedReck.map((section, index) => (
        // <Media query="(max-width: 768px)">
        <Draggable 
          className="drag_tag"
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
              </div>
        </Draggable>
        // </Media>
      ))}
      
        {/* <Draggable {...dragHandlers}>
          <div className="demo"> 1. yeeeeh! I can Move!!!! </div>
        </Draggable>
        <Draggable onStart={() => false}>
          <div className="demo"> 2. Do not Move. </div>
        </Draggable>
        <Draggable axis="x" {...dragHandlers}>
          <div className="demo"> 3. x 축</div>
        </Draggable>
        <Draggable axis="y" {...dragHandlers}>
          <div className="demo"> 4. y 축</div>
        </Draggable>
        <Draggable handle="strong" {...dragHandlers}>
          <div className="demo no-cursor">
            <strong className="cursor"><div>5. Drag here</div></strong>
            <div>You must click my handle to drag me</div>
          </div>
        </Draggable>
        <Draggable grid={[90,120]} {...dragHandlers}>
          <div className="demo">
            <img className="demoImg" src={demoImg} alt="Demooo"/>
          </div>
        </Draggable>
        <Draggable grid={[90,120]} {...dragHandlers}>
          <div className="demo2">
            <img className="demoImg2" src={demoImg} alt="Demooo"/>
          </div>
        </Draggable> */}
        {/* <Draggable handle="strong" grid={[90,120]} {...dragHandlers}>
          <div className="demo3">
            <strong><div className="demo3_handle"></div></strong>
            <img className="demoImg3" src={demoImg} alt="Demooo"/>
          </div>
        </Draggable> */}

      </div>
  )
}

export default Spread;