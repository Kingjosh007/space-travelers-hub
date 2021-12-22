import React from 'react';
import './missionStyles.css';

const MissionsPage = () => (
  <div className="mission__container">
    <table className="table">
      <thead>
        <tr className="row">
          <th className="column">Mission</th>
          <th className="column">Description</th>
          <th className="column">Status</th>
          <th className="column">{' '}</th>
        </tr>
      </thead>
    </table>
  </div>
);

export default MissionsPage;
