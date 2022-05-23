import React, { useEffect, useState } from 'react';
import one_1 from '../../asset/eter/one/one_1.jpg';
import one_2 from '../../asset/eter/one/one_2.jpg';
import one_3 from '../../asset/eter/one/one_3.jpg';
import one_4 from '../../asset/eter/one/one_4.jpg';
import one_5 from '../../asset/eter/one/one_5.jpg';
import one_6 from '../../asset/eter/one/one_6.jpg';
import one_7 from '../../asset/eter/one/one_7.jpg';
import one_8 from '../../asset/eter/one/one_8.jpg';
import one_9 from '../../asset/eter/one/one_9.jpg';
import one_10 from '../../asset/eter/one/one_10.jpg';
import one_11 from '../../asset/eter/one/one_11.jpg';
import one_12 from '../../asset/eter/one/one_12.jpg';
import one_13 from '../../asset/eter/one/one_13.jpg';
import one_14 from '../../asset/eter/one/one_14.jpg';
import one_15 from '../../asset/eter/one/one_15.jpg';
import one_16 from '../../asset/eter/one/one_16.jpg';
import one_17 from '../../asset/eter/one/one_17.jpg';
import one_18 from '../../asset/eter/one/one_18.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterOne = ({saveOrRemove,savedReck_rdx}) => {
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
  const [classAlt16,setClassAlt16] = useState('dragablImg');
  const [classAlt17,setClassAlt17] = useState('dragablImg');
  const [classAlt18,setClassAlt18] = useState('dragablImg');

  const ONE_RECK = [
    {
      id: '1_0_1',
      src: one_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '1_0_2',
      src: one_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '1_0_3',
      src: one_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '1_0_4',
      src: one_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '1_0_5',
      src: one_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '1_0_6',
      src: one_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '1_0_7',
      src: one_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '1_0_8',
      src: one_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '1_0_9',
      src: one_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '1_0_10',
      src: one_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '1_0_11',
      src: one_11,
      className: classAlt11,
      func: setClassAlt11,
    },
    {
      id: '1_0_12',
      src: one_12,
      className: classAlt12,
      func: setClassAlt12,
    },
    {
      id: '1_0_13',
      src: one_13,
      className: classAlt13,
      func: setClassAlt13,
    },
    {
      id: '1_0_14',
      src: one_14,
      className: classAlt14,
      func: setClassAlt14,
    },
    {
      id: '1_0_15',
      src: one_15,
      className: classAlt15,
      func: setClassAlt15,
    },
    {
      id: '1_0_16',
      src: one_16,
      className: classAlt16,
      func: setClassAlt16,
    },

    {
      id: '1_0_17',
      src: one_17,
      className: classAlt17,
      func: setClassAlt17,
    },
    {
      id: '1_0_18',
      src: one_18,
      className: classAlt18,
      func: setClassAlt18,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, ONE_RECK)
  },[savedReck_rdx]);
  
  return(
    <div className="eterOne_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        <img className={classAlt1} id={ONE_RECK[0].id} onClick={saveOrRemove} src={ONE_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item3">
        <img className={classAlt2} id={ONE_RECK[1].id} onClick={saveOrRemove} src={ONE_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item4">
        <img className={classAlt3} id={ONE_RECK[2].id} onClick={saveOrRemove} src={ONE_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item5">
        <img className={classAlt4} id={ONE_RECK[3].id} onClick={saveOrRemove} src={ONE_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item6">
        
      </div>
      <div className="grid_item7">
        <img className={classAlt5} id={ONE_RECK[4].id} onClick={saveOrRemove} src={ONE_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item8">
        <img className={classAlt6} id={ONE_RECK[5].id} onClick={saveOrRemove} src={ONE_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item9">
        <img className={classAlt7} id={ONE_RECK[6].id} onClick={saveOrRemove} src={ONE_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item10">
        <img className={classAlt8} id={ONE_RECK[7].id} onClick={saveOrRemove} src={ONE_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item11">
        <img className={classAlt9} id={ONE_RECK[8].id} onClick={saveOrRemove} src={ONE_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item12">
        <img className={classAlt10} id={ONE_RECK[9].id} onClick={saveOrRemove} src={ONE_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item13">
        <img className={classAlt11} id={ONE_RECK[10].id} onClick={saveOrRemove} src={ONE_RECK[10].src} alt="img" />
      </div>
      <div className="grid_item14">
        <img className={classAlt12} id={ONE_RECK[11].id} onClick={saveOrRemove} src={ONE_RECK[11].src} alt="img" />
      </div>
      <div className="grid_item15">
        <img className={classAlt13} id={ONE_RECK[12].id} onClick={saveOrRemove} src={ONE_RECK[12].src} alt="img" />
      </div>
      <div className="grid_item16">
        <img className={classAlt14} id={ONE_RECK[13].id} onClick={saveOrRemove} src={ONE_RECK[13].src} alt="img" />
      </div>
      <div className="grid_item17">
        <img className={classAlt15} id={ONE_RECK[14].id} onClick={saveOrRemove} src={ONE_RECK[14].src} alt="img" />
      </div>
      <div className="grid_item18">
        <img className={classAlt16} id={ONE_RECK[15].id} onClick={saveOrRemove} src={ONE_RECK[15].src} alt="img" />
      </div>
      <div className="grid_item19">
        <img className={classAlt17} id={ONE_RECK[16].id} onClick={saveOrRemove} src={ONE_RECK[16].src} alt="img" />
      </div>
      <div className="grid_item20">
        <img className={classAlt18} id={ONE_RECK[17].id} onClick={saveOrRemove} src={ONE_RECK[17].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterOne);