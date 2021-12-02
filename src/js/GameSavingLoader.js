import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();// возвращается Promise!
    const value = await json(data);
    const saving = new GameSaving(JSON.parse(value));
    return saving;
  }
}
