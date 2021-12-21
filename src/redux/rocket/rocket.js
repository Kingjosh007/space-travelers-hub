import { rocketsEndpoint, getData } from '../../utils/apiRelated';

const GET_ALL_ROCKETS = 'space-travelers-hub/rockets/GET_ALL_ROCKETS';
const BOOK_ROCKET = 'space-travelers-hub/rockets/BOOK_ROCKET';
const CANCEL_ROCKET_BOOKING = 'space-travelers-hub/rockets/CANCEL_ROCKET_BOOKING';

export const getRockets = () => async (dispatch) => {
  const rocketsArr = await getData(rocketsEndpoint);
  dispatch({ type: GET_ALL_ROCKETS, payload: rocketsArr });
};

export const bookRocket = (payload) => async (dispatch) => {
  dispatch({ type: BOOK_ROCKET, payload });
};

export const cancelRocketBooking = (payload) => async (dispatch) => {
  dispatch({ type: CANCEL_ROCKET_BOOKING, payload });
};
