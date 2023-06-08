import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.contactListItem} key={id}>
          <ContactListItem
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
