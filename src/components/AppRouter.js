import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Works from '../routes/Works.js';
import Omma from '../routes/Omma.js';
import Penet from '../routes/Penet.js';
import Eternal from '../routes/Eternal.js';
import EternalTemp from '../routes/Eter.js';
import Group from '../routes/Group.js';
import Exhibi from '../routes/Exhibi.js';
import combineData from '../function/CombineData.js';


const AppRouter = () =>  {
  //EternalTemp 리렌더링 시 새롭게 셔플되는 것 때문에 여기에 위치;;
  const {shuffledData, TOTAL_REF_DATA} = combineData();

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Works />} />
        <Route exact path='/muhmdapinammo' element={<Omma />} />
        <Route exact path='/penetrating_stone' element={<Penet />} />
        <Route exact path='/eternal_classics' element={<Eternal />} />
        <Route exact path='/eternal_classics/make' element={<EternalTemp shuffledData={shuffledData} TOTAL_REF_DATA={TOTAL_REF_DATA}/>} />
        <Route exact path='/group_exhibitions' element={<Group />} />
        <Route exact path='/exhibition' element={<Exhibi />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

