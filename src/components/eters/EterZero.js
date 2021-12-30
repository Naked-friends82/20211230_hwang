import React from 'react';
import zero_1 from '../../asset/eter/zero/zero_1.jpg';
import zero_2 from '../../asset/eter/zero/zero_2.jpg';
import zero_3 from '../../asset/eter/zero/zero_3.jpg';






const EterZero = ({saveReck}) => {

  return(
    <div className="eterZero_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        
      </div>
      <div className="grid_item3">
        
      </div>
      <div className="grid_item4">
        <img className="dragablImg" onClick={saveReck} src={zero_1} alt="img" />
      </div>
      <div className="grid_item5">
        <img className="dragablImg" onClick={saveReck} src={zero_2} alt="img" />
      </div>
      <div className="grid_item6">
        <img className="dragablImg" onClick={saveReck} src={zero_3} alt="img" />
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
    </div>
  );
};

export default EterZero;