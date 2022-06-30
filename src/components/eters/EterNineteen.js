import React, { useEffect, useState } from 'react';
import module_1 from '../../asset/eter/eter_19/module_1.jpg';
import module_2 from '../../asset/eter/eter_19/module_2.jpg';
import module_3 from '../../asset/eter/eter_19/module_3.jpg';
import module_4 from '../../asset/eter/eter_19/module_4.jpg';
import module_5 from '../../asset/eter/eter_19/module_5.jpg';
import module_6 from '../../asset/eter/eter_19/module_6.jpg';
import module_7 from '../../asset/eter/eter_19/module_7.jpg';
import module_8 from '../../asset/eter/eter_19/module_8.jpg';
import module_9 from '../../asset/eter/eter_19/module_9.jpg';
import module_10 from '../../asset/eter/eter_19/module_10.jpg';
import module_11 from '../../asset/eter/eter_19/module_11.jpg';
import module_12 from '../../asset/eter/eter_19/module_12.jpg';

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
  const [classAlt9,setClassAlt9] = useState('dragablImg');
  const [classAlt10,setClassAlt10] = useState('dragablImg');
  const [classAlt11,setClassAlt11] = useState('dragablImg');
  const [classAlt12,setClassAlt12] = useState('dragablImg');

  const MODULE_RECK = [
    {
      id: '19_0_1',
      src: module_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '19_0_2',
      src: module_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '19_0_3',
      src: module_3,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: '19_0_4',
      src: module_4,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: '19_0_5',
      src: module_5,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: '19_0_6',
      src: module_6,
      className: classAlt6,
      func:setClassAlt6
    },
    {
      id: '19_0_7',
      src: module_7,
      className: classAlt7,
      func:setClassAlt7
    },
    {
      id: '19_0_8',
      src: module_8,
      className: classAlt8,
      func:setClassAlt8
    },
    {
      id: '19_0_9',
      src: module_9,
      className: classAlt9,
      func:setClassAlt9
    },
    {
      id: '19_0_10',
      src: module_10,
      className: classAlt10,
      func:setClassAlt10
    },
    {
      id: '19_0_11',
      src: module_11,
      className: classAlt11,
      func:setClassAlt11
    },
    {
      id: '19_0_12',
      src: module_12,
      className: classAlt12,
      func:setClassAlt12
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, MODULE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="total20_grid_container">
      <div className="grid_item1">
      </div>
      <div className="grid_item2">
      </div>
      <div className="grid_item3">
        <img className={MODULE_RECK[0].className} id={MODULE_RECK[0].id} onClick={saveOrRemove} src={MODULE_RECK[0].src} alt='img' />
      </div>
      <div className="grid_item4">
        
      </div>
      <div className="grid_item5">
        
      </div>
      <div className="grid_item6">
        <img className={MODULE_RECK[1].className} id={MODULE_RECK[1].id} onClick={saveOrRemove} src={MODULE_RECK[1].src} alt='img' />
      </div>
      <div className="grid_item7">
        <img className={MODULE_RECK[2].className} id={MODULE_RECK[2].id} onClick={saveOrRemove} src={MODULE_RECK[2].src} alt='img' />        
      </div>
      <div className="grid_item8">
        <img className={MODULE_RECK[3].className} id={MODULE_RECK[3].id} onClick={saveOrRemove} src={MODULE_RECK[3].src} alt='img' />
      </div>
      <div className="grid_item9">
        <img className={MODULE_RECK[4].className} id={MODULE_RECK[4].id} onClick={saveOrRemove} src={MODULE_RECK[4].src} alt='img' />
      </div>
      <div className="grid_item10">
        <img className={MODULE_RECK[5].className} id={MODULE_RECK[5].id} onClick={saveOrRemove} src={MODULE_RECK[5].src} alt='img' />
        
      </div>
      <div className="grid_item11">
        <img className={MODULE_RECK[6].className} id={MODULE_RECK[6].id} onClick={saveOrRemove} src={MODULE_RECK[6].src} alt='img' />
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
        <img className={MODULE_RECK[7].className} id={MODULE_RECK[7].id} onClick={saveOrRemove} src={MODULE_RECK[7].src} alt='img' />

      </div>
      <div className="grid_item14">
        
      </div>
      <div className="grid_item15">
        <img className={MODULE_RECK[8].className} id={MODULE_RECK[8].id} onClick={saveOrRemove} src={MODULE_RECK[8].src} alt='img' />
      </div>
      <div className="grid_item16">
        <img className={MODULE_RECK[9].className} id={MODULE_RECK[9].id} onClick={saveOrRemove} src={MODULE_RECK[9].src} alt='img' />
      </div>
      <div className="grid_item17">
        
      </div>
      <div className="grid_item18">
        <img className={MODULE_RECK[10].className} id={MODULE_RECK[10].id} onClick={saveOrRemove} src={MODULE_RECK[10].src} alt='img' />
      </div>
      <div className="grid_item19">
      </div>
      <div className="grid_item20">
        <img className={MODULE_RECK[11].className} id={MODULE_RECK[11].id} onClick={saveOrRemove} src={MODULE_RECK[11].src} alt='img' />

      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterNineteen);