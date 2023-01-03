import { createStore } from "redux";

const initialState = {
  narrative: [
    {
      id: 1,
      para: 1,
      error: "17-Apr-2019",
      suggestion: "17-Apr-20",
      errorType: "in progress",
      category: 1,
      StartPos: "30",
      EndPos: "40",
      operation: "in progress",
      frontEndAction: "in progress",
      paraContent: "Initial information received on 17-Apr-2019 regarding..",
    },
    {
      id: 2,
      para: 2,
      error: "male",
      suggestion: "female",
      errorType: "in progress",
      category: 1,
      StartPos: "45",
      EndPos: "48",
      operation: "in progress",
      frontEndAction: "in progress",
      paraContent:
        "This case involves a 62 years old male patient had hyperglycemia.",
    },
    {
      id: 3,
      para: 3,
      error: "includes",
      suggestion: "included",
      errorType: "in progress",
      category: 1,
      StartPos: "26",
      EndPos: "32",
      operation: "in progress",
      frontEndAction: "in progress",
      paraContent: "The patient's medical history includes disability.",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export default store;
