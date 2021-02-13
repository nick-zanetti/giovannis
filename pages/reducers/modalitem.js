import { v4 as uuidv4 } from "uuid";

const modalitemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MODAL_ITEM":
      return {
        title: action.title,
        description: action.description,
        buttonText: action.buttonText,
        mod1: action.mod1,
        mod2: action.mod2,
        mod1Add: action.mod1Add,
        mod2Add: action.mod2Add,
        id: uuidv4(),
      };
    case "TOGGLE_MOD_1":
      return {
        ...state,
        mod1Add: !state.mod1Add,
      };
  }
};

export { modalitemReducer as default };
