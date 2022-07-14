import { Component } from 'react';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

class ContactList extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <ul className={styles.contacts}>
          {this.props.onFilter().map(contact => {
            return (
              <Contact
                onDelete={this.props.onDelete}
                key={contact.id}
                number={contact.number}
                name={contact.name}
                id={contact.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default ContactList;
