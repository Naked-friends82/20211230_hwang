import React, { useEffect, useState } from 'react';
import three_1 from '../../asset/eter/three/three_1.jpg';
import three_2 from '../../asset/eter/three/three_2.jpg';
import three_3 from '../../asset/eter/three/three_3.jpg';
import three_4 from '../../asset/eter/three/three_4.jpg';
import three_5 from '../../asset/eter/three/three_5.jpg';
import three_6 from '../../asset/eter/three/three_6.jpg';
import three_7 from '../../asset/eter/three/three_7.jpg';
import three_8 from '../../asset/eter/three/three_8.jpg';
import three_9 from '../../asset/eter/three/three_9.jpg';
import three_10 from '../../asset/eter/three/three_10.jpg';
import three_11 from '../../asset/eter/three/three_11.jpg';
import three_12 from '../../asset/eter/three/three_12.jpg';
import three_13 from '../../asset/eter/three/three_13.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';


const EterThree = ({saveOrRemove,savedReck_rdx}) => {
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


  const THREE_RECK = [
    {
      id: '3_0_1',
      src: three_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '3_0_2',
      src: three_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '3_0_3',
      src: three_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '3_0_4',
      src: three_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '3_0_5',
      src: three_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '3_0_6',
      src: three_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '3_0_7',
      src: three_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '3_0_8',
      src: three_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '3_0_9',
      src: three_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '3_0_10',
      src: three_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '3_0_11',
      src: three_11,
      className: classAlt11,
      func: setClassAlt11,
    },
    {
      id: '3_0_12',
      src: three_12,
      className: classAlt12,
      func: setClassAlt12,
    },
    {
      id: '3_0_13',
      src: three_13,
      className: classAlt13,
      func: setClassAlt13,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, THREE_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterThree_grid_container">
      {/* <div className="grid_item1">
        
      </div>
      <div className="grid_item2">

      </div>
      <div className="grid_item3">

      </div>
      <div className="grid_item4">
      
      </div>
      <div className="grid_item5">
        <img className="dragablImg" onClick={saveReck} src={three_1} alt="img" />
      </div> */}
      <div className="grid_item6">
        <img className={classAlt2} id={THREE_RECK[1].id} onClick={saveOrRemove} src={THREE_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        <img className={classAlt3} id={THREE_RECK[2].id} onClick={saveOrRemove} src={THREE_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        <img className={classAlt4} id={THREE_RECK[3].id} onClick={saveOrRemove} src={THREE_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item11">
        
      </div>
      <div className="grid_item12">
        <img className={classAlt5} id={THREE_RECK[4].id} onClick={saveOrRemove} src={THREE_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item13">
        <img className={classAlt6} id={THREE_RECK[5].id} onClick={saveOrRemove} src={THREE_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item14">
        <img className={classAlt7} id={THREE_RECK[6].id} onClick={saveOrRemove} src={THREE_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item15">
        
      </div>
      <div className="grid_item16">
        <img className={classAlt8} id={THREE_RECK[7].id} onClick={saveOrRemove} src={THREE_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item17">
        
      </div>
      <div className="grid_item18">
        <img className={classAlt9} id={THREE_RECK[8].id} onClick={saveOrRemove} src={THREE_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item19">
        
      </div>
      <div className="grid_item20">
        <img className={classAlt10} id={THREE_RECK[9].id} onClick={saveOrRemove} src={THREE_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item21">
        <img className={classAlt11} id={THREE_RECK[10].id} onClick={saveOrRemove} src={THREE_RECK[10].src} alt="img" />
      </div>
      <div className="grid_item22">
        
      </div>
      <div className="grid_item23">
        <img className={classAlt12} id={THREE_RECK[11].id} onClick={saveOrRemove} src={THREE_RECK[11].src} alt="img" />
      </div>
      <div className="grid_item24">
        
      </div>
      <div className="grid_item25">
        <img className={classAlt13} id={THREE_RECK[12].id} onClick={saveOrRemove} src={THREE_RECK[12].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterThree);