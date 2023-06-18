import React, { useEffect, useState } from 'react';
import wat_001_01 from '../../asset/wat/wat_1/wat_001_01.jpg';
import wat_001_02 from '../../asset/wat/wat_1/wat_001_02.jpg';

//redux
import { connect } from 'react-redux';
// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const WatTwo = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');

  const MODULE_RECK = [
    {
      id: 'wat_001_01',
      src: wat_001_01,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: 'wat_001_02',
      src: wat_001_02,
      className: classAlt2,
      func:setClassAlt2
    },
  ];
    
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, MODULE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="total8_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        
      </div>
      <div className="grid_item3">
        <img className={MODULE_RECK[0].className} id={MODULE_RECK[0].id} onClick={saveOrRemove} src={MODULE_RECK[0].src} alt='img' />
      </div>
      <div className="grid_item4">
        <img className={MODULE_RECK[1].className} id={MODULE_RECK[1].id} onClick={saveOrRemove} src={MODULE_RECK[1].src} alt='img' />
      </div>
      <div className="grid_item5">
      </div>
      <div className="grid_item6">
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        
      </div>
    </div>
  );
};

const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(WatTwo);
