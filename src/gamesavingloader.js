import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data
        .then((responce) => {
          const value = json(responce);
          return value;
        })
        .then((value) => {
          resolve(new GameSaving(JSON.parse(value)));
        });
    });
  }
}
