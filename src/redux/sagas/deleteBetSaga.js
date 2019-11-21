import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteBetSaga(action) {
    try {
        yield axios.delete(`/api/bet/${action.payload}`)
        yield put({type:"GET_BETS"});
    } catch (error) {
      console.log('delete bet request failed', error);
    }
  }

  export default deleteBetSaga;
  