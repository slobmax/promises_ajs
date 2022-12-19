import GameSavingLoader from '../gamesavingloader';

test('Проверка GameSavingLoader.load', (done) => {
  GameSavingLoader.load().then((saving) => {
    const expected = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    const recivied = saving;
    expect(recivied).toEqual(expected);
    done();
  });
});
