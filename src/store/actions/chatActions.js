export const GET_CONTACTS = "GET_CONTACTS";
export const GET_SELECTED_USER = "GET_SELECTED_USER";
export const GET_SELECTED_USER_MESSAGES = "GET_SELECTED_USER_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const getContacts = () => ({
  type: GET_CONTACTS,
});

export const getSelectedContact = (userId) => ({
  type: GET_SELECTED_USER,
  userId: userId
});

export const getMessagesForSelectedContact = (userId) => ({
  type: GET_SELECTED_USER_MESSAGES,
  userId: userId
});

export const sendMesageToContact = (userId, message) => ({
  type: SEND_MESSAGE,
  userId: userId,
  messageText: message
});