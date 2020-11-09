import { withCookies } from 'react-cookie';
import Nav from './Nav';

const App = cookies => (
  <div className="App">
    <Nav cookies={cookies} />
  </div>
);

export default withCookies(App);
