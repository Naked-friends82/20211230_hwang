import React, { useEffect, useState } from 'react';
import four_1 from '../../asset/eter/four/four_1.jpg';
import four_2 from '../../asset/eter/four/four_2.jpg';
import four_3 from '../../asset/eter/four/four_3.jpg';
import four_4 from '../../asset/eter/four/four_4.jpg';
import four_5 from '../../asset/eter/four/four_5.jpg';
import four_6 from '../../asset/eter/four/four_6.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterFour = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');
  const [classAlt3,setClassAlt3] = useState('dragablImg');
  const [classAlt4,setClassAlt4] = useState('dragablImg');
  const [classAlt5,setClassAlt5] = useState('dragablImg');
  const [classAlt6,setClassAlt6] = useState('dragablImg');

  const FOUR_RECK = [
    {
      id: '4_0_1',
      src: four_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '4_0_2',
      src: four_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '4_0_3',
      src: four_3,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: '4_0_4',
      src: four_4,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: '4_0_5',
      src: four_5,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: '4_0_6',
      src: four_6,
      className: classAlt6,
      func:setClassAlt6
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, FOUR_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterFour_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        
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
        
      </div>
      <div className="grid_item8">
        
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
        <img className={FOUR_RECK[0].className} id={FOUR_RECK[0].id} onClick={saveOrRemove} src={FOUR_RECK[0].src} alt='img' />
      </div>
      <div className="grid_item14">
        <img className={FOUR_RECK[1].className} id={FOUR_RECK[1].id} onClick={saveOrRemove} src={FOUR_RECK[1].src} alt='img' />
      </div>
      <div className="grid_item15">
        <img className={FOUR_RECK[2].className} id={FOUR_RECK[2].id} onClick={saveOrRemove} src={FOUR_RECK[2].src} alt='img' />
      </div>
      <div className="grid_item16">
        <img className={FOUR_RECK[3].className} id={FOUR_RECK[3].id} onClick={saveOrRemove} src={FOUR_RECK[3].src} alt='img' />
      </div>
      <div className="grid_item17">
        <img className={FOUR_RECK[4].className} id={FOUR_RECK[4].id} onClick={saveOrRemove} src={FOUR_RECK[4].src} alt='img' />
      </div>
      <div className="grid_item18">
        <img className={FOUR_RECK[5].className} id={FOUR_RECK[5].id} onClick={saveOrRemove} src={FOUR_RECK[5].src} alt='img' />
      </div>
      <div className="grid_item19">
        
      </div>
      <div className="grid_item20">
        
      </div>
      <div className="grid_item21">
      
      </div>
      <div className="grid_item22">
      
      </div>
      <div className="grid_item23">
      
      </div>
      <div className="grid_item24">
      
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterFour);