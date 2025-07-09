const api:string =  'https://api.dictionaryapi.dev/api/v1/entries/en/<word name>';
//initialization of variables
const inputBar = document.querySelector('#wordInput') as HTMLInputElement;
const submitBtn =  document.querySelector('button') as HTMLButtonElement;
const wordText = document.querySelector('#wordText') as HTMLElement;
const phonetic = document.querySelector('#wordPhonetic') as HTMLElement;
const pos = document.querySelector('#wordPOS') as HTMLElement;
const wordSynonyms = document.querySelector('#wordSynonyms') as HTMLElement;


