import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data
        .then((buffer) => {
          const value = json(buffer);
          return value;
        })
        .then((buffer) => {
          resolve(new GameSaving(JSON.parse(buffer)));
        });
    });
  }
}
