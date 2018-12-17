import React from 'react';
import * as styles from './Chat.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/chatActions';

class ContactDetailView extends React.Component {
  state = {
    loadError: false //TODO: set loadError
  }

  componentDidMount = () => {
    if (this.props.userId) {
      this.props.getSelectedContact(this.props.userId);
      this.props.getMessagesForSelectedContact(this.props.userId);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const message = document.getElementById("inputBox");
      this.props.sendMesageToContact(this.props.userId, message.innerText);
      message.innerText = "";

      e.preventDefault()
    }    
  }

  renderMessage = (message) => (<div key={message.id}>{message.title}</div>)

  renderMessages = () => {
    if (this.props.selectedContactMessages) {
      return this.props.selectedContactMessages
        .map(message => this.renderMessage(message))
    }
  }

  renderLoadingError = () => (<div className={styles.contactsDetail}>
    Error. Cannot load user.
</div>)

  renderLoadingUser = () => (<div className={styles.contactsDetail}>
    Loading
</div>)

  //TODO: input box, akce add message
  renderContactDetailView = () => (
    <div className={styles.contactsDetail}>
      <div className={styles.header}>{this.props.selectedContact.name}</div>
      <div className={styles.messages}>
        {this.renderMessages()}
      </div>
      <div className={styles.inputBoxArea}>
        <span id="inputBox" className={styles.inputBox} onKeyPress={this.handleKeyPress} contentEditable placeholder="Enter text here..." />
      </div>
    </div>)

  render = () => {
    if (this.state.loadError) {
      return this.renderLoadingError();
    }
    else {
      if (this.props.selectedContact) {
        return this.renderContactDetailView();
      }
      else {
        return this.renderLoadingUser();
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedContact: state.chatStorage.selectedContact,
    selectedContactMessages: state.chatStorage.selectedContactMessages
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getSelectedContact: (userId) => dispatch(actions.getSelectedContact(userId)),
    getMessagesForSelectedContact: (userId) => dispatch(actions.getMessagesForSelectedContact(userId)),
    sendMesageToContact: (userId, message) => dispatch(actions.sendMesageToContact(userId, message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailView);