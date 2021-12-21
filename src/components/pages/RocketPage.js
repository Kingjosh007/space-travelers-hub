import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const RocketPage = (props) => {

  const { rockets } = props; 
  return (
  <div>
    <h3>RocketPage</h3>

  </div>
  );
};

RocketPage.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
  })).isRequired,
};

export default RocketPage;
