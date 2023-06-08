import PropTypes from 'prop-types';

import css from './ContactListItem.module.css';

export default function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <div className={css.contactListItemWrap}>
      <p className={css.contactListText}>
        {name}: {number}
      </p>
      <button
        className={css.contactListBtn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
