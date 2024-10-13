import { screen, fireEvent } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import { componentRender } from '@/shared/lib';

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender({ component: <Sidebar /> });
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle sidebar', () => {
    componentRender({ component: <Sidebar /> });
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
  });
});
