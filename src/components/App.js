import { withCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Session from './Session';

const App = ({ cookies }) => {
  if (cookies.get('username') || cookies.get('username') === '') {
    return (
      <div className="App">
        <Nav cookies={cookies} />
      </div>
    );
  }
  return (
    <div className="App">
      <Nav cookies={cookies} />
      <Session cookies={cookies} />
    </div>
  );
};

App.propTypes = {
  cookies: PropTypes.func.isRequired,
};

export default withCookies(App);
