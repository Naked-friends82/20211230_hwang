import React, { useEffect, useState } from 'react';
import five_1 from '../../asset/eter/five/five_1.jpg';
import five_2 from '../../asset/eter/five/five_2.jpg';
import five_3 from '../../asset/eter/five/five_3.jpg';
import five_4 from '../../asset/eter/five/five_4.jpg';
import five_5 from '../../asset/eter/five/five_5.jpg';
import five_6 from '../../asset/eter/five/five_6.jpg';
import five_7 from '../../asset/eter/five/five_7.jpg';
import five_8 from '../../asset/eter/five/five_8.jpg';
import five_9 from '../../asset/eter/five/five_9.jpg';
import five_10 from '../../asset/eter/five/five_10.jpg';
import five_11 from '../../asset/eter/five/five_11.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';


const EterFive = ({saveOrRemove,savedReck_rdx}) => {
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

  const FIVE_RECK = [
    {
      id: '5_0_1',
      src: five_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '5_0_2',
      src: five_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '5_0_3',
      src: five_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '5_0_4',
      src: five_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '5_0_5',
      src: five_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '5_0_6',
      src: five_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '5_0_7',
      src: five_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '5_0_8',
      src: five_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '5_0_9',
      src: five_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '5_0_10',
      src: five_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '5_0_11',
      src: five_11,
      className: classAlt11,
      func: setClassAlt11,
    },
  ];
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, FIVE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterFive_grid_container">
      <div className="grid_item1">
        <img className={FIVE_RECK[0].className} id={FIVE_RECK[0].id} onClick={saveOrRemove} src={FIVE_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item2">
        
      </div>
      <div className="grid_item3">
        <img className={FIVE_RECK[1].className} id={FIVE_RECK[1].id} onClick={saveOrRemove} src={FIVE_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item4">
        
      </div>
      <div className="grid_item5">
        <img className={FIVE_RECK[2].className} id={FIVE_RECK[2].id} onClick={saveOrRemove} src={FIVE_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item6">
        <img className={FIVE_RECK[3].className} id={FIVE_RECK[3].id} onClick={saveOrRemove} src={FIVE_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item7">
        <img className={FIVE_RECK[4].className} id={FIVE_RECK[4].id} onClick={saveOrRemove} src={FIVE_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item8">
        <img className={FIVE_RECK[5].className} id={FIVE_RECK[5].id} onClick={saveOrRemove} src={FIVE_RECK[5].src} alt="img" />
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
        <img className={FIVE_RECK[6].className} id={FIVE_RECK[6].id} onClick={saveOrRemove} src={FIVE_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item14">

      </div>
      <div className="grid_item15">
        <img className={FIVE_RECK[7].className} id={FIVE_RECK[7].id} onClick={saveOrRemove} src={FIVE_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item16">
        <img className={FIVE_RECK[8].className} id={FIVE_RECK[8].id} onClick={saveOrRemove} src={FIVE_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item17">

      </div>
      <div className="grid_item18">
        <img className={FIVE_RECK[9].className} id={FIVE_RECK[9].id} onClick={saveOrRemove} src={FIVE_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item19">
        
      </div>
      <div className="grid_item20">
        <img className={FIVE_RECK[10].className} id={FIVE_RECK[10].id} onClick={saveOrRemove} src={FIVE_RECK[10].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterFive);