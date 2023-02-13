import { SET_USER } from '../config/types';

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

function userSlice(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
export default userSlice;
