import { render } from '@testing-library/react';
import Nav from '../../components/Nav';

describe('Nav', () => {
  it('renders a text', () => {
    const { getByText } = render(
      <Nav />,
    );
    const logo = getByText(/Hello Stranger/i);
    expect(logo).toBeInTheDocument();
  });
});
