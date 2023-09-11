import { Contact } from './Contact';
import PropTypes from 'prop-types';

export const ContactList = props => (
  <ul>
    {props.contacts.length !== 0
      ? props.contacts.map(contact => (
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))
      : null}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};
