import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

function ContactList({ onDelete, onFilter }) {
  return (
    <div>
      <ul className={styles.contacts}>
        {onFilter().map(contact => {
          return (
            <Contact
              onDelete={onDelete}
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

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default ContactList;
