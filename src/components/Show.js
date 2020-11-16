import React from 'react';
import getData from '../helpers/showAPI';

const id = window.location.pathname.split('/')[2];

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };

    this.measure = this.measure.bind(this);
  }

  async componentDidMount() {
    this.setState({ data: await getData(id) });
  }

  scoreColor(num) {
    this.result = num >= 0 ? 'green' : 'red';
    return this.result;
  }

  measure() {
    const { data } = this.state;
    this.firstDate = new Date(document.getElementById('first-date').value);
    this.secondDate = new Date(document.getElementById('second-date').value);
    this.hours = Math.floor((Math.abs(this.firstDate - this.secondDate) / 1000) / 3600) % 24;
    this.score = `<h3 className=${this.scoreColor(data.memory)}>${data.memory * this.hours}</h3>
        <h3 className=${this.scoreColor(data.intelligence)}>${data.intelligence * this.hours}</h3>
        <h3 className=${this.scoreColor(data.social)}>${data.social * this.hours}</h3>`;
    document.getElementById('score').innerHTML = this.score;
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <img src={data.link} alt={data.name} />
          <h2>{data.name}</h2>
          <div>
            <h3 className={this.scoreColor(data.memory)}>{data.memory}</h3>
            <h3 className={this.scoreColor(data.intelligence)}>{data.intelligence}</h3>
            <h3 className={this.scoreColor(data.social)}>{data.social}</h3>
          </div>
        </div>
        <div>
          <input id="first-date" type="datetime-local" />
          <input id="second-date" type="datetime-local" />
          <button type="submit" onClick={this.measure}>Submit</button>
          <div id="score"> </div>
        </div>
      </div>
    );
  }
}

export default Show;
