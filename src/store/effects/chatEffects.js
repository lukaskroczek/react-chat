export function fetchContacts() {
  return fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(async res => await res.json());
}

export function fetchSelectedContact(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(async res => await res.json());
}

export function fetchMessagesForSelectedContact(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(async res => await res.json());
}