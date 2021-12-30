import React, { useState } from 'react';
import '../style/web/eachDetail.css';
import '../style/mobile/eachDetail_m.css';

const EachDetail = ({detailDeck, showDetail}) => {
  const [currentDetail, setCurrentDetail] = useState(0);

  const shiftDetail = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== 2){
      setCurrentDetail(currentDetail +1);
    } else if(value === "0"){setCurrentDetail(0);
    } else if(value === "1"){setCurrentDetail(1);
    } else if(value === "2"){setCurrentDetail(2);
    }
  };

  return(
    <>
    <div className="eachDetail">
      <div className="detailImg">
        <img className="detailImg_img" src={detailDeck.detailExhi[currentDetail]} alt="exhi detail"/>
        <div className="detailImg_btn">
          <button className="eachBtn" value="prev" onClick={shiftDetail}>&#10094;</button>
          <button className="eachBtn" value="next" onClick={shiftDetail}>&#10095;</button>
        </div>
        <div className="detailImg_dot">
          <button className="dot" value="0" onClick={shiftDetail}></button>
          <button className="dot" value="1" onClick={shiftDetail}></button>
          <button className="dot" value="2" onClick={shiftDetail}></button>
        </div>
      </div>
      <div className="detailPaper">
        <div className="detailPaper_title">
          <h1>{detailDeck.title}</h1>
          <button className="eachDetail_out" onClick={showDetail}>&#10094;</button>
        </div>
        <h3>{detailDeck.author}</h3>
        <p>{detailDeck.paper}</p>
        <button className="eachDetail_out" onClick={showDetail}>&#10094;</button>
      </div>

    </div>
    <div className="eachDetail_back"></div>
    </>
  )
}

export default EachDetail