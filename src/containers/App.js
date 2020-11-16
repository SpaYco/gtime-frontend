import { withCookies, Cookies } from 'react-cookie';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Session from '../components/Session';
import { updateUser } from '../actions/index';
import Details from './Details';
import Show from '../components/Show';
import bg from '../assets/bg.gif';

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
    cookies.set('uid', name, { path: '/' });
  }

  render() {
    const { uid } = this.state;
    const { handleUserUpdate } = this.props;
    if (uid && uid !== '') {
      handleUserUpdate(uid);
      return (
        <div id="app" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Details} />

            <Route path="/show/:id" component={Show} />
          </Switch>
        </div>
      );
    }
    return (
      <div id="app" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
        <Nav />
        <Session cookieHandler={this.cookieHandler} />
      </div>
    );
  }
}

App.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  handleUserUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  handleUserUpdate: user => {
    dispatch(updateUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
