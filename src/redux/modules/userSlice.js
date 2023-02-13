import { SET_USER, CLEAR_USER, SET_PHOTO_URL } from '../config/types';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}

export function setPhotoURL(photoURL) {
  return {
    type: SET_PHOTO_URL,
    payload: photoURL,
  };
}

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

export default function (state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    case SET_PHOTO_URL:
      return {
        ...state,
        currentUser: { ...state.currentUser, photoURL: action.payload },
        isLoading: false,
      };

    default:
      return state;
  }
}
