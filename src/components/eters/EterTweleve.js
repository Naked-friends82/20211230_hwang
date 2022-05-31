import React, { useEffect, useState } from 'react';
import twelve_1 from '../../asset/eter/twelve/twelve_1.jpg';
import twelve_2 from '../../asset/eter/twelve/twelve_2.jpg';
import twelve_3 from '../../asset/eter/twelve/twelve_3.jpg';
import twelve_4 from '../../asset/eter/twelve/twelve_4.jpg';
import twelve_5 from '../../asset/eter/twelve/twelve_5.jpg';
import twelve_6 from '../../asset/eter/twelve/twelve_6.jpg';
import twelve_7 from '../../asset/eter/twelve/twelve_7.jpg';
import twelve_8 from '../../asset/eter/twelve/twelve_8.jpg';
import twelve_9 from '../../asset/eter/twelve/twelve_9.jpg';
import twelve_10 from '../../asset/eter/twelve/twelve_10.jpg';
import twelve_11 from '../../asset/eter/twelve/twelve_11.jpg';
import twelve_12 from '../../asset/eter/twelve/twelve_12.jpg';
import twelve_13 from '../../asset/eter/twelve/twelve_13.jpg';
import twelve_14 from '../../asset/eter/twelve/twelve_14.jpg';
import twelve_15 from '../../asset/eter/twelve/twelve_15.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterTwelve = ({saveOrRemove,savedReck_rdx}) => {
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

  const TWELVE_RECK = [
    {
      id: '12_0_1',
      src: twelve_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '12_0_2',
      src: twelve_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '12_0_3',
      src: twelve_3,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: '12_0_4',
      src: twelve_4,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: '12_0_5',
      src: twelve_5,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: '12_0_6',
      src: twelve_6,
      className: classAlt6,
      func:setClassAlt6
    },
    {
      id: '12_0_7',
      src: twelve_7,
      className: classAlt7,
      func:setClassAlt7
    },
    {
      id: '12_0_8',
      src: twelve_8,
      className: classAlt8,
      func:setClassAlt8
    },
    {
      id: '12_0_9',
      src: twelve_9,
      className: classAlt9,
      func:setClassAlt9
    },
    {
      id: '12_0_10',
      src: twelve_10,
      className: classAlt10,
      func:setClassAlt10
    },
    {
      id: '12_0_11',
      src: twelve_11,
      className: classAlt11,
      func:setClassAlt11
    },
    {
      id: '12_0_12',
      src: twelve_12,
      className: classAlt12,
      func:setClassAlt12
    },
    {
      id: '12_0_13',
      src: twelve_13,
      className: classAlt13,
      func:setClassAlt13
    },
    {
      id: '12_0_14',
      src: twelve_14,
      className: classAlt14,
      func:setClassAlt14
    },
    {
      id: '12_0_15',
      src: twelve_15,
      className: classAlt15,
      func:setClassAlt15
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, TWELVE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterTwelve_grid_container">
      <div className="grid_item1">
        <img className={TWELVE_RECK[0].className} id={TWELVE_RECK[0].id} onClick={saveOrRemove} src={TWELVE_RECK[0].src} alt='img' />
      </div>
      <div className="grid_item2">
        <img className={TWELVE_RECK[1].className} id={TWELVE_RECK[1].id} onClick={saveOrRemove} src={TWELVE_RECK[1].src} alt='img' />
      </div>
      <div className="grid_item3">
        <img className={TWELVE_RECK[2].className} id={TWELVE_RECK[2].id} onClick={saveOrRemove} src={TWELVE_RECK[2].src} alt='img' />
      </div>
      <div className="grid_item4">
        <img className={TWELVE_RECK[3].className} id={TWELVE_RECK[3].id} onClick={saveOrRemove} src={TWELVE_RECK[3].src} alt='img' />
      </div>
      <div className="grid_item5">
        <img className={TWELVE_RECK[4].className} id={TWELVE_RECK[4].id} onClick={saveOrRemove} src={TWELVE_RECK[4].src} alt='img' />
      </div>
      <div className="grid_item6">
        <img className={TWELVE_RECK[5].className} id={TWELVE_RECK[5].id} onClick={saveOrRemove} src={TWELVE_RECK[5].src} alt='img' />
      </div>
      <div className="grid_item7">
        <img className={TWELVE_RECK[6].className} id={TWELVE_RECK[6].id} onClick={saveOrRemove} src={TWELVE_RECK[6].src} alt='img' />
      </div>
      <div className="grid_item8">
        <img className={TWELVE_RECK[7].className} id={TWELVE_RECK[7].id} onClick={saveOrRemove} src={TWELVE_RECK[7].src} alt='img' />
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        
      </div>
      <div className="grid_item11">
        
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
      </div>
      <div className="grid_item14">
        <img className={TWELVE_RECK[8].className} id={TWELVE_RECK[8].id} onClick={saveOrRemove} src={TWELVE_RECK[8].src} alt='img' />
      </div>
      <div className="grid_item15">
        <img className={TWELVE_RECK[9].className} id={TWELVE_RECK[9].id} onClick={saveOrRemove} src={TWELVE_RECK[9].src} alt='img' />
      </div>
      <div className="grid_item16">
        <img className={TWELVE_RECK[10].className} id={TWELVE_RECK[10].id} onClick={saveOrRemove} src={TWELVE_RECK[10].src} alt='img' />
      </div>
      <div className="grid_item17">
        <img className={TWELVE_RECK[11].className} id={TWELVE_RECK[11].id} onClick={saveOrRemove} src={TWELVE_RECK[11].src} alt='img' />
      </div>
      <div className="grid_item18">
        <img className={TWELVE_RECK[12].className} id={TWELVE_RECK[12].id} onClick={saveOrRemove} src={TWELVE_RECK[12].src} alt='img' />
      </div>
      <div className="grid_item19">
        <img className={TWELVE_RECK[13].className} id={TWELVE_RECK[13].id} onClick={saveOrRemove} src={TWELVE_RECK[13].src} alt='img' />
      </div>
      <div className="grid_item20">
        <img className={TWELVE_RECK[14].className} id={TWELVE_RECK[14].id} onClick={saveOrRemove} src={TWELVE_RECK[14].src} alt='img' />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterTwelve);