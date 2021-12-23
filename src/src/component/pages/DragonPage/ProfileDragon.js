import React from 'react';
import { useSelector } from 'react-redux';

const Profilerocket = () => {
  const dragonDetail = useSelector((state) => state.dragonReducer);
  const reservedDragon = dragonDetail.filter((dragon) => dragon.reserved === true);
  const dragonEmpty = reservedDragon.length <= 0;
  return (
    <div className="profile-rocket f-col">
      <h1 className="rocket-profile-header">My Dragon</h1>
      <article className="profile-rocket-cont">
        { dragonEmpty
          && <p>NO DRAGONS RESERVED</p>}
        {reservedDragon.map((dragon) => <p className="rocket-profile-name" key={dragon.id}>{dragon.name}</p>)}
      </article>
    </div>
  );
};

export default Profilerocket;
