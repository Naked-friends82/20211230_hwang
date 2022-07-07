import React, { useState } from 'react';
import EmptyGrid from './EmptyGrid.js';

//redux
import { connect } from 'react-redux';


const Spread = ({onSpread, setOnSpread,screenshotRef, dataTrans, setDataTrans, isMobile}) => {
  const [dragInGrid, setDragInGrid] = useState(null)
  const rowLength = []
  for(let i=0; i<12; i++){
    rowLength.push(i)
  }
  return(
    <div className='grid_container' ref={screenshotRef}>
      <div className='grid_container_row' >
        {rowLength.map((each) => {
          return <EmptyGrid key={each} onSpread={onSpread} setOnSpread={setOnSpread} dataTrans={dataTrans} setDataTrans={setDataTrans} dragInGrid={dragInGrid} setDragInGrid={setDragInGrid} isMobile={isMobile} />
        })}
      </div>
      <div className='grid_container_row'>
        {rowLength.map((each) => {
          return <EmptyGrid key={each} onSpread={onSpread} setOnSpread={setOnSpread} dataTrans={dataTrans} setDataTrans={setDataTrans} dragInGrid={dragInGrid} setDragInGrid={setDragInGrid} isMobile={isMobile} />
        })}
      </div>
      <div className='grid_container_row'>
        {rowLength.map((each) => {
          return <EmptyGrid key={each} onSpread={onSpread} setOnSpread={setOnSpread} dataTrans={dataTrans} setDataTrans={setDataTrans} dragInGrid={dragInGrid} setDragInGrid={setDragInGrid} isMobile={isMobile} />
        })}
      </div>
      <div className='grid_container_row'>
        {rowLength.map((each) => {
          return <EmptyGrid key={each} onSpread={onSpread} setOnSpread={setOnSpread} dataTrans={dataTrans} setDataTrans={setDataTrans} dragInGrid={dragInGrid} setDragInGrid={setDragInGrid} isMobile={isMobile} />
        })}
      </div>
      <div className='grid_container_row'>
        {rowLength.map((each) => {
          return <EmptyGrid key={each} onSpread={onSpread} setOnSpread={setOnSpread} dataTrans={dataTrans} setDataTrans={setDataTrans} dragInGrid={dragInGrid} setDragInGrid={setDragInGrid} isMobile={isMobile} />
        })}
      </div>
      <div className='grid_container_row'>
        {rowLength.map((each) => {
          return <EmptyGrid key={each} onSpread={onSpread} setOnSpread={setOnSpread} dataTrans={dataTrans} setDataTrans={setDataTrans} dragInGrid={dragInGrid} setDragInGrid={setDragInGrid} isMobile={isMobile} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(Spread);


// 내일 참고
// https://github.com/react-grid-layout/react-grid-layout/blob/master/test/examples/6-dynamic-add-remove.jsx
// https://taesung1993.tistory.com/93
