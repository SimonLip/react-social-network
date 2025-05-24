import './App.css';
import React, { useEffect } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { getAuthUserData } from './redux/authReducer';
import { connect } from 'react-redux';
import Loader from './components/Loader/Loader';

const App = ({ getAuthUserData, initialized, state }) => {
  useEffect(() => {
    getAuthUserData();
  }, [getAuthUserData]);

  if (!initialized) {
    return <Loader />;
  }

  return (
    
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar sidebar={state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<ProfileContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  initialized: state.auth.initialized
});

export default connect(mapStateToProps, { getAuthUserData })(App);
