import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  console.log('вернулось в итоге saving\n', saving);
}, (error) => {
  console.err('error');
});
