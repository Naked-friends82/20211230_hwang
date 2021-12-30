import React, { useState } from 'react';
import Draggable from 'react-draggable';

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

  return(
    <div className="grid_container2">
      {savedReck.map((section, index) => (
        <Draggable key={index} handle="strong" grid={[80,120]} {...dragHandlers}>
              <div className="drag_box" >
                <strong><div className="drag_handle"></div></strong>
                <img 
                  className="dragImg"
                  src={section.src}
                  alt="saved Img" />
              </div>
        </Draggable>
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