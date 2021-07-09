function flatten(list) {
  let newArr = list;
  console.log(newArr.some(Array.isArray));
  while (newArr.some(Array.isArray)) {
    const arr = [];
    newArr.forEach((item, index, array) => {
      if (Array.isArray(item)) {
        arr.push(...item);
      } else {
        arr.push(item);
      }
    });
    newArr = arr;
  }
  console.log(newArr);
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
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
