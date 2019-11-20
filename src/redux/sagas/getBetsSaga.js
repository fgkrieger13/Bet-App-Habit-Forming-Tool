import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getBetsSaga() {
    try {
        const bets = yield axios.get("/api/bet");
        yield put({type:"SET_BETS", payload: bets.data});
    } catch (error) {
      console.log('Get Bet request failed', error);
    }
  }

  export default getBetsSaga;
  