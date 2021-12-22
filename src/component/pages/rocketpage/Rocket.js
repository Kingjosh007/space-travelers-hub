import React from 'react';
import PropTypes from 'prop-types';
import RocketDetails from './RocketDetails';
import Rocketimage from './Rocketimage';

const Rocket = ({
  image, description, name, buttonHandler, reserved,
}) => (
  <div className="rocket-card d-flex">
    <Rocketimage image={image} name={name} />
    <RocketDetails
      name={name}
      description={description}
      buttonHandler={buttonHandler}
      reserved={reserved}
    />
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
