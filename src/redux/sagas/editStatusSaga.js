import axios from 'axios';
// import { put } from 'redux-saga/effects';

function* editStatusSaga(action) {
    try {
        yield axios.put(`/api/completion/${action.payload.id}`, action.payload)
    } catch (error) {
      console.log('Edit status request failed', error);
    }
  }

  export default editStatusSaga;
  