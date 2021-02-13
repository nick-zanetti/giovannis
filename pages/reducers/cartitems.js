const cartitemsReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_CART":
      return action.cartitems;
    case "ADD_CARTITEM":
      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          mod1: action.mod1,
          mod2: action.mod2,
          mod1Add: action.mod1Add,
          mod2Add: action.mod2Add,
          id: action.id,
        },
      ];
    case "REMOVE_CARTITEM":
      return state.filter((item) => item.id !== action.id);
  }
};

export { cartitemsReducer as default };
