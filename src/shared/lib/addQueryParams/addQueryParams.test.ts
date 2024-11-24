import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('test with one parameter', () => {
    const params = getQueryParams({ test: 'value' });

    expect(params).toBe('?test=value');
  });

  test('test with multiple parameters', () => {
    const params = getQueryParams({ test: 'value', second: 'value2' });

    expect(params).toBe('?test=value&second=value2');
  });

  test('test with undefined', () => {
    const params = getQueryParams({ test: 'value', second: undefined, third: 'value3' });

    expect(params).toBe('?test=value&third=value3');
  });
});
