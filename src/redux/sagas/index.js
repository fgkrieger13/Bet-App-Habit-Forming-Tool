import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getBetsSaga from './getBetsSaga';
import deleteBetSaga from './deleteBetSaga';
import addBetSaga from './addBetSaga';
import editStatusSaga from './editStatusSaga';
import getCompletionSaga from './getCompletionSaga';
import deleteCompletionSaga from './deleteCompletionSaga';
import editAmountSaga from './editAmountSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('GET_BETS', getBetsSaga);
  yield takeEvery('DELETE_BET', deleteBetSaga);
  yield takeEvery('ADD_BET', addBetSaga);
  yield takeEvery('EDIT_STATUS', editStatusSaga);
  yield takeEvery('GET_COMPLETION', getCompletionSaga);
  yield takeEvery('DELETE_COMPLETION', deleteCompletionSaga);
  yield takeEvery('EDIT_AMOUNT', editAmountSaga);
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
