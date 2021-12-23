import React from 'react';
import Profilerocket from './rocketpage/Profilerocket';
import ProfileDragon from './DragonPage/ProfileDragon';
import MissionProfile from './missionpage/mission_myprofile';

const MyProfile = () => (
  <div className="myProfile">
    <Profilerocket />
    <ProfileDragon />
    <MissionProfile />
  </div>
);
export default MyProfile;
