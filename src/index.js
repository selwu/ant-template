const obj = {
  ru: 'someRu',
  en: 'someEn',
  es: 'someEs',
};

//  [
//   {langauge: 'ru' , text: 'someRu'},
//   {langauge: 'en' , text: 'someEn'},
//   {langauge: 'es' , text: 'someEs'},
//  ]

console.log(Object.entries(obj));

const arr = Object.entries(obj).reduce((result, [langauge, text]) => {
  const newObj = { langauge, text };
  result.push(newObj);
}, []);

console.log(arr);
