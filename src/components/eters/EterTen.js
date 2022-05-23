import React, { useEffect, useState } from 'react';
import ten_1 from '../../asset/eter/ten/ten_1.jpg';
import ten_2 from '../../asset/eter/ten/ten_2.jpg';
import ten_3 from '../../asset/eter/ten/ten_3.jpg';
import ten_4 from '../../asset/eter/ten/ten_4.jpg';
import ten_5 from '../../asset/eter/ten/ten_5.jpg';
import ten_6 from '../../asset/eter/ten/ten_6.jpg';
import ten_7 from '../../asset/eter/ten/ten_7.jpg';
//redux
import { connect } from 'react-redux';

// 함수_리펙토링
import convertProps from '../../function/ConvertProps.js';



const EterTen = ({saveOrRemove,savedReck_rdx}) => {
  const [classAlt1,setClassAlt1] = useState('dragablImg');
  const [classAlt2,setClassAlt2] = useState('dragablImg');
  const [classAlt3,setClassAlt3] = useState('dragablImg');
  const [classAlt4,setClassAlt4] = useState('dragablImg');
  const [classAlt5,setClassAlt5] = useState('dragablImg');
  const [classAlt6,setClassAlt6] = useState('dragablImg');
  const [classAlt7,setClassAlt7] = useState('dragablImg');

  const TEN_RECK = [
    {
      id: '10_0_1',
      src: ten_1,
      className: classAlt1,
      func:setClassAlt1
    },
    {
      id: '10_0_2',
      src: ten_2,
      className: classAlt2,
      func:setClassAlt2
    },
    {
      id: '10_0_3',
      src: ten_3,
      className: classAlt3,
      func:setClassAlt3
    },
    {
      id: '10_0_4',
      src: ten_4,
      className: classAlt4,
      func:setClassAlt4
    },
    {
      id: '10_0_5',
      src: ten_5,
      className: classAlt5,
      func:setClassAlt5
    },
    {
      id: '10_0_6',
      src: ten_6,
      className: classAlt6,
      func:setClassAlt6
    },
    {
      id: '10_0_7',
      src: ten_7,
      className: classAlt7,
      func:setClassAlt7
    },
  ];
  //savedReck_rdx의 변화감지
  useEffect(() => {
    convertProps(savedReck_rdx, TEN_RECK)
  },[savedReck_rdx]);

  return(
    <div className="eterTen_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        <img className={TEN_RECK[0].className} id={TEN_RECK[0].id} onClick={saveOrRemove} src={TEN_RECK[0].src} alt="img" />
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
        <img className={TEN_RECK[1].className} id={TEN_RECK[1].id} onClick={saveOrRemove} src={TEN_RECK[1].src} alt="img" />
      </div>
      <div className="grid_item8">
        
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        <img className={TEN_RECK[2].className} id={TEN_RECK[2].id} onClick={saveOrRemove} src={TEN_RECK[2].src} alt="img" />
      </div>
      <div className="grid_item11">
        <img className={TEN_RECK[3].className} id={TEN_RECK[3].id} onClick={saveOrRemove} src={TEN_RECK[3].src} alt="img" />
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
        <img className={TEN_RECK[4].className} id={TEN_RECK[4].id} onClick={saveOrRemove} src={TEN_RECK[4].src} alt="img" />
      </div>
      <div className="grid_item14">
        
      </div>
      <div className="grid_item15">
        <img className={TEN_RECK[5].className} id={TEN_RECK[5].id} onClick={saveOrRemove} src={TEN_RECK[5].src} alt="img" />
      </div>
      <div className="grid_item16">
        <img className={TEN_RECK[6].className} id={TEN_RECK[6].id} onClick={saveOrRemove} src={TEN_RECK[6].src} alt="img" />
      </div>
    </div>
  );
};
const mapStateToProps = (state,ownProps) => {
  return {savedReck_rdx: state}
}

export default connect(mapStateToProps)(EterTen);