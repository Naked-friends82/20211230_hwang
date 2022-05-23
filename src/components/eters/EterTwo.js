import React, { useEffect, useState } from 'react';
import two_1 from '../../asset/eter/two/two_1.jpg';
import two_2 from '../../asset/eter/two/two_2.jpg';
import two_3 from '../../asset/eter/two/two_3.jpg';
import two_4 from '../../asset/eter/two/two_4.jpg';
import two_5 from '../../asset/eter/two/two_5.jpg';
import two_6 from '../../asset/eter/two/two_6.jpg';
import two_7 from '../../asset/eter/two/two_7.jpg';
import two_8 from '../../asset/eter/two/two_8.jpg';
import two_9 from '../../asset/eter/two/two_9.jpg';
import two_10 from '../../asset/eter/two/two_10.jpg';
import two_11 from '../../asset/eter/two/two_11.jpg';
import two_12 from '../../asset/eter/two/two_12.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';


const EterTwo = ({saveOrRemove,savedReck_rdx}) => {
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

  const TWO_RECK = [
    {
      id: '2_0_1',
      src: two_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '2_0_2',
      src: two_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '2_0_3',
      src: two_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '2_0_4',
      src: two_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '2_0_5',
      src: two_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '2_0_6',
      src: two_6,
      className: classAlt6,
      func: setClassAlt6,
    },
    {
      id: '2_0_7',
      src: two_7,
      className: classAlt7,
      func: setClassAlt7,
    },
    {
      id: '2_0_8',
      src: two_8,
      className: classAlt8,
      func: setClassAlt8,
    },
    {
      id: '2_0_9',
      src: two_9,
      className: classAlt9,
      func: setClassAlt9,
    },
    {
      id: '2_0_10',
      src: two_10,
      className: classAlt10,
      func: setClassAlt10,
    },
    {
      id: '2_0_11',
      src: two_11,
      className: classAlt11,
      func: setClassAlt11,
    },
    {
      id: '2_0_12',
      src: two_12,
      className: classAlt12,
      func: setClassAlt12,
    },
  ];
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, TWO_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterTwo_grid_container">
      <div className="grid_item1">
        <img className={classAlt1} id={TWO_RECK[0].id} onClick={saveOrRemove} src={TWO_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item2">

      </div>
      <div className="grid_item3">
        <img className={classAlt2} id={TWO_RECK[1].id} onClick={saveOrRemove} src={TWO_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item4">
      
      </div>
      <div className="grid_item5">
      <img className={classAlt3} id={TWO_RECK[2].id} onClick={saveOrRemove} src={TWO_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item6">
        <img className={classAlt4} id={TWO_RECK[3].id} onClick={saveOrRemove} src={TWO_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        <img className={classAlt5} id={TWO_RECK[4].id} onClick={saveOrRemove} src={TWO_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        <img className={classAlt6} id={TWO_RECK[5].id} onClick={saveOrRemove} src={TWO_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item11">
        
      </div>
      <div className="grid_item12">
        <img className={classAlt7} id={TWO_RECK[6].id} onClick={saveOrRemove} src={TWO_RECK[6].src} alt="img" />
      </div>
      <div className="grid_item13">
        <img className={classAlt8} id={TWO_RECK[7].id} onClick={saveOrRemove} src={TWO_RECK[7].src} alt="img" />
      </div>
      <div className="grid_item14">
        <img className={classAlt9} id={TWO_RECK[8].id} onClick={saveOrRemove} src={TWO_RECK[8].src} alt="img" />
      </div>
      <div className="grid_item15">
        
      </div>
      <div className="grid_item16">
        <img className={classAlt10} id={TWO_RECK[9].id} onClick={saveOrRemove} src={TWO_RECK[9].src} alt="img" />
      </div>
      <div className="grid_item17">
        
      </div>
      <div className="grid_item18">
        <img className={classAlt11} id={TWO_RECK[10].id} onClick={saveOrRemove} src={TWO_RECK[10].src} alt="img" />
      </div>
      <div className="grid_item19">
        
      </div>
      <div className="grid_item20">
        <img className={classAlt12} id={TWO_RECK[11].id} onClick={saveOrRemove} src={TWO_RECK[11].src} alt="img" />
      </div>
      {/* <div className="grid_item21">
        
      </div>
      <div className="grid_item22">
        
      </div>
      <div className="grid_item23">
        
      </div>
      <div className="grid_item24">
        
      </div>
      <div className="grid_item25">
        <img className="dragablImg" onClick={saveReck} src={two_13} alt="img" />
      </div> */}
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterTwo);