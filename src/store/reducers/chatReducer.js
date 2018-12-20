import * as actions from '../../store/actions/chatActions';

const initialState = {
  contacts: {
    data: [],
    loading: false,
    error: false
  },
  selectedContact: {
    contact: null,
    error: false
  },
  selectedContactMessages: {
    data: [],
    loading: false,
    error: false
  }
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CONTACTS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true
        },
      };
    case actions.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case actions.GET_CONTACTS_FAILED:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          error: true
        },
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
        selectedContactMessages: {
          ...state.selectedContactMessages,
          data: [...state.selectedContactMessages.data, action.message]
        },
      };
    default:
      return state;
  }
}
