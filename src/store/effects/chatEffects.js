export function loadContacts() {
  return fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(async res => await res.json());
}

export function loadSelectedContact(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(async res => await res.json());
}

export function loadMessagesForSelectedContact(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(async res => await res.json());
}