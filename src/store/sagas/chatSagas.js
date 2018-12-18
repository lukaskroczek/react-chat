import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as actions from '../../store/actions/chatActions';

export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_SELECTED_USER_SUCCESS = "GET_SELECTED_USER_SUCCESS";
export const GET_SELECTED_USER_MESSAGES_SUCCESS = "GET_SELECTED_USER_MESSAGES_SUCCESS";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";

export const GET_CONTACTS_FAILED = "GET_CONTACTS_FAILED";
export const GET_SELECTED_USER_FAILED = "GET_SELECTED_USER_FAILED";
export const GET_SELECTED_USER_MESSAGES_FAILED = "GET_SELECTED_USER_MESSAGES_FAILED";
export const SEND_MESSAGE_FAILED = "SEND_MESSAGE_FAILED";

function* getContacts() {
  try {
    const contacts = yield fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(async res => await res.json());
    yield put({ type: GET_CONTACTS_SUCCESS, contacts: contacts });
  } catch (e) {
    console.log(e)
    yield put({ type: GET_CONTACTS_FAILED });
  }
}

function* getSelectedContact(action) {
  if (action.userId) {
    try {
      const loadedUser = yield fetch(`https://jsonplaceholder.typicode.com/users/${action.userId}`)
        .then(async res => await res.json());
      yield put({ type: GET_SELECTED_USER_SUCCESS, selectedContact: loadedUser });
    } catch (e) {
      console.log(e)
      yield put({ type: GET_SELECTED_USER_FAILED });
    }
  }
}

function* getMessagesForSelectedContact(action) {
  try {
    const messages = yield fetch(`https://jsonplaceholder.typicode.com/posts?userId=${action.userId}`)
      .then(async res => await res.json());
    yield put({ type: GET_SELECTED_USER_MESSAGES_SUCCESS, selectedContactMessages: messages });
  } catch (e) {
    console.log(e)
    yield put({ type: GET_SELECTED_USER_MESSAGES_FAILED });
  }
}

function* sendMesageToContact(action) {
  console.log("Called: sendMesageToContact");
  console.log(action);
  yield put({
    type: SEND_MESSAGE_SUCCESS,
    message: { userId: action.userId, id: 0, title: action.messageText }
  })
}

export default function* chatSagas() {
  yield all([
    yield takeEvery(actions.GET_CONTACTS, getContacts),
    yield takeEvery(actions.GET_SELECTED_USER, getSelectedContact),
    yield takeEvery(actions.GET_SELECTED_USER_MESSAGES, getMessagesForSelectedContact),
    yield takeEvery(actions.SEND_MESSAGE, sendMesageToContact),
  ])
}