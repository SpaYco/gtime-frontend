import React from 'react';
import getData from '../helpers/measuresAPI';

const id = window.location.pathname.split('/')[2];

const scoreColor = num => {
  const result = num >= 0 ? 'green' : 'red';
  return result;
};

class Measures extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {}, game: {} };
  }

  async componentDidMount() {
    this.data = await getData(id);
    this.setState({ data: this.data.measurement, game: this.data.game });
  }

  render() {
    const { data, game } = this.state;
    return (
      <div id="game-container">
        <div id="original-game-container">
          <h2>
            Game:
            {' '}
            {` ${game.name}`}
          </h2>

          <h2>
            Hours Played:
            {' '}
            {` ${data.hours}`}
          </h2>
          <div className="scores">
            <div>
              <h2>Memory</h2>
              <h3 className={scoreColor(data.memory)}>{data.memory}</h3>
            </div>
            <div>
              <h2>Intelligence</h2>
              <h3 className={scoreColor(data.intelligence)}>{data.intelligence}</h3>
            </div>
            <div>
              <h2>Social</h2>
              <h3 className={scoreColor(data.social)}>{data.social}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Measures;
