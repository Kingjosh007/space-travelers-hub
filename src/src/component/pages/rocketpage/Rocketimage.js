import React from 'react';
import PropTypes from 'prop-types';

const Rocketimage = ({ image, name }) => (
  <div className="rocket-image p-relative">
    <img className="rocket-img" alt={name} src={image} />
  </div>
);

Rocketimage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Rocketimage;
