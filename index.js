const mobileRemote = (text) => {
  const button = {};
  const graph = {};
  const one = ['1'];
  const two = ['2', 'a', 'b', 'c'];
  const three = ['3', 'd', 'e', 'f'];
  const four = ['4', 'g', 'h', 'i'];
  const five = ['5', 'j', 'k', 'l'];
  const six = ['6', 'm', 'n', 'o'];
  const seven = ['7', 'p', 'q', 'r', 's'];
  const eight = ['8', 't', 'u', 'v'];
  const nine = ['9 ', 'w', 'x', 'y', 'z'];
  const ten = ['*'];
  const eleven = ['0'];
  const twelve = ['#'];

  const arrButtons = [
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
    twelve,
  ];

  const matrix = [
    [0, two, three, four, 0, 0, 0, 0, 0, ten, 0, 0],
    [one, 0, three, 0, five, 0, 0, 0, 0, 0, eleven, 0],
    [one, two, 0, 0, 0, six, 0, 0, 0, 0, 0, twelve],
    [one, 0, 0, 0, five, six, seven, 0, 0, 0, 0, 0],
    [0, two, 0, four, 0, six, 0, eight, 0, 0, 0, 0],
    [0, 0, three, four, five, 0, 0, 0, nine, 0, 0, 0],
    [0, 0, 0, four, 0, 0, 0, eight, nine, ten, 0, 0],
    [0, 0, 0, 0, five, 0, seven, 0, nine, 0, eleven, 0],
    [0, 0, 0, 0, 0, six, seven, eight, 0, 0, 0, twelve],
    [one, 0, 0, 0, 0, 0, seven, 0, 0, 0, eleven, twelve],
    [0, two, 0, 0, 0, 0, 0, eight, 0, ten, 0, twelve],
    [0, 0, three, 0, 0, 0, 0, 0, nine, ten, eleven, 0],
  ];

  function search(button) {
    const result = [];
    matrix[button].forEach((item, index) => {
      if (item) {
        result.push(item);
      }
    });
    return result;
  }

  function searchRepeat(first, second) {
    return arrButtons.filter((item) => {
      return !second.includes(item) && item !== first;
    });
  }

  graph.one = {
    1: [one],
    2: [two, three, four, ten],
    3: [searchRepeat(one, search(0))],
  };
  graph.two = {
    1: [two],
    2: [one, three, four, eleven],
    3: [searchRepeat(two, search(1))],
  };
  graph.three = {
    1: [three],
    2: [search(2)],
    3: [searchRepeat(three, search(2))],
  };
  graph.four = {
    1: [four],
    2: [search(3)],
    3: [searchRepeat(four, search(3))],
  };
  graph.five = {
    1: [five],
    2: [search(4)],
    3: [searchRepeat(five, search(4))],
  };
  graph.six = {
    1: [six],
    2: [search(5)],
    3: [searchRepeat(six, search(5))],
  };
  graph.seven = {
    1: [seven],
    2: [search(6)],
    3: [searchRepeat(seven, search(6))],
  };
  graph.eight = {
    1: [eight],
    2: [search(7)],
    3: [searchRepeat(eight, search(7))],
  };
  graph.nine = {
    1: [nine],
    2: [search(8)],
    3: [searchRepeat(nine, search(8))],
  };
  graph.ten = {
    1: [ten],
    2: [search(9)],
    3: [searchRepeat(ten, search(9))],
  };
  graph.eleven = {
    1: [eleven],
    2: [search(10)],
    3: [searchRepeat(eleven, search(10))],
  };
  graph.twelve = {
    1: [twelve],
    2: [search(11)],
    3: [searchRepeat(twelve, search(11))],
  };
};

console.log(mobileRemote('c')); // 6
console.log(mobileRemote('yandex')); // 34
