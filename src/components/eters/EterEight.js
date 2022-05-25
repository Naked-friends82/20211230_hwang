import React, { useEffect, useState } from 'react';
import eight_1 from '../../asset/eter/eight/eight_1.jpg';
import eight_2 from '../../asset/eter/eight/eight_2.jpg';
import eight_3 from '../../asset/eter/eight/eight_3.jpg';
import eight_4 from '../../asset/eter/eight/eight_4.jpg';
import eight_5 from '../../asset/eter/eight/eight_5.jpg';
import eight_6 from '../../asset/eter/eight/eight_6.jpg';
import eight_7 from '../../asset/eter/eight/eight_7.jpg';
import eight_8 from '../../asset/eter/eight/eight_8.jpg';
import eight_9 from '../../asset/eter/eight/eight_9.jpg';
import eight_10 from '../../asset/eter/eight/eight_10.jpg';
import eight_11 from '../../asset/eter/eight/eight_11.jpg';
import eight_12 from '../../asset/eter/eight/eight_12.jpg';
import eight_13 from '../../asset/eter/eight/eight_13.jpg';
import eight_14 from '../../asset/eter/eight/eight_14.jpg';
import eight_15 from '../../asset/eter/eight/eight_15.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';


const EterEight = ({saveOrRemove,savedReck_rdx}) => {
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
  const [classAlt13,setClassAlt13] = useState('dragablImg');
  const [classAlt14,setClassAlt14] = useState('dragablImg');
  const [classAlt15,setClassAlt15] = useState('dragablImg');

  const EIGHT_RECK = [
    {
      id: '8_0_1',
      src: eight_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '8_0_2',
      src: eight_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '8_0_3',
      src: eight_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '8_0_4',
      src: eight_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '8_0_5',
      src: eight_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '8_0_6',
      src: eight_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '8_0_7',
      src: eight_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '8_0_8',
      src: eight_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '8_0_9',
      src: eight_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '8_0_10',
      src: eight_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '8_0_11',
      src: eight_11,
      className: classAlt11,
      func: setClassAlt11,
    },
    {
      id: '8_0_12',
      src: eight_12,
      className: classAlt12,
      func: setClassAlt12,
    },
    {
      id: '8_0_13',
      src: eight_13,
      className: classAlt13,
      func: setClassAlt13,
    },
    {
      id: '8_0_14',
      src: eight_14,
      className: classAlt14,
      func: setClassAlt14,
    },
    {
      id: '8_0_15',
      src: eight_15,
      className: classAlt15,
      func: setClassAlt15,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, EIGHT_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterEight_grid_container">
      <div className="grid_item1">
        <img className={EIGHT_RECK[0].className} id={EIGHT_RECK[0].id} onClick={saveOrRemove} src={EIGHT_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item2">
        <img className={EIGHT_RECK[1].className} id={EIGHT_RECK[1].id} onClick={saveOrRemove} src={EIGHT_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item3">
        <img className={EIGHT_RECK[2].className} id={EIGHT_RECK[2].id} onClick={saveOrRemove} src={EIGHT_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item4">
        
      </div>
      <div className="grid_item5">
        
      </div>
      <div className="grid_item6">
        <img className={EIGHT_RECK[3].className} id={EIGHT_RECK[3].id} onClick={saveOrRemove} src={EIGHT_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        <img className={EIGHT_RECK[4].className} id={EIGHT_RECK[4].id} onClick={saveOrRemove} src={EIGHT_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item9">
        <img className={EIGHT_RECK[5].className} id={EIGHT_RECK[5].id} onClick={saveOrRemove} src={EIGHT_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item10">
        <img className={EIGHT_RECK[6].className} id={EIGHT_RECK[6].id} onClick={saveOrRemove} src={EIGHT_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item11">
        <img className={EIGHT_RECK[7].className} id={EIGHT_RECK[7].id} onClick={saveOrRemove} src={EIGHT_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
        <img className={EIGHT_RECK[8].className} id={EIGHT_RECK[8].id} onClick={saveOrRemove} src={EIGHT_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item14">
        <img className={EIGHT_RECK[9].className} id={EIGHT_RECK[9].id} onClick={saveOrRemove} src={EIGHT_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item15">
        <img className={EIGHT_RECK[10].className} id={EIGHT_RECK[10].id} onClick={saveOrRemove} src={EIGHT_RECK[10].src} alt="img" />
      </div>
      <div className="grid_item16">
        <img className={EIGHT_RECK[11].className} id={EIGHT_RECK[11].id} onClick={saveOrRemove} src={EIGHT_RECK[11].src} alt="img" />
      </div>
      <div className="grid_item17">
        
      </div>
      <div className="grid_item18">
        <img className={EIGHT_RECK[12].className} id={EIGHT_RECK[12].id} onClick={saveOrRemove} src={EIGHT_RECK[12].src} alt="img" />
      </div>
      <div className="grid_item19">
        <img className={EIGHT_RECK[13].className} id={EIGHT_RECK[13].id} onClick={saveOrRemove} src={EIGHT_RECK[13].src} alt="img" />
      </div>
      <div className="grid_item20">
        <img className={EIGHT_RECK[14].className} id={EIGHT_RECK[14].id} onClick={saveOrRemove} src={EIGHT_RECK[14].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterEight);