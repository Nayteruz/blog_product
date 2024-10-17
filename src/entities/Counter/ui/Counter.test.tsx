import { screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from '@/shared/lib';

describe('Counter', () => {
  test('Test render', () => {
    componentRender({ component: <Counter />, initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender({ component: <Counter />, initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender({ component: <Counter />, initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
