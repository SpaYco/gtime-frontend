import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../helpers/detailsAPI';
import Game from '../components/Game';
import { updateGames } from '../actions/index';

class Details extends React.Component {
  async componentDidMount() {
    const { handleGamesUpdate } = this.props;
    const data = await API.getData();
    handleGamesUpdate(await data);
  }

  render() {
    const getList = () => {
      const { games } = this.props;
      const result = [];
      for (let i = 0; i < games.length; i += 1) {
        result.push(
          <Game
            key={games[i].id}
            id={games[i].id}
            name={games[i].name}
            link={games[i].link}
          />,
        );
      }
      return result;
    };

    const handleNewGame = async () => {
      const data = [
        document.getElementById('name').value,
        document.getElementById('memory').value,
        document.getElementById('intelligence').value,
        document.getElementById('social').value,
        document.getElementById('link').value,
      ];
      await API.pushData(data);
      window.location.reload();
    };

    return (
      <div id="details">
        <h1>Create</h1>
        <div id="create">
          <input type="text" id="name" name="name" placeholder="name" />
          <input type="number" id="memory" name="memory" placeholder="memory" />
          <input type="number" id="intelligence" name="intelligence" placeholder="intelligence" />
          <input type="number" id="social" name="social" placeholder="social" />
          <input type="text" id="link" name="link" placeholder="image link" />
          <button type="button" onClick={handleNewGame}>SUBMIT</button>
        </div>
        <h1>Pick</h1>
        {getList()}
      </div>
    );
  }
}

Details.propTypes = {
  handleGamesUpdate: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    memory: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
    social: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ games: state.games });

const mapDispatchToProps = dispatch => ({
  handleGamesUpdate: games => {
    dispatch(updateGames(games));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
