import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button/Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test have theme className', () => {
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    // screen.debug();
  });
});
