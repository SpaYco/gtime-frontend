import { render } from '@testing-library/react';
import Session from '../../components/Session';

describe('Session', () => {
  it('renders an text input', () => {
    const { queryAllByTestId } = render(
      <Session cookieHandler={() => 'Fake Function'} />,
    );
    const text = queryAllByTestId('username');
    expect(text).toBeTruthy();
  });
});
