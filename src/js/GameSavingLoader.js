import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();// возвращается Promise!
    const value = await json(data);
    return value;
  }
}
