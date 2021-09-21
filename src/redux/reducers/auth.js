import { SET_NAME, UPLOAD_SELFIE } from '../types';

const INITIAL = {
  name: '',
  selfie: [],
}

const AUTH = (state = INITIAL, action) => {
  switch (action.type) {
    case SET_NAME: {
      return {
        ...state,
        name: action.data.name
      }
    }
    case UPLOAD_SELFIE: {
      const { photo, index } = action.data;
      let origin = [].concat(state.selfie);
      origin[index] = photo;
      return {
        ...state,
        selfie: origin
      }
    }
    default:
      return state;
  }
}

export default AUTH;