import React from 'react';
import * as styles from './Chat.module.css';
import ContactDetailViewHandler from './ContactDetailViewHandler';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/chatActions';

class Chat extends React.Component {
  componentDidMount = () => {
    this.props.loadContacts();
  }

  renderContact = (contact) => (
    <div className={styles.contact} key={contact.id}>
      <Link to={`/${contact.id}`}>{contact.name}</Link>
    </div>)

  renderContacts = () => {
    if (this.props.contacts.data) {
      return this.props.contacts.data
        .map(contact => this.renderContact(contact))
    }
  }

  renderLoadingError = () => (<div className={styles.contactsDetail}>
    Error. Cannot load contacts.
</div>)

  renderLoadingContacts = () => (<div className={styles.contactsDetail}>
    Loading
</div>)

  render = () => {
    if (this.props.contacts.error) {
      return this.renderLoadingError();
    }
    else if (this.props.contacts.error) {
      return this.renderLoadingError();
    }
    else {
      return (
        <Router>
          <div className={styles.mainWindow}>
            <div className={styles.contactsMenu}>
              <div className={styles.header}>Messenger</div>
              <div className={styles.contacts}>
                {this.renderContacts()}
              </div>
            </div>

            <Route path="/:id" component={ContactDetailViewHandler} />
          </div>
        </Router>)
    }
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.chatStorage.contacts
  };
}

const mapDispatchToProps = {
  loadContacts: () => actions.loadContacts()
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);