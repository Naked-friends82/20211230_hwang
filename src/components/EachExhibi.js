import React, { useState } from 'react';
import Exhi_RECK from '../data/Exhi_RECK';

const EachExhibi = ({exhiIndex}) => {
  const EXHI_RECK = Exhi_RECK(null);
  const [exhibi,setExhibi] = useState(0);

  const shiftExhibi = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && exhibi !== 0){
      setExhibi(exhibi -1);
    } else if(value === "next" && exhibi !== (EXHI_RECK[exhiIndex].detailExhi.length -1) ){
      setExhibi(exhibi +1);
    }
  };

  return(
    <>
      <div className="eachExhibi">
        <div className='eachExhibi_img_reck'>
          <div></div>
          <img className="eachExhibi_img" src={EXHI_RECK[exhiIndex].detailExhi[exhibi]} alt="exhi detail"/>
          <div className="eachExhibi_btn">
            <button className="btn" value="prev" onClick={shiftExhibi}>&#10094;</button>
            <button className="btn" value="next" onClick={shiftExhibi}>&#10095;</button>
          </div>
        </div>
        <div className="eachExhibi_Paper">
        {
          EXHI_RECK[exhiIndex].descriptions.map((each) => 
              <div className="eachDesc" key={each.title}>
                <h1>{each.title}</h1>
                <h3>{each.author}</h3>
                {each.paper}
              </div>
              )
          }
        </div>

      </div>
    </>
  )
}

export default EachExhibi