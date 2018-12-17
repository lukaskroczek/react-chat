import * as actions from '../actions/chatActions';

const initialState = {
  contacts: [],
  selectedContact: null,
  selectedContactMessages: []
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case actions.GET_SELECTED_USER:
      return {
        ...state,
        selectedContact: action.selectedContact,
      };
    case actions.GET_SELECTED_USER_MESSAGES:
      return {
        ...state,
        selectedContactMessages: action.selectedContactMessages
      };
    case actions.SEND_MESSAGE:
      return {
        ...state,
        selectedContactMessages: [...state.selectedContactMessages, action.message],
      };
    default:
      return state;
  }
}
