import { render, screen } from '@testing-library/react';
import Hello from '@components/hello';

describe('test', () => {
  it('should display hello', () => {
    render(<Hello />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
