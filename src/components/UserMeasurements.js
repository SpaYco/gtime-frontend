import PropTypes from 'prop-types';

const UserMeasurements = ({
  id, memory, intelligence, social,
}) => (
  <div>
    <a href={`measure/${id}`}>
      <h1>
        memory:
        {memory}
      </h1>
      <h1>
        intelligence:
        {intelligence}
      </h1>
      <h1>
        social:
        {social}
      </h1>
    </a>
  </div>
);

UserMeasurements.propTypes = {
  id: PropTypes.number.isRequired,
  memory: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  social: PropTypes.number.isRequired,
};

export default UserMeasurements;
