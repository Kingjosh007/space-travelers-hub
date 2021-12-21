import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import store from '../redux/configureStore';
import MyProfile from './pages/MyProfile';
import RocketPage from './pages/RocketPage';
import MissionPage from './pages/MissionPage';
import NotMatch from './pages/NotMatch';

const SpaceContainer = () => (
  <Provider store={store}>
    <div>
      <Navbar />
      <Routes>
        <Route path="/Myprofile" element={<MyProfile />} />
        <Route path="/" element={<RocketPage />} exact />
        <Route path="/Mission" element={<MissionPage />} />
        <Route path="/Dragon" element={<DragonPage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  </Provider>
);

export default SpaceContainer;
