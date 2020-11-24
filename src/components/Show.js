import React from 'react';
import API from '../helpers/showAPI';

const id = window.location.pathname.split('/')[2];

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };

    this.measure = this.measure.bind(this);
  }

  async componentDidMount() {
    this.setState({ data: await API.getData(id) });
  }

  scoreColor(num) {
    this.result = num >= 0 ? 'green' : 'red';
    return this.result;
  }

  async measure() {
    this.firstDate = new Date(document.getElementById('first-date').value);
    this.secondDate = new Date(document.getElementById('second-date').value);
    this.hours = Math.floor((Math.abs(this.firstDate - this.secondDate) / 1000) / 3600) % 24;
    this.data = await API.pushData([id, this.hours]);
    if (this.data.id) {
      window.location.href = `/measure/${this.data.id}`;
    } else {
      document.getElementById('score').innerHTML += 'Invalid';
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div id="game-container">
        <div id="original-game-container">
          <img src={data.link} alt={data.name} />
          <h1>{data.name}</h1>
          <h2>what you get from playing this game (per hour):</h2>
          <div className="scores">
            <div>
              <h2>Memory</h2>
              <h3 className={this.scoreColor(data.memory)}>{data.memory}</h3>
            </div>
            <div>
              <h2>Intelligence</h2>
              <h3 className={this.scoreColor(data.intelligence)}>{data.intelligence}</h3>
            </div>
            <div>
              <h2>Social</h2>
              <h3 className={this.scoreColor(data.social)}>{data.social}</h3>
            </div>
          </div>
        </div>
        <div id="dates-container">
          <div id="dates">
            <h1>Calculate (hours)</h1>
            <h2>From:</h2>
            <input id="first-date" type="datetime-local" />
            <h2>To:</h2>
            <input id="second-date" type="datetime-local" />
          </div>
          <button type="submit" onClick={this.measure}>Submit</button>
          <div id="score"> </div>
        </div>
      </div>
    );
  }
}

export default Show;
