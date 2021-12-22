import React from 'react';
import PropTypes from 'prop-types';

const RocketDetails = ({
  name, description, buttonHandler, reserved,
}) => (
  <div className="rocket-details d-flex f-col">
    <h1 className="rocket-name">{name}</h1>
    <p className="description p-relative">
      {reserved && <span className="reserve-tag">reserved</span>}
      {description}
    </p>
    <button type="button" onClick={(id) => buttonHandler(id)} className={reserved ? 'reserve-btn cancel-btn' : 'reserve-btn'}>{reserved ? 'cancel reservation' : 'reserve rocket'}</button>
  </div>
);

RocketDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketDetails;
