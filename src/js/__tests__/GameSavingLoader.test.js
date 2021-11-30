import GameSavingLoader from '../GameSavingLoader.js';

test('the data is peanut butter', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
/*
test('the fetch fails with an error', async () => {
  expect.assertions(0);
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
*/
