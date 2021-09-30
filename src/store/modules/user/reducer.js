import { ADD_COMMENT } from "./actionTypes";

const initialState = {
  name: "Kenzie",
  comments: ["comentário teste1", "comentário teste2"],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.updatedUser;

    default:
      return state;
  }
};

export default userReducer;
