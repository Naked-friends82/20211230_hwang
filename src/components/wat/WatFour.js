import React, { useEffect, useState } from 'react';
import wat_004_01 from '../../asset/wat/wat_4/wat_004_01.jpg';
import wat_004_02 from '../../asset/wat/wat_4/wat_004_02.jpg';
import wat_004_03 from '../../asset/wat/wat_4/wat_004_03.jpg';
import wat_004_04 from '../../asset/wat/wat_4/wat_004_04.jpg';
import wat_004_05 from '../../asset/wat/wat_4/wat_004_05.jpg';
import wat_004_06 from '../../asset/wat/wat_4/wat_004_06.jpg';
import wat_004_07 from '../../asset/wat/wat_4/wat_004_07.jpg';
import wat_004_08 from '../../asset/wat/wat_4/wat_004_08.jpg';
import wat_004_09 from '../../asset/wat/wat_4/wat_004_09.jpg';
import wat_004_10 from '../../asset/wat/wat_4/wat_004_10.jpg';
import wat_004_11 from '../../asset/wat/wat_4/wat_004_11.jpg';
import wat_004_12 from '../../asset/wat/wat_4/wat_004_12.jpg';

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
  const [classAlt8,setClassAlt8] = useState('dragablImg');
  const [classAlt9,setClassAlt9] = useState('dragablImg');
  const [classAlt10,setClassAlt10] = useState('dragablImg');
  const [classAlt11,setClassAlt11] = useState('dragablImg');
  const [classAlt12,setClassAlt12] = useState('dragablImg');

  const MODULE_RECK = [
    {
      id: 'wat_004_01',
      src: wat_004_01,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: 'wat_004_02',
      src: wat_004_02,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: 'wat_004_03',
      src: wat_004_03,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: 'wat_004_04',
      src: wat_004_04,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: 'wat_004_05',
      src: wat_004_05,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: 'wat_004_06',
      src: wat_004_06,
      className: classAlt6,
      func:setClassAlt6
    },
    {
      id: 'wat_004_07',
      src: wat_004_07,
      className: classAlt7,
      func:setClassAlt7
    },
    {
      id: 'wat_004_08',
      src: wat_004_08,
      className: classAlt8,
      func:setClassAlt8
    },
    {
      id: 'wat_004_09',
      src: wat_004_09,
      className: classAlt9,
      func:setClassAlt9
    },
    {
      id: 'wat_004_10',
      src: wat_004_10,
      className: classAlt10,
      func:setClassAlt10
    },
    {
      id: 'wat_004_11',
      src: wat_004_11,
      className: classAlt11,
      func:setClassAlt11
    },
    {
      id: 'wat_004_12',
      src: wat_004_12,
      className: classAlt12,
      func:setClassAlt12
    }
  ];
    
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, MODULE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="total24_grid_container">
      <div className="grid_item1">
        <img className={MODULE_RECK[0].className} id={MODULE_RECK[0].id} onClick={saveOrRemove} src={MODULE_RECK[0].src} alt='img' />
      </div>
      <div className="grid_item2">
        <img className={MODULE_RECK[1].className} id={MODULE_RECK[1].id} onClick={saveOrRemove} src={MODULE_RECK[1].src} alt='img' />
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
        <img className={MODULE_RECK[2].className} id={MODULE_RECK[2].id} onClick={saveOrRemove} src={MODULE_RECK[2].src} alt='img' />        
      </div>
      <div className="grid_item8">
        
      </div>
      <div className="grid_item9">
        <img className={MODULE_RECK[3].className} id={MODULE_RECK[3].id} onClick={saveOrRemove} src={MODULE_RECK[3].src} alt='img' />
        
      </div>
      <div className="grid_item10">
        <img className={MODULE_RECK[4].className} id={MODULE_RECK[4].id} onClick={saveOrRemove} src={MODULE_RECK[4].src} alt='img' />
        
      </div>
      <div className="grid_item11">
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
        <img className={MODULE_RECK[5].className} id={MODULE_RECK[5].id} onClick={saveOrRemove} src={MODULE_RECK[5].src} alt='img' />
      </div>
      <div className="grid_item14">
      </div>
      <div className="grid_item15">
        <img className={MODULE_RECK[6].className} id={MODULE_RECK[6].id} onClick={saveOrRemove} src={MODULE_RECK[6].src} alt='img' />
      </div>
      <div className="grid_item16">
      </div>
      <div className="grid_item17">
        <img className={MODULE_RECK[7].className} id={MODULE_RECK[7].id} onClick={saveOrRemove} src={MODULE_RECK[7].src} alt='img' />
      </div>
      <div className="grid_item18">
        <img className={MODULE_RECK[8].className} id={MODULE_RECK[8].id} onClick={saveOrRemove} src={MODULE_RECK[8].src} alt='img' />
      </div>
      <div className="grid_item19">
        <img className={MODULE_RECK[9].className} id={MODULE_RECK[9].id} onClick={saveOrRemove} src={MODULE_RECK[9].src} alt='img' />
      </div>
      <div className="grid_item20">
      </div>
      <div className="grid_item21">
        <img className={MODULE_RECK[10].className} id={MODULE_RECK[10].id} onClick={saveOrRemove} src={MODULE_RECK[10].src} alt='img' />
      </div>
      <div className="grid_item22">
      </div>
      <div className="grid_item23">
        <img className={MODULE_RECK[11].className} id={MODULE_RECK[11].id} onClick={saveOrRemove} src={MODULE_RECK[11].src} alt='img' />
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
