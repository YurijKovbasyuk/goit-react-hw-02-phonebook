import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/contactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from 'components/App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  reset = () => {
    this.setState({ number: '', name: '' });
  };

  handleSubmit = (name, number) => {
    let loginInputId = nanoid();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: loginInputId, name: name, number: number },
      ],
    }));
  };

  validationNameForm = e => {
    e.preventDefault();

    let bool = this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === e.target.name.value.toLowerCase();
    });

    if (!bool) {
      this.handleSubmit(e.target.name.value, e.target.number.value);
      this.reset();
    } else alert(e.target.name.value + ' is already exists');
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = itemId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== itemId),
    }));
  };

  handleFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={styles.app}>
        <h2>Phonebook</h2>
        <ContactForm
          contacts={contacts}
          onSubmit={this.handleSubmit}
          onValidationNameForm={this.validationNameForm}
        />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleChange} filter={filter} />
        <ContactList
          onDelete={this.handleDelete}
          onFilter={this.handleFilter}
        />
      </div>
    );
  }
}
export default App;
