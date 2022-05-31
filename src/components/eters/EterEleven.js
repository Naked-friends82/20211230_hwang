import React, { useEffect, useState } from 'react';
import eleven_1 from '../../asset/eter/eleven/eleven_1.jpg';
import eleven_2 from '../../asset/eter/eleven/eleven_2.jpg';
import eleven_3 from '../../asset/eter/eleven/eleven_3.jpg';
import eleven_4 from '../../asset/eter/eleven/eleven_4.jpg';
import eleven_5 from '../../asset/eter/eleven/eleven_5.jpg';
import eleven_6 from '../../asset/eter/eleven/eleven_6.jpg';
import eleven_7 from '../../asset/eter/eleven/eleven_7.jpg';
import eleven_8 from '../../asset/eter/eleven/eleven_8.jpg';
import eleven_9 from '../../asset/eter/eleven/eleven_9.jpg';
import eleven_10 from '../../asset/eter/eleven/eleven_10.jpg';
import eleven_11 from '../../asset/eter/eleven/eleven_11.jpg';
import eleven_12 from '../../asset/eter/eleven/eleven_12.jpg';
import eleven_13 from '../../asset/eter/eleven/eleven_13.jpg';
import eleven_14 from '../../asset/eter/eleven/eleven_14.jpg';
import eleven_15 from '../../asset/eter/eleven/eleven_15.jpg';
import eleven_16 from '../../asset/eter/eleven/eleven_16.jpg';
import eleven_17 from '../../asset/eter/eleven/eleven_17.jpg';
import eleven_18 from '../../asset/eter/eleven/eleven_18.jpg';
import eleven_19 from '../../asset/eter/eleven/eleven_19.jpg';
import eleven_20 from '../../asset/eter/eleven/eleven_20.jpg';
import eleven_21 from '../../asset/eter/eleven/eleven_21.jpg';
import eleven_22 from '../../asset/eter/eleven/eleven_22.jpg';
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

  const ELEVEN_RECK = [
    {
      id: '11_0_1',
      src: eleven_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '11_0_2',
      src: eleven_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '11_0_3',
      src: eleven_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '11_0_4',
      src: eleven_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '11_0_5',
      src: eleven_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '11_0_6',
      src: eleven_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '11_0_7',
      src: eleven_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '11_0_8',
      src: eleven_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '11_0_9',
      src: eleven_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '11_0_10',
      src: eleven_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '11_0_11',
      src: eleven_11,
      className: classAlt11,
      func: setClassAlt11,
    },
    {
      id: '11_0_12',
      src: eleven_12,
      className: classAlt12,
      func: setClassAlt12,
    },
    {
      id: '11_0_13',
      src: eleven_13,
      className: classAlt13,
      func: setClassAlt13,
    },
    {
      id: '11_0_14',
      src: eleven_14,
      className: classAlt14,
      func: setClassAlt14,
    },
    {
      id: '11_0_15',
      src: eleven_15,
      className: classAlt15,
      func: setClassAlt15,
    },
    {
      id: '11_0_16',
      src: eleven_16,
      className: classAlt16,
      func: setClassAlt16,
    },
    {
      id: '11_0_17',
      src: eleven_17,
      className: classAlt17,
      func: setClassAlt17,
    },
    {
      id: '11_0_18',
      src: eleven_18,
      className: classAlt18,
      func: setClassAlt18,
    },
    {
      id: '11_0_19',
      src: eleven_19,
      className: classAlt19,
      func: setClassAlt19,
    },
    {
      id: '11_0_20',
      src: eleven_20,
      className: classAlt20,
      func: setClassAlt20,
    },
    {
      id: '11_0_21',
      src: eleven_21,
      className: classAlt21,
      func: setClassAlt21,
    },
    {
      id: '11_0_22',
      src: eleven_22,
      className: classAlt22,
      func: setClassAlt22,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, ELEVEN_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterEleven_grid_container">
      <div className="grid_item1">
      </div>
      <div className="grid_item2">
      </div>
      <div className="grid_item3">
        <img className={ELEVEN_RECK[0].className} id={ELEVEN_RECK[0].id} onClick={saveOrRemove} src={ELEVEN_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item4">
      </div>
      <div className="grid_item5">
      </div>
      <div className="grid_item6">
      </div>
      <div className="grid_item7">
        <img className={ELEVEN_RECK[1].className} id={ELEVEN_RECK[1].id} onClick={saveOrRemove} src={ELEVEN_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item8">
        <img className={ELEVEN_RECK[2].className} id={ELEVEN_RECK[2].id} onClick={saveOrRemove} src={ELEVEN_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item9">
        <img className={ELEVEN_RECK[3].className} id={ELEVEN_RECK[3].id} onClick={saveOrRemove} src={ELEVEN_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item10">
        <img className={ELEVEN_RECK[4].className} id={ELEVEN_RECK[4].id} onClick={saveOrRemove} src={ELEVEN_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item11">
        <img className={ELEVEN_RECK[5].className} id={ELEVEN_RECK[5].id} onClick={saveOrRemove} src={ELEVEN_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item12">
      </div>
      <div className="grid_item13">
        <img className={ELEVEN_RECK[6].className} id={ELEVEN_RECK[6].id} onClick={saveOrRemove} src={ELEVEN_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item14">
        <img className={ELEVEN_RECK[7].className} id={ELEVEN_RECK[7].id} onClick={saveOrRemove} src={ELEVEN_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item15">
        <img className={ELEVEN_RECK[8].className} id={ELEVEN_RECK[8].id} onClick={saveOrRemove} src={ELEVEN_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item16">
      </div>
      <div className="grid_item17">
      </div>
      <div className="grid_item18">
        <img className={ELEVEN_RECK[9].className} id={ELEVEN_RECK[9].id} onClick={saveOrRemove} src={ELEVEN_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item19">
      </div>
      <div className="grid_item20">
        <img className={ELEVEN_RECK[10].className} id={ELEVEN_RECK[10].id} onClick={saveOrRemove} src={ELEVEN_RECK[10].src} alt="img" />
      </div>
      <div className="grid_item21">
      </div>
      <div className="grid_item22">
        <img className={ELEVEN_RECK[11].className} id={ELEVEN_RECK[11].id} onClick={saveOrRemove} src={ELEVEN_RECK[11].src} alt="img" />
      </div>
      <div className="grid_item23">
      </div>
      <div className="grid_item24">
      </div>
      <div className="grid_item25">
        <img className={ELEVEN_RECK[12].className} id={ELEVEN_RECK[12].id} onClick={saveOrRemove} src={ELEVEN_RECK[12].src} alt="img" />
      </div>
      <div className="grid_item26">
      </div>
      <div className="grid_item27">
      </div>
      <div className="grid_item28">
        <img className={ELEVEN_RECK[13].className} id={ELEVEN_RECK[13].id} onClick={saveOrRemove} src={ELEVEN_RECK[13].src} alt="img" />
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
        <img className={ELEVEN_RECK[14].className} id={ELEVEN_RECK[14].id} onClick={saveOrRemove} src={ELEVEN_RECK[14].src} alt="img" />
      </div>
      <div className="grid_item35">
        <img className={ELEVEN_RECK[15].className} id={ELEVEN_RECK[15].id} onClick={saveOrRemove} src={ELEVEN_RECK[15].src} alt="img" />
      </div>
      <div className="grid_item36">
        <img className={ELEVEN_RECK[16].className} id={ELEVEN_RECK[16].id} onClick={saveOrRemove} src={ELEVEN_RECK[16].src} alt="img" />
      </div>
      <div className="grid_item37">
        <img className={ELEVEN_RECK[17].className} id={ELEVEN_RECK[17].id} onClick={saveOrRemove} src={ELEVEN_RECK[17].src} alt="img" />
      </div>
      <div className="grid_item38">
        <img className={ELEVEN_RECK[18].className} id={ELEVEN_RECK[18].id} onClick={saveOrRemove} src={ELEVEN_RECK[18].src} alt="img" />
      </div>
      <div className="grid_item39">
      </div>
      <div className="grid_item40">
        <img className={ELEVEN_RECK[19].className} id={ELEVEN_RECK[19].id} onClick={saveOrRemove} src={ELEVEN_RECK[19].src} alt="img" />
      </div>
      <div className="grid_item41">
      </div>
      <div className="grid_item42">
        <img className={ELEVEN_RECK[20].className} id={ELEVEN_RECK[20].id} onClick={saveOrRemove} src={ELEVEN_RECK[20].src} alt="img" />
      </div>
      <div className="grid_item43">
      </div>
      <div className="grid_item44">
        <img className={ELEVEN_RECK[21].className} id={ELEVEN_RECK[21].id} onClick={saveOrRemove} src={ELEVEN_RECK[21].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterEleven);