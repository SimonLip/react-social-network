import './App.css';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar sidebar={props.state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={
            <ProfileContainer store={props.store} />
          } />
          <Route path='/profile' element={
            <ProfileContainer store={props.store} />
          } />
          <Route path='/profile/:userId?' element={
            <ProfileContainer store={props.store} />
          } />
          <Route path='/dialogs' element={
            <DialogsContainer store={props.store} />
          } />
          <Route path='/users' element={
            <UsersContainer store={props.store} />
          } />
          <Route path='/login' element={
            <Login store={props.store} />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
