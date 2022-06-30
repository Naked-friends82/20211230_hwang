import React, { useEffect, useState } from 'react';
import module_1 from '../../asset/eter/eter_0/module_1.jpg';
import module_2 from '../../asset/eter/eter_0/module_2.jpg';
import module_3 from '../../asset/eter/eter_0/module_3.jpg';
//redux
import { connect } from 'react-redux';
// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterZero = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');
  const [classAlt3,setClassAlt3] = useState('dragablImg');

  const MODULE_RECK = [
    {
      id: '0_0_1',
      src: module_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '0_0_2',
      src: module_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '0_0_3',
      src: module_3,
      className: classAlt3,
      func:setClassAlt3
    },
  ];
    
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, MODULE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="total12_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        
      </div>
      <div className="grid_item3">
        
      </div>
      <div className="grid_item4">
        <img className={MODULE_RECK[0].className} id={MODULE_RECK[0].id} onClick={saveOrRemove} src={MODULE_RECK[0].src} alt='img' />
      </div>
      <div className="grid_item5">
        <img className={MODULE_RECK[1].className} id={MODULE_RECK[1].id} onClick={saveOrRemove} src={MODULE_RECK[1].src} alt='img' />
      </div>
      <div className="grid_item6">
        <img className={MODULE_RECK[2].className} id={MODULE_RECK[2].id} onClick={saveOrRemove} src={MODULE_RECK[2].src} alt='img' />
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        
      </div>
      <div className="grid_item11">
        
      </div>
      <div className="grid_item12">
        
      </div>
    </div>
  );
};

const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterZero);
