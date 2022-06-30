import React, { useEffect, useState } from 'react';
import module_1 from '../../asset/eter/eter_22/module_1.jpg';
import module_2 from '../../asset/eter/eter_22/module_2.jpg';
import module_3 from '../../asset/eter/eter_22/module_3.jpg';
import module_4 from '../../asset/eter/eter_22/module_4.jpg';
import module_5 from '../../asset/eter/eter_22/module_5.jpg';
import module_6 from '../../asset/eter/eter_22/module_6.jpg';
import module_7 from '../../asset/eter/eter_22/module_7.jpg';
import module_8 from '../../asset/eter/eter_22/module_8.jpg';

//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterNineteen = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');
  const [classAlt3,setClassAlt3] = useState('dragablImg');
  const [classAlt4,setClassAlt4] = useState('dragablImg');
  const [classAlt5,setClassAlt5] = useState('dragablImg');
  const [classAlt6,setClassAlt6] = useState('dragablImg');
  const [classAlt7,setClassAlt7] = useState('dragablImg');
  const [classAlt8,setClassAlt8] = useState('dragablImg');

  const MODULE_RECK = [
    {
      id: '22_0_1',
      src: module_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '22_0_2',
      src: module_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '22_0_3',
      src: module_3,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: '22_0_4',
      src: module_4,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: '22_0_5',
      src: module_5,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: '22_0_6',
      src: module_6,
      className: classAlt6,
      func:setClassAlt6
    },
    {
      id: '22_0_7',
      src: module_7,
      className: classAlt7,
      func:setClassAlt7
    },
    {
      id: '22_0_8',
      src: module_8,
      className: classAlt8,
      func: setClassAlt8,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, MODULE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="total20_grid_container">
      <div className="grid_item1">
        <img className={MODULE_RECK[0].className} id={MODULE_RECK[0].id} onClick={saveOrRemove} src={MODULE_RECK[0].src} alt='img' />
      </div>
      <div className="grid_item2">
      </div>
      <div className="grid_item3">
      </div>
      <div className="grid_item4">
      </div>
      <div className="grid_item5">
      </div>
      <div className="grid_item6">
        <img className={MODULE_RECK[1].className} id={MODULE_RECK[1].id} onClick={saveOrRemove} src={MODULE_RECK[1].src} alt='img' />
      </div>
      <div className="grid_item7">
      </div>
      <div className="grid_item8">
        <img className={MODULE_RECK[2].className} id={MODULE_RECK[2].id} onClick={saveOrRemove} src={MODULE_RECK[2].src} alt='img' />        
      </div>
      <div className="grid_item9">
      </div>
      <div className="grid_item10">
      </div>
      <div className="grid_item11">
      </div>
      <div className="grid_item12">
        <img className={MODULE_RECK[3].className} id={MODULE_RECK[3].id} onClick={saveOrRemove} src={MODULE_RECK[3].src} alt='img' />
      </div>
      <div className="grid_item13">
      </div>
      <div className="grid_item14">
      </div>
      <div className="grid_item15">
      </div>
      <div className="grid_item16">
        <img className={MODULE_RECK[4].className} id={MODULE_RECK[4].id} onClick={saveOrRemove} src={MODULE_RECK[4].src} alt='img' />
      </div>
      <div className="grid_item17">
      </div>
      <div className="grid_item18">
        <img className={MODULE_RECK[5].className} id={MODULE_RECK[5].id} onClick={saveOrRemove} src={MODULE_RECK[5].src} alt='img' />
      </div>
      <div className="grid_item19">
        <img className={MODULE_RECK[6].className} id={MODULE_RECK[6].id} onClick={saveOrRemove} src={MODULE_RECK[6].src} alt='img' />
      </div>
      <div className="grid_item20">
        <img className={MODULE_RECK[7].className} id={MODULE_RECK[7].id} onClick={saveOrRemove} src={MODULE_RECK[7].src} alt='img' />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterNineteen);