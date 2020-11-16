import { withCookies } from 'react-cookie';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Session from '../components/Session';
import { updateUser } from '../actions/index';
import Details from './Details';
import Show from '../components/Show';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = this.props;
    this.state = { uid: cookies.get('uid') };
    this.cookieHandler = this.cookieHandler.bind(this);
  }

  cookieHandler(name) {
    const { cookies } = this.props;
    this.setState({ uid: name });
    cookies.set('uid', name);
  }

  render() {
    const { uid } = this.state;
    const { handleUserUpdate } = this.props;
    if (uid && uid !== '') {
      handleUserUpdate(uid);
      return (
        <div className="App">
          <Nav cookieHandler={this.cookieHandler} uid={uid} />
          <Switch>
            <Route exact path="/" component={Details} />

            <Route path="/show/:id" component={Show} />
          </Switch>
        </div>
      );
    }
    return (
      <div className="App">
        <Nav cookieHandler={this.cookieHandler} uid={uid} />
        <Session cookieHandler={this.cookieHandler} />
      </div>
    );
  }
}

App.propTypes = {
  cookies: PropTypes.objectOf(PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  })).isRequired,
  handleUserUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  handleUserUpdate: user => {
    dispatch(updateUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
