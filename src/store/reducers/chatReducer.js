import * as actions from '../sagas/chatSagas';

const initialState = {
  contacts: [],
  selectedContact: null,
  selectedContactMessages: []
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case actions.GET_SELECTED_USER_SUCCESS:
      return {
        ...state,
        selectedContact: action.selectedContact,
      };
    case actions.GET_SELECTED_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        selectedContactMessages: action.selectedContactMessages
      };
    case actions.SEND_MESSAGE_SUCCESS:
      console.log(action.message);
      return {
        ...state,
        selectedContactMessages: [...state.selectedContactMessages, action.message],
      };
    default:
      return state;
  }
}
