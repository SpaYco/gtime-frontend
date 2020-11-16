import PropTypes from 'prop-types';

const Game = ({ id, name, link }) => (
  <a className="game-cards" href={`/show/${id}`} style={{ backgroundImage: `url(${link})` }}>
    <h1>{name}</h1>
  </a>
);

Game.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Game;
