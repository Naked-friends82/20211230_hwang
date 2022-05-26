import React, { useEffect, useState } from 'react';
import ClassImgBtn from './ClassImgBtn.js';

import '../style/web/component/spread.css';
import '../style/mobile/component/spread_m.css';

//redux
import { connect } from 'react-redux';


const Spread = ({ref, onSpread, setOnSpread,screenshotRef}) => {
  const [removed, setRemoved] = useState([]);
  useEffect(() => {
    if (removed.length !== 0){
      setOnSpread(onSpread.filter((item) => item !== removed))
      setRemoved([])
    }
  },[removed])


  const filterDrop = (e) => {
    const {target:{className}} = e;
    if (className === 'grid_box'){
      drop(e)
    }
  }

  const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("Text");
    const getData = data.split(',');
    const imgId = getData[0]
    const imgSrc = getData[1]
    if (onSpread.includes(imgId)){
      const imgreck = document.getElementById(`${imgId}/copied`);
      e.target.appendChild(imgreck);
    }else{
      setOnSpread([...onSpread, imgId])
      new ClassImgBtn({
        target: e.target,
        initialState:{
          imgId,
          src: imgSrc, 
          rotate: 0
        },
        setRemoved
      })
    }
    e.target.className = 'grid_box full'
  }
  
  const allowDrop = (e) => {
    e.preventDefault();
  }

  return(
    <div className='grid_container' ref={screenshotRef}>
      <div className='grid_container_row'>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_0'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_1'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_2'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_3'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_4'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_5'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_6'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='0_7'></div>
      </div>
      <div className='grid_container_row'>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_0'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_0'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_1'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_2'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_3'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_4'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_5'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_6'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='1_7'></div>
      </div>
      <div className='grid_container_row'>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_0'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_1'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_2'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_2'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_3'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_4'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_5'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_6'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='2_7'></div>
      </div>
      <div className='grid_container_row'>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_0'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_1'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_1'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_2'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_3'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_4'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_5'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_6'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_7'></div>
        <div onDrop={filterDrop} onDragOver={allowDrop} className='grid_box' data-index='3_7'></div>
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
