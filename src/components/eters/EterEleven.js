import React, { useEffect, useState } from 'react';
import module_1 from '../../asset/eter/eter_11/module_1.jpg';
import module_2 from '../../asset/eter/eter_11/module_2.jpg';
import module_3 from '../../asset/eter/eter_11/module_3.jpg';
import module_4 from '../../asset/eter/eter_11/module_4.jpg';
import module_5 from '../../asset/eter/eter_11/module_5.jpg';
import module_6 from '../../asset/eter/eter_11/module_6.jpg';
import module_7 from '../../asset/eter/eter_11/module_7.jpg';
import module_8 from '../../asset/eter/eter_11/module_8.jpg';
import module_9 from '../../asset/eter/eter_11/module_9.jpg';
import module_10 from '../../asset/eter/eter_11/module_10.jpg';
import module_11 from '../../asset/eter/eter_11/module_11.jpg';
import module_12 from '../../asset/eter/eter_11/module_12.jpg';
import module_13 from '../../asset/eter/eter_11/module_13.jpg';
import module_14 from '../../asset/eter/eter_11/module_14.jpg';
import module_15 from '../../asset/eter/eter_11/module_15.jpg';
import module_16 from '../../asset/eter/eter_11/module_16.jpg';
import module_17 from '../../asset/eter/eter_11/module_17.jpg';
import module_18 from '../../asset/eter/eter_11/module_18.jpg';
import module_19 from '../../asset/eter/eter_11/module_19.jpg';
import module_20 from '../../asset/eter/eter_11/module_20.jpg';
import module_21 from '../../asset/eter/eter_11/module_21.jpg';
import module_22 from '../../asset/eter/eter_11/module_22.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';


const EterEleven = ({saveOrRemove,savedReck_rdx}) => {
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
  const [classAlt19,setClassAlt19] = useState('dragablImg');
  const [classAlt20,setClassAlt20] = useState('dragablImg');
  const [classAlt21,setClassAlt21] = useState('dragablImg');
  const [classAlt22,setClassAlt22] = useState('dragablImg');

  const MODULE_RECK = [
    {
      id: '11_0_1',
      src: module_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '11_0_2',
      src: module_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '11_0_3',
      src: module_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '11_0_4',
      src: module_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '11_0_5',
      src: module_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '11_0_6',
      src: module_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '11_0_7',
      src: module_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '11_0_8',
      src: module_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '11_0_9',
      src: module_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '11_0_10',
      src: module_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '11_0_11',
      src: module_11,
      className: classAlt11,
      func: setClassAlt11,
    },
    {
      id: '11_0_12',
      src: module_12,
      className: classAlt12,
      func: setClassAlt12,
    },
    {
      id: '11_0_13',
      src: module_13,
      className: classAlt13,
      func: setClassAlt13,
    },
    {
      id: '11_0_14',
      src: module_14,
      className: classAlt14,
      func: setClassAlt14,
    },
    {
      id: '11_0_15',
      src: module_15,
      className: classAlt15,
      func: setClassAlt15,
    },
    {
      id: '11_0_16',
      src: module_16,
      className: classAlt16,
      func: setClassAlt16,
    },
    {
      id: '11_0_17',
      src: module_17,
      className: classAlt17,
      func: setClassAlt17,
    },
    {
      id: '11_0_18',
      src: module_18,
      className: classAlt18,
      func: setClassAlt18,
    },
    {
      id: '11_0_19',
      src: module_19,
      className: classAlt19,
      func: setClassAlt19,
    },
    {
      id: '11_0_20',
      src: module_20,
      className: classAlt20,
      func: setClassAlt20,
    },
    {
      id: '11_0_21',
      src: module_21,
      className: classAlt21,
      func: setClassAlt21,
    },
    {
      id: '11_0_22',
      src: module_22,
      className: classAlt22,
      func: setClassAlt22,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, MODULE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="total44_grid_container">
      <div className="grid_item1">
      </div>
      <div className="grid_item2">
      </div>
      <div className="grid_item3">
        <img className={MODULE_RECK[0].className} id={MODULE_RECK[0].id} onClick={saveOrRemove} src={MODULE_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item4">
      </div>
      <div className="grid_item5">
      </div>
      <div className="grid_item6">
      </div>
      <div className="grid_item7">
        <img className={MODULE_RECK[1].className} id={MODULE_RECK[1].id} onClick={saveOrRemove} src={MODULE_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item8">
        <img className={MODULE_RECK[2].className} id={MODULE_RECK[2].id} onClick={saveOrRemove} src={MODULE_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item9">
        <img className={MODULE_RECK[3].className} id={MODULE_RECK[3].id} onClick={saveOrRemove} src={MODULE_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item10">
        <img className={MODULE_RECK[4].className} id={MODULE_RECK[4].id} onClick={saveOrRemove} src={MODULE_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item11">
        <img className={MODULE_RECK[5].className} id={MODULE_RECK[5].id} onClick={saveOrRemove} src={MODULE_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item12">
      </div>
      <div className="grid_item13">
        <img className={MODULE_RECK[6].className} id={MODULE_RECK[6].id} onClick={saveOrRemove} src={MODULE_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item14">
        <img className={MODULE_RECK[7].className} id={MODULE_RECK[7].id} onClick={saveOrRemove} src={MODULE_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item15">
        <img className={MODULE_RECK[8].className} id={MODULE_RECK[8].id} onClick={saveOrRemove} src={MODULE_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item16">
      </div>
      <div className="grid_item17">
      </div>
      <div className="grid_item18">
        <img className={MODULE_RECK[9].className} id={MODULE_RECK[9].id} onClick={saveOrRemove} src={MODULE_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item19">
      </div>
      <div className="grid_item20">
        <img className={MODULE_RECK[10].className} id={MODULE_RECK[10].id} onClick={saveOrRemove} src={MODULE_RECK[10].src} alt="img" />
      </div>
      <div className="grid_item21">
      </div>
      <div className="grid_item22">
        <img className={MODULE_RECK[11].className} id={MODULE_RECK[11].id} onClick={saveOrRemove} src={MODULE_RECK[11].src} alt="img" />
      </div>
      <div className="grid_item23">
      </div>
      <div className="grid_item24">
      </div>
      <div className="grid_item25">
        <img className={MODULE_RECK[12].className} id={MODULE_RECK[12].id} onClick={saveOrRemove} src={MODULE_RECK[12].src} alt="img" />
      </div>
      <div className="grid_item26">
      </div>
      <div className="grid_item27">
      </div>
      <div className="grid_item28">
        <img className={MODULE_RECK[13].className} id={MODULE_RECK[13].id} onClick={saveOrRemove} src={MODULE_RECK[13].src} alt="img" />
      </div>
      <div className="grid_item29">
      </div>
      <div className="grid_item30">
      </div>
      <div className="grid_item31">
      </div>
      <div className="grid_item32">
      </div>
      <div className="grid_item33">
      </div>
      <div className="grid_item34">
        <img className={MODULE_RECK[14].className} id={MODULE_RECK[14].id} onClick={saveOrRemove} src={MODULE_RECK[14].src} alt="img" />
      </div>
      <div className="grid_item35">
        <img className={MODULE_RECK[15].className} id={MODULE_RECK[15].id} onClick={saveOrRemove} src={MODULE_RECK[15].src} alt="img" />
      </div>
      <div className="grid_item36">
        <img className={MODULE_RECK[16].className} id={MODULE_RECK[16].id} onClick={saveOrRemove} src={MODULE_RECK[16].src} alt="img" />
      </div>
      <div className="grid_item37">
        <img className={MODULE_RECK[17].className} id={MODULE_RECK[17].id} onClick={saveOrRemove} src={MODULE_RECK[17].src} alt="img" />
      </div>
      <div className="grid_item38">
        <img className={MODULE_RECK[18].className} id={MODULE_RECK[18].id} onClick={saveOrRemove} src={MODULE_RECK[18].src} alt="img" />
      </div>
      <div className="grid_item39">
      </div>
      <div className="grid_item40">
        <img className={MODULE_RECK[19].className} id={MODULE_RECK[19].id} onClick={saveOrRemove} src={MODULE_RECK[19].src} alt="img" />
      </div>
      <div className="grid_item41">
      </div>
      <div className="grid_item42">
        <img className={MODULE_RECK[20].className} id={MODULE_RECK[20].id} onClick={saveOrRemove} src={MODULE_RECK[20].src} alt="img" />
      </div>
      <div className="grid_item43">
      </div>
      <div className="grid_item44">
        <img className={MODULE_RECK[21].className} id={MODULE_RECK[21].id} onClick={saveOrRemove} src={MODULE_RECK[21].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterEleven);