import dispatcher from '../dispatcher/';
import { CHANGE_TAG } from '../constants/memo';

const action = {
  changeTag(data) {
    dispatcher.dispatch({
      actionType: CHANGE_TAG,
      data
    });
  }
};

export default action;
