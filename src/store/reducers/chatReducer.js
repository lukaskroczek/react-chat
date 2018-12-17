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
        contacts: action.contacts,
        selectedContact: state.selectedContact,
        selectedContactMessages: state.selectedContactMessages
      };
    case actions.GET_SELECTED_USER:
      return {
        contacts: state.contacts,
        selectedContact: action.selectedContact,
        selectedContactMessages: state.selectedContactMessages
      };
    case actions.GET_SELECTED_USER_MESSAGES:
      return {
        contacts: state.contacts,
        selectedContact: state.selectedContact,
        selectedContactMessages: action.selectedContactMessages
      };
    case actions.SEND_MESSAGE:
      return {
        contacts: state.contacts,
        selectedContact: state.selectedContact,
        selectedContactMessages: [...state.selectedContactMessages, action.message],
      };
    default:
      return state;
  }
}
