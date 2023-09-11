import React from 'react';
import { nanoid } from 'nanoid';
import { Input } from './Input';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    let contacts = this.state.contacts;
    contacts.push({ name: name, number: +number, id: nanoid() });
    this.setState({ contacts: contacts });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  getFilteredContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <Input
            name="name"
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <h3>Number</h3>
          <Input
            name="number"
            type="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
          <button type="submit" className="button">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}
