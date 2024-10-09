import { screen, fireEvent } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from '@/shared/lib';

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
  });
});
