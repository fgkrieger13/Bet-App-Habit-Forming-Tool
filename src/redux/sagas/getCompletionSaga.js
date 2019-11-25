import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getCompletionSaga() {
    try {
        const completion = yield axios.get("/api/completion");
        yield put({type:"SET_COMPLETION", payload: completion.data});
    } catch (error) {
      console.log('Get Completion request failed', error);
    }
  }

  export default getCompletionSaga;
  