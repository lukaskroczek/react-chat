export const GET_CONTACTS = "GET_CONTACTS";
export const GET_SELECTED_USER = "GET_SELECTED_USER";
export const GET_SELECTED_USER_MESSAGES = "GET_SELECTED_USER_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const getContacts = () => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(async res => await res.json())
    .then((contacts) => dispatch({
      type: GET_CONTACTS,
      contacts: contacts
    }));
};

export const getSelectedContact = (userId) => dispatch => {
  if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(async res => await res.json())
      .then((loadedUser) => {
        dispatch({
          type: GET_SELECTED_USER,
          selectedContact: loadedUser
        });
      });
  }
}

export const getMessagesForSelectedContact = (userId) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(async res => await res.json())
    .then((messages) => dispatch({
      type: GET_SELECTED_USER_MESSAGES,
      selectedContactMessages: messages
    }));
}

export const sendMesageToContact = (userId, messageText) => dispatch => {
  dispatch({
    type: SEND_MESSAGE,
    message: {userId: userId,id:0,title:messageText}
  })
}