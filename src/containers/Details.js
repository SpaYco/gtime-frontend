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
            name={[games[i].name]}
            link={[games[i].link]}
          />,
        );
      }
      return result;
    };

    return <div id="details">{getList()}</div>;
  }
}

Details.propTypes = {
  handleGamesUpdate: PropTypes.func.isRequired,
  games: PropTypes.objectOf(PropTypes.shape({
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
