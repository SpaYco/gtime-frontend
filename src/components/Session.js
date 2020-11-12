import PropTypes from 'prop-types';
import React from 'react';
import { signin } from '../helpers/sessionAPI';

class Session extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formType: 'login' };

    this.setFormType = this.setFormType.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-trailing-spaces
    
  }

  async setUser() {
    const { formType } = this.state;
    const { cookies } = this.props;
    this.data = await signin(formType, document.getElementById('username').value);
    if (formType === 'login') {
      if (this.data[0] === true) {
        cookies.set('uid', this.data[1].id);
      } else {
        document.getElementById('error').innerHTML = 'User doesn\'t exist, Sign Up to create it';
      }
    }
  }

  setFormType() {
    const { formType } = this.state;
    const newType = formType === 'login' ? 'signup' : 'login';
    this.setState({ formType: newType });
  }

  render() {
    const { formType } = this.state;
    return (
      <div id="session">
        <h1>{formType}</h1>
        <div id="error" />
        <input type="text" id="username" />
        <div>
          <button type="button" onClick={this.setUser}>Submit</button>
          <button type="button" onClick={this.setFormType}>{formType === 'login' ? 'signup' : 'login'}</button>
        </div>
      </div>
    );
  }
}

Session.propTypes = {
  cookies: PropTypes.func.isRequired,
};

export default Session;
