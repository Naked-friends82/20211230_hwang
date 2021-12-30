import React from 'react';
import nine_1 from '../../asset/eter/nine/nine_1.jpg';
import nine_2 from '../../asset/eter/nine/nine_2.jpg';
import nine_3 from '../../asset/eter/nine/nine_3.jpg';
import nine_4 from '../../asset/eter/nine/nine_4.jpg';
import nine_5 from '../../asset/eter/nine/nine_5.jpg';
import nine_6 from '../../asset/eter/nine/nine_6.jpg';
import nine_7 from '../../asset/eter/nine/nine_7.jpg';





const EterNine = ({saveReck}) => {

  return(
    <div className="eterNine_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        <img className="dragablImg" onClick={saveReck} src={nine_1} alt="img" />
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
        <img className="dragablImg" onClick={saveReck} src={nine_2} alt="img" />
      </div>
      <div className="grid_item8">
        
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        <img className="dragablImg" onClick={saveReck} src={nine_3} alt="img" />
      </div>
      <div className="grid_item11">
        <img className="dragablImg" onClick={saveReck} src={nine_4} alt="img" />
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
        <img className="dragablImg" onClick={saveReck} src={nine_5} alt="img" />
      </div>
      <div className="grid_item14">
        
      </div>
      <div className="grid_item15">
        <img className="dragablImg" onClick={saveReck} src={nine_6} alt="img" />
      </div>
      <div className="grid_item16">
        <img className="dragablImg" onClick={saveReck} src={nine_7} alt="img" />
      </div>
    </div>
  );
};

export default EterNine;