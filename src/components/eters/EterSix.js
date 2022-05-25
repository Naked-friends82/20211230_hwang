import React, { useEffect, useState } from 'react';
import six_1 from '../../asset/eter/six/six_1.jpg';
import six_2 from '../../asset/eter/six/six_2.jpg';
import six_3 from '../../asset/eter/six/six_3.jpg';
import six_4 from '../../asset/eter/six/six_4.jpg';
import six_5 from '../../asset/eter/six/six_5.jpg';
import six_6 from '../../asset/eter/six/six_6.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterSix = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');
  const [classAlt3,setClassAlt3] = useState('dragablImg');
  const [classAlt4,setClassAlt4] = useState('dragablImg');
  const [classAlt5,setClassAlt5] = useState('dragablImg');
  const [classAlt6,setClassAlt6] = useState('dragablImg');

  const SIX_RECK = [
    {
      id: '6_0_1',
      src: six_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '6_0_2',
      src: six_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '6_0_3',
      src: six_3,
      className: classAlt3,
      func:setClassAlt3,
    },
    {
      id: '6_0_4',
      src: six_4,
      className: classAlt4,
      func:setClassAlt4,
    },
    {
      id: '6_0_5',
      src: six_5,
      className: classAlt5,
      func:setClassAlt5,
    },
    {
      id: '6_0_6',
      src: six_6,
      className: classAlt6,
      func: setClassAlt6,
    },
  ];

  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, SIX_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterSix_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        <img className={SIX_RECK[0].className} id={SIX_RECK[0].id} onClick={saveOrRemove} src={SIX_RECK[0].src} alt="img" />
      </div>
      <div className="grid_item3">
        
      </div>
      <div className="grid_item4">
        
      </div>
      <div className="grid_item5">
        
      </div>
      <div className="grid_item6">
        <img className={SIX_RECK[1].className} id={SIX_RECK[1].id} onClick={saveOrRemove} src={SIX_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        <img className={SIX_RECK[2].className} id={SIX_RECK[2].id} onClick={saveOrRemove} src={SIX_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item9">
        <img className={SIX_RECK[3].className} id={SIX_RECK[3].id} onClick={saveOrRemove} src={SIX_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item10">
        <img className={SIX_RECK[4].className} id={SIX_RECK[4].id} onClick={saveOrRemove} src={SIX_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item11">
        
      </div>
      <div className="grid_item12">
        <img className={SIX_RECK[5].className} id={SIX_RECK[5].id} onClick={saveOrRemove} src={SIX_RECK[5].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterSix);