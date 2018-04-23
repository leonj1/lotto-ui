import { all, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
// import { START_CREATE_SECRET, START_FETCH_SECRET, SUCCESS_CREATE_SECRET, FAILED_CREATE_SECRET, SUCCESS_FETCH_SECRET, FAILED_FETCH_SECRET } from '../redux/actions';
import {
    START_REGISTER_ACCOUNT,
    SUCCESS_REGISTER_ACCOUNT,
    FAILED_REGISTER_ACCOUNT,
    START_LOGIN_ACCOUNT,
    SUCCESS_LOGIN_ACCOUNT,
    FAILED_LOGIN_ACCOUNT
} from '../redux/actions';

// // worker Saga: will be fired on START_CREATE_SECRET actions
// function* createSecret(action) {
//    try {
//       const token = yield call(axios.post, "http://localhost/secrets", action.payload);
//       let value = "";
//       if (token) {
//           value = token.data;
//       }
//       yield put({type: SUCCESS_CREATE_SECRET, token: value});
//    } catch (e) {
//       yield put({type: FAILED_CREATE_SECRET, current: e.message});
//    }
// }
//
// // worker Saga: will be fired on START_FETCH_SECRET actions
// function* fetchSecret(action) {
//    try {
//       const contents = yield call(axios.get, "https://localhost/secrets/" + action.payload);
//       let value = "";
//       if (contents) {
//           value = contents.data;
//       }
//       yield put({
//           type: SUCCESS_FETCH_SECRET,
//           payload: {
//               contents: value,
//               request: {
//                   status: contents.status,
//                   reason: contents.statusText
//               }
//           }
//       });
//    } catch (e) {
//       yield put({
//           type: FAILED_FETCH_SECRET,
//           request: {
//               status: e.response.status,
//               reason: e.response.data
//           }
//       });
//    }
// }

function* loginUser(action) {
    try {
      const token = yield call(axios.post, "http://localhost:3456/public/users/login", action.payload);
      let value = "";
      if (token) {
          value = token.data;
      }
      yield put({type: SUCCESS_LOGIN_ACCOUNT, token: value});
    } catch (e) {
        yield put({
            type: FAILED_LOGIN_ACCOUNT,
            request: {
              status: e.response.status,
              reason: e.response.data
          }
        })
    }
}

function* registerUser(action) {
    console.log("Attempting to register user");
    try {
        const response = yield call(axios.post, "http://localhost:3456/public/users/register", action.payload);
        let value = "";
        if (response) {
            value = {
                first_name: response.first_name,
                last_name: response.last_name,
                email: response.email,
                token: response.token
            };
        }
        yield put({type: SUCCESS_REGISTER_ACCOUNT, user: value});
    } catch (e) {
        yield put({
            type: FAILED_REGISTER_ACCOUNT,
            request: {
                status: e.response.status,
                reason: e.response.data
            }
        })
    }
}

const registerUserSaga = takeLatest(START_REGISTER_ACCOUNT, registerUser);
const loginUserSaga = takeLatest(START_LOGIN_ACCOUNT, loginUser);

function* rootSaga() {
    yield all([
        registerUserSaga,
        loginUserSaga
    ])
}

export default rootSaga;
