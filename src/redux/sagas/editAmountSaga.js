import axios from 'axios';
// import { put } from 'redux-saga/effects';

function* editAmountSaga(action) {
    try {
        yield axios.put(`/api/user/${action.payload}`)
    } catch (error) {
      console.log('Edit status request failed', error);
    }
  }

  export default editAmountSaga;
  