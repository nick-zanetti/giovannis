import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cartitems, setCartItem] = useState([]);
  const [menuitems, setMenuItem] = useState([
    {
      title: "Spagett",
      description: "Our finest spagett made with homemade meatballs and sauce.",
    },
    {
      title: "Sandwich",
      description: "You gotta try this sandwich",
    },
    {
      title: "BFB",
      description: "Perfect late night snack!",
    },
  ]);
  // modal state
  const [modalItem, setModalItem] = useState("");
  const [show, setShow] = useState(false);

  return (
    <AppContext.Provider
      value={{
        menuitems,
        setMenuItem,
        cartitems,
        setCartItem,
        show,
        setShow,
        modalItem,
        setModalItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
