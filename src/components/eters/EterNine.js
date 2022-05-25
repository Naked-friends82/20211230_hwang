import React, { useEffect, useState } from 'react';
import nine_1 from '../../asset/eter/nine/nine_1.jpg';
import nine_2 from '../../asset/eter/nine/nine_2.jpg';
import nine_3 from '../../asset/eter/nine/nine_3.jpg';
import nine_4 from '../../asset/eter/nine/nine_4.jpg';
import nine_5 from '../../asset/eter/nine/nine_5.jpg';
import nine_6 from '../../asset/eter/nine/nine_6.jpg';
import nine_7 from '../../asset/eter/nine/nine_7.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterNine = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');
  const [classAlt3,setClassAlt3] = useState('dragablImg');
  const [classAlt4,setClassAlt4] = useState('dragablImg');
  const [classAlt5,setClassAlt5] = useState('dragablImg');
  const [classAlt6,setClassAlt6] = useState('dragablImg');
  const [classAlt7,setClassAlt7] = useState('dragablImg');

  const NINE_RECK = [
    {
      id: '9_0_1',
      src: nine_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '9_0_2',
      src: nine_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '9_0_3',
      src: nine_3,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: '9_0_4',
      src: nine_4,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: '9_0_5',
      src: nine_5,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: '9_0_6',
      src: nine_6,
      className: classAlt6,
      func:setClassAlt6
    },
    {
      id: '9_0_7',
      src: nine_7,
      className: classAlt7,
      func:setClassAlt7
    },
  ];
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, NINE_RECK)
  },[savedReck_rdx]);


  return(
    <div className="eterNine_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        <img className={NINE_RECK[0].className} id={NINE_RECK[0].id} onClick={saveOrRemove} src={NINE_RECK[0].src} alt="img" />
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
        <img className={NINE_RECK[1].className} id={NINE_RECK[1].id} onClick={saveOrRemove} src={NINE_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item8">
        
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        <img className={NINE_RECK[2].className} id={NINE_RECK[2].id} onClick={saveOrRemove} src={NINE_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item11">
        <img className={NINE_RECK[3].className} id={NINE_RECK[3].id} onClick={saveOrRemove} src={NINE_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
        <img className={NINE_RECK[4].className} id={NINE_RECK[4].id} onClick={saveOrRemove} src={NINE_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item14">
        
      </div>
      <div className="grid_item15">
        <img className={NINE_RECK[5].className} id={NINE_RECK[5].id} onClick={saveOrRemove} src={NINE_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item16">
        <img className={NINE_RECK[6].className} id={NINE_RECK[6].id} onClick={saveOrRemove} src={NINE_RECK[6].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterNine);