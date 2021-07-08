function get(obj, path, defaultValue) {
  return path.split('.').reduce((res, item) => {
    if (res === undefined) {
      return undefined;
    }
    if(res[item] === undefined && defaultValue) {
      return defaultValue;
    } 
    return res[item];
  }, obj)

}

const obj = { 
a: { 
  b: { 
    c: 'd' 
  },
  e: 'f'
}
};

console.log(get(obj, 'a.b.x', 'ok'));