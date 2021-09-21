import { SET_NAME, UPLOAD_SELFIE } from '../types';

export const setName = (name) => {
  return {
    type: SET_NAME,
    data: { name }
  }
}

export const uploadPhoto = (photo, index) => {
  return {
    type: UPLOAD_SELFIE,
    data: { photo, index }
  }
}