import getData from '../data';
import dispatcher from '../dispatcher/';

import { CHANGE_TAG } from '../constants/memo';

const state = getData();
const store = {
  getState() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(state);
      }, 0);
    });
  }
};

dispatcher.register((action) => {
  switch (action.actionType) {
    case CHANGE_TAG:
      console.log(action.data);
      break;

    default:
      break;
  }
});

export default store;
