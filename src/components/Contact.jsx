import PropTypes from 'prop-types';

export const Contact = props => (
  <li key={props.id}>
    {props.name}: {props.number}
  </li>
);

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
