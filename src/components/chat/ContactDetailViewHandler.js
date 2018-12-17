import React from 'react';
import ContactDetailView from './ContactDetailView';

export default class ContactDetailViewHandler extends React.Component {
  render = () => {
    const userIdParam = this.props.match.params.id;
    return (<ContactDetailView key={userIdParam} userId={userIdParam} />)
  }
}