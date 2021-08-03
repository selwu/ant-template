const mobileRemote = (text) => {
  const graph = {};
  const zero = ['1'];
  const one = ['2', 'a', 'b', 'c'];
  const two = ['3', 'd', 'e', 'f'];
  const three = ['4', 'g', 'h', 'i'];
  const four = ['5', 'j', 'k', 'l'];
  const five = ['6', 'm', 'n', 'o'];
  const six = ['7', 'p', 'q', 'r', 's'];
  const seven = ['8', 't', 'u', 'v'];
  const eight = ['9 ', 'w', 'x', 'y', 'z'];
  const nine = ['*'];
  const ten = ['0'];
  const eleven = ['#'];

  const arrButtons = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ];

  const matrix = [
    [0, one, two, three, 0, 0, 0, 0, 0, nine, 0, 0],
    [zero, 0, two, 0, four, 0, 0, 0, 0, 0, ten, 0],
    [zero, one, 0, 0, 0, five, 0, 0, 0, 0, 0, eleven],
    [zero, 0, 0, 0, four, five, six, 0, 0, 0, 0, 0],
    [0, one, 0, three, 0, five, 0, seven, 0, 0, 0, 0],
    [0, 0, two, three, four, 0, 0, 0, eight, 0, 0, 0],
    [0, 0, 0, three, 0, 0, 0, seven, eight, nine, 0, 0],
    [0, 0, 0, 0, four, 0, six, 0, eight, 0, ten, 0],
    [0, 0, 0, 0, 0, five, six, seven, 0, 0, 0, eleven],
    [zero, 0, 0, 0, 0, 0, six, 0, 0, 0, ten, eleven],
    [0, one, 0, 0, 0, 0, 0, seven, 0, nine, 0, eleven],
    [0, 0, two, 0, 0, 0, 0, 0, eight, nine, ten, 0],
  ];

  function searchOne(button) {
    const result = [];
    matrix[button].forEach((item, index) => {
      if (item) {
        result.push(item);
      }
    });
    return result;
  }

  function searchTwo(button) {
    const repeat = [];
    let indexID = [];
    const result = [];
    matrix[button].forEach((item, indexOne) => {
      if (item) {
        // console.log('indexOne: ', indexOne);

        matrix[indexOne].forEach((item, index) => {
          if (item) {
            console.log(index, indexOne);

            indexID.push(index);
          }
        });
      }
    });
    indexID = [...new Set(indexID)];
    console.log('indexID: ', indexID);

    return indexID.map((item) => {
      return arrButtons[item];
    });
  }

  console.log('searchTwo: ', searchTwo(4));
  console.log('searchOne: ', searchOne(4));

  function searchRepeat(first, second) {
    return arrButtons.filter((item) => {
      return !second.includes(item) && item !== first;
    });
  }

  graph.zero = {
    1: [zero],
    2: [...searchOne(0)],
    3: [...searchRepeat(zero, searchOne(0))],
    4: [],
  };
  graph.one = {
    1: [one],
    2: [...searchOne(1)],
    3: [...searchRepeat(one, searchOne(1))],
  };
  graph.two = {
    1: [two],
    2: [...searchOne(2)],
    3: [...searchRepeat(two, searchOne(2))],
  };
  graph.three = {
    1: [three],
    2: [...searchOne(3)],
    3: [...searchRepeat(three, searchOne(3))],
  };
  graph.four = {
    1: [four],
    2: [...searchOne(4)],
    3: [...searchRepeat(four, searchOne(4))],
  };
  graph.five = {
    1: [five],
    2: [...searchOne(5)],
    3: [...searchRepeat(five, searchOne(5))],
  };
  graph.six = {
    1: [six],
    2: [...searchOne(6)],
    3: [...searchRepeat(six, searchOne(6))],
  };
  graph.seven = {
    1: [seven],
    2: [...searchOne(7)],
    3: [...searchRepeat(seven, searchOne(7))],
  };
  graph.eight = {
    1: [eight],
    2: [...searchOne(8)],
    3: [...searchRepeat(eight, searchOne(8))],
  };
  graph.nine = {
    1: [nine],
    2: [...searchOne(9)],
    3: [...searchRepeat(nine, searchOne(9))],
  };
  graph.ten = {
    1: [ten],
    2: [...searchOne(10)],
    3: [...searchRepeat(ten, searchOne(10))],
  };
  graph.eleven = {
    1: [eleven],
    2: [...searchOne(11)],
    3: [...searchRepeat(eleven, searchOne(11))],
  };

  let cash = graph.zero;

  const searchSymbol = (symbol) => {
    let resultItem = 0;
    Object.keys(cash).forEach((itemOne, indexOne) => {
      cash[itemOne].forEach((itemTwo, indexTwo) => {
        itemTwo.forEach((ItemSymbol, indexThree) => {
          if (symbol === ItemSymbol && indexOne === 0) {
            resultItem = indexThree + 2;
          } else if (symbol === ItemSymbol && indexOne === 1) {
            resultItem = indexThree + 3;
          } else if (symbol === ItemSymbol && indexOne === 2) {
            resultItem = indexThree + 4;
          } else if (symbol === ItemSymbol && indexOne === 3) {
            resultItem = indexThree + 5;
          }
        });
        // console.log('itemTwo: ', itemTwo);
        // console.log('Text: ', indexTwo);
      });
    });

    return resultItem;
  };

  return searchSymbol(text);
};

console.log(mobileRemote('y')); // 6
// console.log(mobileRemote('yandex')); // 34
