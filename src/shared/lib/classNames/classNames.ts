type TClassNames = Record<string, boolean | string> | string;

/**
 * Получает список имен классов и возвращает строку, состоящую из этих имен,
 * разделенных пробелами. Если имя класса является объектом, оно будет
 * обработано как словарь имен классов к булевым значениям. Если значение
 * является истинным, то имя класса будет добавлено к результирующей строке.
 *
 * @example
 * cn('a', {b: true, c: false}, 'd') // returns "a b d"
 * cn('a', 'b-c') // returns "a b-c"
 * cn({a: true, b: false}, {c: true}) // returns "a c"
 * cn('a', 'b', {c: true, d: false}) // returns "a b c"
 */
export const cn = (...classes: TClassNames[]): string => {
  const checkedClasses: string[] = [];

  const checkValue = (cls: TClassNames) => {
    if (typeof cls === 'string') {
      checkedClasses.push(cls);
    } else if (cls instanceof Object) {
      const list = Object.entries(cls);

      list.forEach(([key, value]) => {
        if (value) {
          checkedClasses.push(key);
        }
      });
    }
  };

  classes.forEach(checkValue);

  return checkedClasses.join(' ');
};
