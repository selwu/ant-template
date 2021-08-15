function zip() {
  const cash = [];
  const result = {};
  for (let i = 0; i < arguments.length; i++) {
    const arr = arguments[i];
    Object.keys(arr).forEach((item) => {
      if (!cash.includes(item)) {
        result[item] = arr[item];
        cash.push(item);
      }
    });
  }

  return result;
}

// Пример работы
const objects = [
  { foo: 5, bar: 6 },
  { foo: 13, baz: -1 }, // foo - повторяющийся ключ
];

console.log(zip(...objects)); // { foo: 5, bar: 6, baz: -1 }
