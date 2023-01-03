const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NARRATIVE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
