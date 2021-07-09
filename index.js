function flatten(list) {
  // code here
}

flatten([
  1,
  'any [complex] string',
  null,
  function () {},
  [1, 2, [3, '4'], 0],
  [],
  { a: 1 },
]);
// возвращает
