import json from '../parser.js';

test('the data is parser', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const str = String.fromCharCode.apply(null, new Uint16Array(data));
  const value = await json(data);
  expect(value).toEqual(str);
});
