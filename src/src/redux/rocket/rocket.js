const FETCH_ROCKETS = 'store/rocket/FETCH_ROCKET';
const RESERVE_ROCKETS = 'store/rocket/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'store/rocket/CANCEL_RESERVATION';
const initialState = [];

const fetchRockets = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const reserveRockets = (id) => ({
  type: RESERVE_ROCKETS,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const getRockets = () => async (dispatch) => {
  const rockets = await fetch('https://api.spacexdata.com/v3/rockets');
  const myRockets = await rockets.json();
  dispatch(fetchRockets(myRockets));
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload.map((rockets) => (
        {
          id: rockets.id,
          reserved: false,
          rocketName: rockets.rocket_name,
          image: rockets.flickr_images[0],
          description: rockets.description,
        }
      ));

    case RESERVE_ROCKETS:
      return state.map((rockets) => {
        if (rockets.id === action.payload) {
          return {
            ...rockets,
            reserved: true,
          };
        }
        return rockets;
      });

    case CANCEL_RESERVATION:
      return state.map((rockets) => {
        if (rockets.id === action.payload) {
          return {
            ...rockets,
            reserved: false,
          };
        }
        return rockets;
      });

    default:
      return state;
  }
};

export default rocketReducer;
