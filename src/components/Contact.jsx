import PropTypes from 'prop-types';

export const Contact = props => (
  <li>
    {props.name}: {props.number}
  </li>
);

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
