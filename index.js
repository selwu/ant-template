const mobileRemote = (text) => {
  const textArr = text.split('');
  let countResult = 0;
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

  function searchButton(symbol) {
    const result = arrButtons.findIndex((item) => {
      return item.includes(symbol);
    });
    return result;
  }

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

  function searchIndex(button) {
    let indexID = [];
    matrix[button].forEach((item, indexOne) => {
      if (item) {
        indexID.push(indexOne);
        matrix[indexOne].forEach((item, index) => {
          if (item) {
            indexID.push(index);
          }
        });
      }
    });
    return (indexID = [...new Set(indexID)]);
  }

  function searchTwo(button) {
    const repeat = [button];
    let indexID = [];
    matrix[button].forEach((item, indexOne) => {
      if (item) {
        repeat.push(indexOne);
        matrix[indexOne].forEach((item, index) => {
          if (item) {
            indexID.push(index);
          }
        });
      }
    });
    indexID = [...new Set(indexID)];
    indexID = indexID.filter((item) => {
      return !repeat.includes(item);
    });

    return indexID.map((item) => {
      return arrButtons[item];
    });
  }

  function searchThree(button) {
    const arr = searchIndex(button);
    return arrButtons.filter((item, index) => {
      return !arr.includes(index);
    });
  }

  graph[0] = {
    1: [zero],
    2: [...searchOne(0)],
    3: [...searchTwo(0)],
    4: [...searchThree(0)],
  };
  graph[1] = {
    1: [one],
    2: [...searchOne(1)],
    3: [...searchTwo(1)],
    4: [...searchThree(1)],
  };
  graph[2] = {
    1: [two],
    2: [...searchOne(2)],
    3: [...searchTwo(2)],
    4: [...searchThree(2)],
  };
  graph[3] = {
    1: [three],
    2: [...searchOne(3)],
    3: [...searchTwo(3)],
    4: [...searchThree(3)],
  };
  graph[4] = {
    1: [four],
    2: [...searchOne(4)],
    3: [...searchTwo(4)],
    4: [...searchThree(4)],
  };
  graph[5] = {
    1: [five],
    2: [...searchOne(5)],
    3: [...searchTwo(5)],
    4: [...searchThree(5)],
  };
  graph[6] = {
    1: [six],
    2: [...searchOne(6)],
    3: [...searchTwo(6)],
    4: [...searchThree(6)],
  };
  graph[7] = {
    1: [seven],
    2: [...searchOne(7)],
    3: [...searchTwo(7)],
    4: [...searchThree(7)],
  };
  graph[8] = {
    1: [eight],
    2: [...searchOne(8)],
    3: [...searchTwo(8)],
    4: [...searchThree(8)],
  };
  graph[9] = {
    1: [nine],
    2: [...searchOne(9)],
    3: [...searchTwo(9)],
    4: [...searchThree(9)],
  };
  graph[10] = {
    1: [ten],
    2: [...searchOne(10)],
    3: [...searchTwo(10)],
    4: [...searchThree(10)],
  };
  graph[11] = {
    1: [eleven],
    2: [...searchOne(11)],
    3: [...searchTwo(11)],
    4: [...searchThree(11)],
  };

  let cash = graph[0];

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
      });
    });
    cash = graph[searchButton(symbol)];
    return resultItem;
  };

  textArr.forEach((item, index) => {
    const result = searchSymbol(item);
    countResult += result;
  });

  return countResult;
};

// console.log(mobileRemote('a')); // 6
console.log(mobileRemote('1')); // 34
