import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addBetSaga(action) {
    try {
        yield axios.post("/api/bet", action.payload)
        yield put({type:"GET_BETS"});
    } catch (error) {
      console.log('Add bet request failed', error);
    }
  }

  export default addBetSaga;
  