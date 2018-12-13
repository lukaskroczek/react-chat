import React from 'react';
import * as styles from './Chat.module.css';

export default class ContactDetailView extends React.Component {
  state = {
    user: null,
    loadError: false,
    messages: []
  }

  //TODO: předělat na redux
  componentDidMount = () => {
    const userId = this.props.match.params.id;
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(async res => await res.json())
        .then((loadedUser) => {
          if (loadedUser) {
            this.setState(() => ({ user: loadedUser }));
            this.loadMessages(loadedUser);
          }
          else {
            this.setState(() => ({ loadError: true }));
          }
        })
    }
  }

  loadMessages = (loadedUser) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${loadedUser.id}`)
      .then(async res => await res.json())
      .then((posts) => {
        if (posts) {
          this.setState(() => ({ messages: posts }));
        }
        else {
          this.setState(() => ({ loadError: true }));
        }
      })
  }

  renderMessage = (message) => {
    console.log(message)
    return (<div key={message.id}>{message.title}</div>)}

  renderMessages = () => {
    if (this.state.messages) {      
      this.state.messages
        .map(message => this.renderMessage(message))
    }
  }

  renderLoadingError = () => (<div className={styles.contactsDetail}>
    Error. Cannot load user.
</div>)

  renderLoadingUser = () => (<div className={styles.contactsDetail}>
    Loading
</div>)


  //TODO: messages, input box
  renderContactDetailView = () => (
    <div className={styles.contactsDetail}>
      <div className={styles.header}>{this.state.user.name}</div>
      <div className={styles.messages}>
        {this.renderMessages()}
      </div>
      <div className={styles.inputBox}>Input box</div>
    </div>)

  render = () => {
    if (this.state.loadError) {
      return this.renderLoadingError();
    }
    else {
      if (this.state.user) {
        return this.renderContactDetailView();
      }
      else {
        return this.renderLoadingUser();
      }
    }
  }
}