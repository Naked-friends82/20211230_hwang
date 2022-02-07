import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Works from '../routes/Works.js';
import Omma from '../routes/Omma.js';
import Penet from '../routes/Penet.js';
import Eternal2 from '../routes/Eternal2.js';
import Group from '../routes/Group.js';
import Exhibi from '../routes/Exhibi.js';


const AppRouter = () =>  {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Works />} />
        <Route exact path='/muhmdapinammo' element={<Omma />} />
        <Route exact path='/penetrating_stone' element={<Penet />} />
        <Route exact path='/eternal_classics' element={<Eternal2 />} />
        <Route exact path='/group_exhibitions' element={<Group />} />
        <Route exact path='/exhibition' element={<Exhibi />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

