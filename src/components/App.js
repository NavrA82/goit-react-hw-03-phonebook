import { Component } from 'react';

import { Wrapper } from './GlobalStyle';

import { ContactForm } from './ContactsForm/ContactForm';

import { Filter } from './Filter/Filter';

import { ContactsList } from './ContactList/ContactList';

const localStorageKey = 'users-contact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedUsersContact = localStorage.getItem(localStorageKey);
    if (savedUsersContact !== null) {
      this.setState({
        contacts: JSON.parse(savedUsersContact),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: newContacts } = this.state;

    if (prevContacts !== newContacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(newContacts));
    }
  }

  addUserNameAndNumber = newUser => {
    const { contacts } = this.state;

    const filterContact = contacts.find(
      contact => contact.name === newUser.name
    );

    if (filterContact) {
      alert(`${newUser.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newUser] };
      });
    }
  };

  handleFilterChange = eventFilter => {
    const { value } = eventFilter.target;
    this.setState({ filter: value });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm
          addUserNameAndNumber={this.addUserNameAndNumber}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter handleFilterChange={this.handleFilterChange} />
        <ContactsList
          filteredContacts={filteredContacts}
          onDelete={this.handleDelete}
        />
      </Wrapper>
    );
  }
}
