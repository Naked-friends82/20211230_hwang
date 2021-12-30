import React from 'react';
import ten_1 from '../../asset/eter/ten/ten_1.jpg';
import ten_2 from '../../asset/eter/ten/ten_2.jpg';
import ten_3 from '../../asset/eter/ten/ten_3.jpg';
import ten_4 from '../../asset/eter/ten/ten_4.jpg';
import ten_5 from '../../asset/eter/ten/ten_5.jpg';
import ten_6 from '../../asset/eter/ten/ten_6.jpg';
import ten_7 from '../../asset/eter/ten/ten_7.jpg';





const EterTen = ({saveReck}) => {

  return(
    <div className="eterTen_grid_container">
      <div className="grid_item1">
      
      </div>
      <div className="grid_item2">
        <img className="dragablImg" onClick={saveReck} src={ten_1} alt="img" />
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
        <img className="dragablImg" onClick={saveReck} src={ten_2} alt="img" />
      </div>
      <div className="grid_item8">
        
      </div>
      <div className="grid_item9">
        
      </div>
      <div className="grid_item10">
        <img className="dragablImg" onClick={saveReck} src={ten_3} alt="img" />
      </div>
      <div className="grid_item11">
        <img className="dragablImg" onClick={saveReck} src={ten_4} alt="img" />
      </div>
      <div className="grid_item12">
        
      </div>
      <div className="grid_item13">
        <img className="dragablImg" onClick={saveReck} src={ten_5} alt="img" />
      </div>
      <div className="grid_item14">
        
      </div>
      <div className="grid_item15">
        <img className="dragablImg" onClick={saveReck} src={ten_6} alt="img" />
      </div>
      <div className="grid_item16">
        <img className="dragablImg" onClick={saveReck} src={ten_7} alt="img" />
      </div>
    </div>
  );
};

export default EterTen;