export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const reducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.REMOVE_USER:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
