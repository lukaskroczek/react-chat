import React from 'react';
import * as styles from './Chat.module.css';
import ContactDetailView from './ContactDetailView';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Chat extends React.Component {
  state = {
    contacts: [],
    loadError: false
  };

  //TODO: předělat na redux
  componentDidMount = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(async res => await res.json())
      .then((users) => {
        if (users) {
          this.setState(() => ({ contacts: users }));
        }
        else {
          this.setState(() => ({ loadError: true }));
        }
      })
  }

  renderContact = (contact) => (
    <div className={styles.contact} key={contact.id}>
      <Link to={`/${contact.id}`}>{contact.name}</Link>
    </div>)

  renderContacts = () => (
    <div className={styles.contactsMenu}>
      <div className={styles.header}>Messenger</div>
      <div className={styles.contacts}>
        {this.state.contacts
          .map(contact => this.renderContact(contact))}
      </div>
    </div>
  )

  renderLoadingError = () => (<div className={styles.contactsDetail}>
    Error. Cannot load contacts.
</div>)

  render = () => {
    if (this.state.loadError) {
      return this.renderLoadingError();
    }
    else {
      return (
        <Router>
          <div className={styles.mainWindow}>

            {this.renderContacts()}
            <Route path="/:id" component={ContactDetailView} />
          </div>
        </Router>)
    }
  }
}