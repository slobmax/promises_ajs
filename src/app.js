import GameSavingLoader from './gamesavingloader';

GameSavingLoader.load()
  .then((saving) => {
    /* eslint-disable */
    console.log(saving);
  }, (error) => {    
    console.log(error);
  });
