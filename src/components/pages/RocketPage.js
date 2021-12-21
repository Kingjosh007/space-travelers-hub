import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rocket/rocket';
import { Rocket } from '../Rocket';

const RocketPage = (props) => {
  const { rockets } = props;

  const dispatch = useDispatch();
  const reserveRocket = (id) => {
    dispatch(bookRocket(id));
  };

  const cancelRocketBooking = (id) => {
    dispatch(cancelRocketBooking(id));
  };

  return (
    <div>
      <h3>RocketPage</h3>
      <ul className="rocketsContainer">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            handleBookRocket={reserveRocket}
            handleUnbookRocket={cancelRocketBooking}
          />
        ))}
      </ul>
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
