import React, { useEffect, useState } from 'react';
import seven_1 from '../../asset/eter/seven/seven_1.jpg';
import seven_2 from '../../asset/eter/seven/seven_2.jpg';
import seven_3 from '../../asset/eter/seven/seven_3.jpg';
import seven_4 from '../../asset/eter/seven/seven_4.jpg';
import seven_5 from '../../asset/eter/seven/seven_5.jpg';
import seven_6 from '../../asset/eter/seven/seven_6.jpg';
import seven_7 from '../../asset/eter/seven/seven_7.jpg';
import seven_8 from '../../asset/eter/seven/seven_8.jpg';
import seven_9 from '../../asset/eter/seven/seven_9.jpg';
import seven_10 from '../../asset/eter/seven/seven_10.jpg';
import seven_11 from '../../asset/eter/seven/seven_11.jpg';
import seven_12 from '../../asset/eter/seven/seven_12.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';


const EterSeven = ({saveOrRemove,savedReck_rdx}) => {
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

  const SEVEN_RECK = [
    {
      id: '7_0_1',
      src: seven_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '7_0_2',
      src: seven_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '7_0_3',
      src: seven_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '7_0_4',
      src: seven_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '7_0_5',
      src: seven_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '7_0_6',
      src: seven_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '7_0_7',
      src: seven_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '7_0_8',
      src: seven_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '7_0_9',
      src: seven_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '7_0_10',
      src: seven_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '7_0_11',
      src: seven_11,
      className: classAlt11,
      func: setClassAlt11,
    },
    {
      id: '7_0_12',
      src: seven_12,
      className: classAlt12,
      func: setClassAlt12,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, SEVEN_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterSeven_grid_container">
      <div className="grid_item1">
        <img className={SEVEN_RECK[0].className} id={SEVEN_RECK[0].id} onClick={saveOrRemove} src={SEVEN_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item2">
        <img className={SEVEN_RECK[1].className} id={SEVEN_RECK[1].id} onClick={saveOrRemove} src={SEVEN_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item3">
        <img className={SEVEN_RECK[2].className} id={SEVEN_RECK[2].id} onClick={saveOrRemove} src={SEVEN_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item4">
        <img className={SEVEN_RECK[3].className} id={SEVEN_RECK[3].id} onClick={saveOrRemove} src={SEVEN_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item5">
        <img className={SEVEN_RECK[4].className} id={SEVEN_RECK[4].id} onClick={saveOrRemove} src={SEVEN_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item6">
        
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        <img className={SEVEN_RECK[5].className} id={SEVEN_RECK[5].id} onClick={saveOrRemove} src={SEVEN_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item9">
        <img className={SEVEN_RECK[6].className} id={SEVEN_RECK[6].id} onClick={saveOrRemove} src={SEVEN_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item10">
        
      </div>
      <div className="grid_item11">
        
      </div>
      <div className="grid_item12">
        <img className={SEVEN_RECK[7].className} id={SEVEN_RECK[7].id} onClick={saveOrRemove} src={SEVEN_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item13">
        <img className={SEVEN_RECK[8].className} id={SEVEN_RECK[8].id} onClick={saveOrRemove} src={SEVEN_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item14">
        <img className={SEVEN_RECK[9].className} id={SEVEN_RECK[9].id} onClick={saveOrRemove} src={SEVEN_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item15">
        <img className={SEVEN_RECK[10].className} id={SEVEN_RECK[10].id} onClick={saveOrRemove} src={SEVEN_RECK[10].src} alt="img" />
      </div>
      <div className="grid_item16">
        <img className={SEVEN_RECK[11].className} id={SEVEN_RECK[11].id} onClick={saveOrRemove} src={SEVEN_RECK[11].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterSeven);