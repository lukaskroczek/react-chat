import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as actions from '../../store/actions/chatActions';
import * as effects from '../../store/effects/chatEffects';

function* loadContacts() {
  try {
    const contacts = yield call(effects.fetchContacts);
    yield put(actions.loadContactsSuccess(contacts));
  } catch (e) {
    console.log(e)
    yield put(actions.loadContactsFailed());
  }
}

function* loadSelectedContact(action) {
  if (action.userId) {
    try {
      const loadedContact = yield call(effects.fetchSelectedContact, action.userId);
      yield put(actions.loadSelectedContactSuccess(loadedContact));
    } catch (e) {
      console.log(e)
      yield put(actions.loadSelectedContactFailed());
    }
  }
}

function* loadMessagesForSelectedContact(action) {
  try {
    const messages = yield call(effects.fetchMessagesForSelectedContact, action.userId);
    yield put(actions.loadMessagesForSelectedContactSuccess(messages));
  } catch (e) {
    console.log(e)
    yield put(actions.loadMessagesForSelectedContactFailed());
  }
}

function* sendMesageToContact(action) {
  yield put(actions.sendMesageToContactSuccess(action.userId, action.messageText));
}

export default function* chatSagas() {
  yield all([
    yield takeEvery(actions.GET_CONTACTS, loadContacts),
    yield takeEvery(actions.GET_SELECTED_USER, loadSelectedContact),
    yield takeEvery(actions.GET_SELECTED_USER_MESSAGES, loadMessagesForSelectedContact),
    yield takeEvery(actions.SEND_MESSAGE, sendMesageToContact),
  ])
}