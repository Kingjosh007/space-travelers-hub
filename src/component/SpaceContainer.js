import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { fetchDragon } from '../redux/dragon/dragon';
import MyProfile from './pages/MyProfile';
import RocketPage from './pages/rocketpage/RocketPage';
import MissionsPage from './pages/missionpage/missionPage';
import DragonPage from './pages/DragonPage/DragonPage';
import NotMatch from './pages/NotMatch';
import { getRockets } from '../redux/rocket/rocket';

const SpaceContainer = () => {
  const dispatch = useDispatch();
  const dragonDetail = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(fetchDragon());
    dispatch(getRockets());
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Myprofile" element={<MyProfile />} />
        <Route path="/" element={<RocketPage />} exact />
        <Route path="/Mission" element={<MissionsPage />} />
        <Route path="/Dragon" element={<DragonPage dragonDetail={dragonDetail} />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
};

export default SpaceContainer;
