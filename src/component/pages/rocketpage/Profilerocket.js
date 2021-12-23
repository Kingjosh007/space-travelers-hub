import React from 'react';
import { useSelector } from 'react-redux';

const Profilerocket = () => {
  const allRockets = useSelector((state) => state.rocket);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved === true);
  const rocketsEmpty = reservedRockets.length <= 0;
  return (
    <div className="profile-rocket f-col">
      <h1 className="rocket-profile-header">My Rockets</h1>
      <article className="profile-rocket-cont">
        { rocketsEmpty
        && <p>NO ROCKETS RESERVED</p>}
        {reservedRockets.map((rocket) => <p className="rocket-profile-name" key={rocket.id}>{rocket.rocketName}</p>)}
      </article>
    </div>
  );
};

export default Profilerocket;
