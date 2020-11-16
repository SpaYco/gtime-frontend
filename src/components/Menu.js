import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const Menu = ({ cookies }) => {
  const uid = cookies.get('uid');
  if (uid && uid !== '') {
    return (
      <button
        id="logout-btn"
        type="submit"
        onClick={() => {
          cookies.remove('uid', { path: '/' });
          window.location.reload();
        }}
      >
        Logout
      </button>
    );
  }
  return <h4>Hello Stranger</h4>;
};

Menu.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withCookies(Menu);
