import React, { useEffect, useState } from 'react';
import wat_007_01 from '../../asset/wat/wat_7/wat_007_01.jpg';
import wat_007_02 from '../../asset/wat/wat_7/wat_007_02.jpg';
import wat_007_03 from '../../asset/wat/wat_7/wat_007_03.jpg';
import wat_007_04 from '../../asset/wat/wat_7/wat_007_04.jpg';
import wat_007_05 from '../../asset/wat/wat_7/wat_007_05.jpg';
import wat_007_06 from '../../asset/wat/wat_7/wat_007_06.jpg';
import wat_007_07 from '../../asset/wat/wat_7/wat_007_07.jpg';

//redux
import { connect } from 'react-redux';
// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const WatTwo = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');
  const [classAlt3,setClassAlt3] = useState('dragablImg');
  const [classAlt4,setClassAlt4] = useState('dragablImg');
  const [classAlt5,setClassAlt5] = useState('dragablImg');
  const [classAlt6,setClassAlt6] = useState('dragablImg');
  const [classAlt7,setClassAlt7] = useState('dragablImg');

  const MODULE_RECK = [
    {
      id: 'wat_007_01',
      src: wat_007_01,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: 'wat_007_02',
      src: wat_007_02,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: 'wat_007_03',
      src: wat_007_03,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: 'wat_007_04',
      src: wat_007_04,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: 'wat_007_05',
      src: wat_007_05,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: 'wat_007_06',
      src: wat_007_06,
      className: classAlt6,
      func:setClassAlt6
    },
    {
      id: 'wat_007_07',
      src: wat_007_07,
      className: classAlt7,
      func:setClassAlt7
    },
  ];
    
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, MODULE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="total21_grid_container">
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
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        
      </div>
      <div className="grid_item9">
        <img className={MODULE_RECK[1].className} id={MODULE_RECK[1].id} onClick={saveOrRemove} src={MODULE_RECK[1].src} alt='img' />
      </div>
      <div className="grid_item10">
        <img className={MODULE_RECK[2].className} id={MODULE_RECK[2].id} onClick={saveOrRemove} src={MODULE_RECK[2].src} alt='img' />
      </div>
      <div className="grid_item11">
        <img className={MODULE_RECK[3].className} id={MODULE_RECK[3].id} onClick={saveOrRemove} src={MODULE_RECK[3].src} alt='img' />
      </div>
      <div className="grid_item12">
        <img className={MODULE_RECK[4].className} id={MODULE_RECK[4].id} onClick={saveOrRemove} src={MODULE_RECK[4].src} alt='img' />
      </div>
      <div className="grid_item13">
        <img className={MODULE_RECK[5].className} id={MODULE_RECK[5].id} onClick={saveOrRemove} src={MODULE_RECK[5].src} alt='img' />
      </div>
      <div className="grid_item14">
        
      </div>
      <div className="grid_item15">
      </div>
      <div className="grid_item16">
        
      </div>
      <div className="grid_item17">
        
      </div>
      <div className="grid_item18">
      </div>
      <div className="grid_item19">
      </div>
      <div className="grid_item20">
      </div>
      <div className="grid_item21">
        <img className={MODULE_RECK[6].className} id={MODULE_RECK[6].id} onClick={saveOrRemove} src={MODULE_RECK[6].src} alt='img' />
      </div>
      <div className="grid_item22">
      </div>
      <div className="grid_item23">
      </div>
      <div className="grid_item24">
      </div>
    </div>
  );
};

const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(WatTwo);
