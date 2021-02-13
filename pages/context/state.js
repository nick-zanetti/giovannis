import { createContext, useContext } from "react";
import { useState, useReducer } from "react";
import modalitemReducer from "../reducers/modalitem";
import cartitemsReducer from "../reducers/cartitems";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cartitems, cartDispatch] = useReducer(cartitemsReducer, []);
  const [menuitems, setMenuItem] = useState([
    {
      title: "Spagett",
      description: "Our finest spagett made with homemade meatballs and sauce.",
      mod1: "extra sauce",
      mod2: "bread",
      mod1Add: false,
      mod2Add: false,
    },
    {
      title: "Sandwich",
      description: "You gotta try this sandwich",
      mod1: "extra sauce",
      mod2: "bread",
      mod1Add: false,
      mod2Add: false,
    },
    {
      title: "BFB",
      description: "Perfect late night snack!",
      mod1: "extra sauce",
      mod2: "bread",
      mod1Add: false,
      mod2Add: false,
    },
  ]);
  // modal state
  const [modalitem, dispatch] = useReducer(modalitemReducer, []);
  const [show, setShow] = useState(false);

  return (
    <AppContext.Provider
      value={{
        menuitems,
        setMenuItem,
        cartitems,
        cartDispatch,
        show,
        setShow,
        modalitem,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
