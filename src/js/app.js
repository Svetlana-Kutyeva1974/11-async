import GameSavingLoader from './GameSavingLoader.js';
/*
(async () => {
  let i = await GameSavingLoader.load();
})();
*/
(async () => {
  try {
    const promisres = await GameSavingLoader.load();
    return promisres;
  } catch {
    return new Error('error');
  }
})();
