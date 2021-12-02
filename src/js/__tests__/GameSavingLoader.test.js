import GameSavingLoader from '../GameSavingLoader.js';

test('the data is peanut butter', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
});
