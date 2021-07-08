function get(obj, path, defaultValue) {
  console.log(obj['a']["b"]);
}

const obj = { 
a: { 
  b: { 
    c: 'd' 
  },
  e: 'f'
}
};

get(obj, 'a.b');