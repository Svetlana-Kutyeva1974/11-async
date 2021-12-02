import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const promisres = await GameSavingLoader.load();
    return promisres;
  } catch {
    return new Error('error');
  }
})();
