import React, { useState } from 'react';
import Exhi_RECK from '../data/Exhi_RECK';

const EachDetail = ({detailDeck, showDetail}) => {
  const EXHI_RECK = Exhi_RECK(null);
  const [currentDetail, setCurrentDetail] = useState(0);

  const shiftDetail = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== (EXHI_RECK[currentDetail].detailExhi.length -1)){
      setCurrentDetail(currentDetail +1);
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
      </div>
      <div className="detailPaper">
        {
          detailDeck.descriptions.map((each) => 
              <div className="eachDesc" key={each.title}>
                <div className="detailPaper_title">
                  <h1>{each.title}</h1>
                  <button className="eachDetail_out" onClick={showDetail}><i className="fa-solid fa-angle-left" /></button>
                </div>
                <h3>{each.author}</h3>
                <div className="eachPaper">
                  {each.paper}
                </div>
              </div>
              )
            }
        <button className="eachDetail_out" onClick={showDetail}><i className='fa-solid fa-angle-left' /></button>
      </div>
    </div>
    <div className="eachDetail_back"></div>
    </>
  )
}

export default EachDetail