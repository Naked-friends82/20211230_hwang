import React from 'react';
import six_1 from '../../asset/eter/six/six_1.jpg';
import six_2 from '../../asset/eter/six/six_2.jpg';
import six_3 from '../../asset/eter/six/six_3.jpg';
import six_4 from '../../asset/eter/six/six_4.jpg';
import six_5 from '../../asset/eter/six/six_5.jpg';
import six_6 from '../../asset/eter/six/six_6.jpg';





const EterSix = ({saveReck}) => {

  return(
    <div className="eterSix_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        <img className="dragablImg" onClick={saveReck} src={six_1} alt="img" />
      </div>
      <div className="grid_item3">
        
      </div>
      <div className="grid_item4">
        
      </div>
      <div className="grid_item5">
        
      </div>
      <div className="grid_item6">
        <img className="dragablImg" onClick={saveReck} src={six_2} alt="img" />
      </div>
      <div className="grid_item7">
        
      </div>
      <div className="grid_item8">
        <img className="dragablImg" onClick={saveReck} src={six_3} alt="img" />
      </div>
      <div className="grid_item9">
        <img className="dragablImg" onClick={saveReck} src={six_4} alt="img" />
      </div>
      <div className="grid_item10">
        <img className="dragablImg" onClick={saveReck} src={six_5} alt="img" />
      </div>
      <div className="grid_item11">
        
      </div>
      <div className="grid_item12">
        <img className="dragablImg" onClick={saveReck} src={six_6} alt="img" />
      </div>
    </div>
  );
};

export default EterSix;