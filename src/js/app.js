import GameSavingLoader from './GameSavingLoader.js';
/*
GameSavingLoader.load().then((saving) => saving, (error) => error);
*/
/*
(async () => {
  let i = await GameSavingLoader.load();
})();
*/
(async () => {
  try {
    const promisres = await GameSavingLoader.load();
    console.log('promisres :\n', promisres);
    return promisres;
  } catch {
    console.log('error');
  }
})();
