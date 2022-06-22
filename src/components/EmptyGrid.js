import React, { useEffect, useState } from 'react';


const EmptyGrid = ({onSpread, setOnSpread, dataTrans, setDataTrans, dragInGrid, setDragInGrid}) => {
  const [data, setData] = useState(null);
  const draaag = (e) => {
    let tmpRotate = rotateState[0]%4
    if (tmpRotate === -3){
      tmpRotate = 1
    } else if(tmpRotate === 3){
      tmpRotate = -1
    }
    const dataPack = [data[0], data[1], data[2],tmpRotate];
    setDragInGrid(dataPack)
  }
  useEffect(() => {
    if (data !== null){
      if (dragInGrid === null && data[2].className === 'grid_box'){
        setData(null);
        setRotateState([0,null]);
      }
    }
  }, [dragInGrid])

  const filterDrop = (e) => {
    const {target:{className}} = e;
    if (className === 'grid_box'){
        drop(e)
    }
  }

  const drop = (e) => {
    e.preventDefault();
    e.target.classList.add('full')
    let tmpData;
    if(dataTrans == null){
      tmpData = dragInGrid
    } else{
      tmpData = dataTrans
    }
    if(onSpread.includes(tmpData[0])){
      tmpData[2].classList.remove('full')
      const dataPack = [tmpData[0],tmpData[1],e.target]
      setData(dataPack)
      setRotateState([tmpData[3], e.target])
      setDragInGrid(null)
    }else{
      setOnSpread([...onSpread, tmpData[0]]);
      const parent = e.target.closest('.grid_box');
      setData([...tmpData, parent]);
      setDataTrans(null);
    }
  }

  const allowDrop = (e) => {
    e.preventDefault();
  }

  const removeImg = (e) => {
    e.preventDefault();
    setOnSpread(onSpread.filter((item) => item !== data[0]))
    const parent = e.target.closest('.grid_box');
    parent.className = 'grid_box';
    setData(null)
    setRotateState([0,null])
  }

  //rotate
  const [rotateState, setRotateState] = useState([0,null])
  const rotate = (e) => {
    const {text} = e.target.dataset
    const imgBox = e.target.closest('.img_btn_box')
    if (text === 'R'){
      setRotateState([rotateState[0] + 1, imgBox])
    } else if (text === 'L'){
      setRotateState([rotateState[0] - 1, imgBox])
    }
  }
  useEffect(()=> {
    if (data != null){
      const img = rotateState[1].querySelector('img');
      img.style.transform = `rotate(${rotateState[0]*90}deg)`
      img.style.transition = 'all 0.3s'
    }
  },[rotateState])

  return(
    <div onDragStart={draaag} onDragOver={allowDrop} onDrop={filterDrop} className='grid_box'>
    {data == null ? <></>:
      <div id={`${data[0]}/copied`} className='img_btn_box' draggable={true}>
        <img className="drag_img" src={data[1]} alt="clicked_img"/>
        <div className="img_btn_reck">
          <button className='img_btn rotate_btn fa-solid fa-rotate-left' data-text="L" onClick={rotate}></button>
          <button className='img_btn remove_btn fa-solid fa-xmark' onClick={removeImg}></button>
          <button className='img_btn rotate_btn fa-solid fa-rotate-right' data-text="R" onClick={rotate}></button>
        </div>
      </div>}
    </div>
  )
}


export default EmptyGrid;

