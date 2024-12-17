import { cn } from './classNames';

describe('classNames', () => {
  test('with only one params', () => {
    expect(cn('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    expect(cn('someClass', { test: true })).toBe('someClass test');
  });

  test('with many classes', () => {
    expect(cn('someClass', { test: true }, 'class1', 'class2')).toBe('someClass test class1 class2');
  });

  test('with mod undefined', () => {
    expect(cn('someClass', { scrollable: undefined })).toBe('someClass');
  });
});
