import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import MyProfile from './pages/MyProfile';
import RocketPage from './pages/rocketpage/RocketPage';
import MissionsPage from './pages/missionpage/missionPage';
import DragonPage from './pages/DragonPage';
import NotMatch from './pages/NotMatch';
import { getRockets } from '../redux/rocket/rocket';

const SpaceContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Myprofile" element={<MyProfile />} />
        <Route path="/" element={<RocketPage />} exact />
        <Route path="/Mission" element={<MissionsPage />} />
        <Route path="/Dragon" element={<DragonPage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
};

export default SpaceContainer;
