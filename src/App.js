import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const App = ({data}) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route  path='' element={<Profile postData={data.postData} />} />
          <Route  path='/profile' element={<Profile postData={data.postData} />} />
          <Route  path='/dialogs' element={<Dialogs dialogs={data.dialogs} messages={data.messages} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
