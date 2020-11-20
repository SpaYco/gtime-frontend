import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const currentLocation = window.location.pathname.split('/')[1];

const Links = ({ cookies }) => (
  <footer>
    <a href="/" className={currentLocation === '' ? 'blue' : 'gray'} aria-label="games"><i className="fas fa-gamepad" /></a>
    <a href="/Profile" className={currentLocation === 'Profile' ? 'blue' : 'gray'} aria-label="profile"><i className="fas fa-user" /></a>
    <button
      className="gray btn"
      id="logout-btn"
      type="submit"
      onClick={() => {
        cookies.remove('uid', { path: '/' });
        window.location.reload();
      }}
    >
      <i className="fas fa-sign-out-alt" />
    </button>
  </footer>
);

Links.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withCookies(Links);
