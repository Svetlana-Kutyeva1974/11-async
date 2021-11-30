import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static async load() {
    return await read().then((response) => {
    console.log("response data данные прочитаны\n", response, json(response));
    return json(response);
    });
  }
}