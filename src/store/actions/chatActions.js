export const GET_CONTACTS = "GET_CONTACTS";
export const GET_SELECTED_USER = "GET_SELECTED_USER";
export const GET_SELECTED_USER_MESSAGES = "GET_SELECTED_USER_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_SELECTED_USER_SUCCESS = "GET_SELECTED_USER_SUCCESS";
export const GET_SELECTED_USER_MESSAGES_SUCCESS = "GET_SELECTED_USER_MESSAGES_SUCCESS";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";

export const GET_CONTACTS_FAILED = "GET_CONTACTS_FAILED";
export const GET_SELECTED_USER_FAILED = "GET_SELECTED_USER_FAILED";
export const GET_SELECTED_USER_MESSAGES_FAILED = "GET_SELECTED_USER_MESSAGES_FAILED";
export const SEND_MESSAGE_FAILED = "SEND_MESSAGE_FAILED";

export const loadContacts = () => ({
  type: GET_CONTACTS,
});

export const loadContactsSuccess = (contacts) => ({
  type: GET_CONTACTS_SUCCESS,
  contacts: contacts
});

export const loadContactsFailed = () => ({
  type: GET_CONTACTS_FAILED
});

export const loadSelectedContact = (userId) => ({
  type: GET_SELECTED_USER,
  userId: userId
});

export const loadSelectedContactSuccess = (loadedContact) => ({
  type: GET_SELECTED_USER_SUCCESS,
  selectedContact: loadedContact
});

export const loadSelectedContactFailed = () => ({
  type: GET_SELECTED_USER_FAILED
});

export const loadMessagesForSelectedContact = (userId) => ({
  type: GET_SELECTED_USER_MESSAGES,
  userId: userId
});

export const loadMessagesForSelectedContactSuccess = (messages) => ({
  type: GET_SELECTED_USER_MESSAGES_SUCCESS,
  selectedContactMessages: messages
});

export const loadMessagesForSelectedContactFailed = (userId) => ({
  type: GET_SELECTED_USER_MESSAGES_FAILED
});

export const sendMesageToContact = (userId, message) => ({
  type: SEND_MESSAGE,
  userId: userId,
  messageText: message
});

export const sendMesageToContactSuccess = (userId, messageText) => ({
  type: SEND_MESSAGE_SUCCESS,
  message: { userId: userId, id: 0, title: messageText }
});