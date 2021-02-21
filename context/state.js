import { createContext, useContext } from "react";
import { useState, useReducer } from "react";
import modalitemReducer from "../reducers/modalitem";
import cartitemsReducer from "../reducers/cartitems";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cartitems, cartDispatch] = useReducer(cartitemsReducer, []);
  const [menuitems, setMenuItem] = useState([
    {
      title: "Spagetti and Meatballs",
      description:
        "Our finest spagetti made with homemade meatballs and sauce.",
      mod1: "Extra sauce",
      mod2: "Bread",
      mod1Add: false,
      mod2Add: false,
      price: 12.99,
    },
    {
      title: "Squid Ink Pasta",
      description: "Rich squid ink sauce on thin noodles with cherry tomatoes",
      mod1: "No tomatoes",
      mod2: "Extra sauce",
      mod1Add: false,
      mod2Add: false,
      price: 7.99,
    },
    {
      title: "Lasagna",
      description: "Layered lasagna with different meats and cheeses",
      mod1: "Extra meat",
      mod2: "Extra cheese",
      mod1Add: false,
      mod2Add: false,
      price: 13.99,
    },
    {
      title: "Margherita Pizza",
      description: "Fire roasted pizza with rich tomatoes and melted cheese",
      mod1: "Add pesto sauce",
      mod2: "Extra cheese",
      mod1Add: false,
      mod2Add: false,
      price: 8.99,
    },
    {
      title: "Mushroom Risotto",
      description: "Creamy, tender Risotto with mushrooms and spinach",
      mod1: "Extra mushrooms",
      mod2: "Add parmesean cheese",
      mod1Add: false,
      mod2Add: false,
      price: 11.99,
    },
  ]);
  const [appmenuitems, setAppMenuItem] = useState([
    {
      title: "Cheese Board",
      description: "Variety of hard and soft cheeses with wheat cracker",
      mod1: "Add sausage",
      mod2: "Add grapes",
      mod1Add: false,
      mod2Add: false,
      price: 7.99,
    },
    {
      title: "Stuffed Olives",
      description: "Olives filled with choice of cheese",
      mod1: "Feta cheese stuffing",
      mod2: "Blue cheese stuffing",
      mod1Add: false,
      mod2Add: false,
      price: 4.99,
    },
    {
      title: "Bread Basket",
      description: "Warm basket of fresh baked Italian bread",
      mod1: "Olive and vinegar",
      mod2: "Extra butter",
      mod1Add: false,
      mod2Add: false,
      price: 4.99,
    },
  ]);
  const [dessertmenuitems, setDessertMenuItem] = useState([
    {
      title: "Tiramisu",
      description: "Rich coffee flavored layered cake",
      mod1: "ice cream",
      mod2: "serve in bowl",
      mod1Add: false,
      mod2Add: false,
      price: 11.99,
    },
    {
      title: "Cannoli",
      description: "Tube-shaped pastry of fried dough",
      mod1: "extra filling",
      mod2: "smaller size",
      mod1Add: false,
      mod2Add: false,
      price: 4.99,
    },
  ]);
  // modal state
  const [modalitem, dispatch] = useReducer(modalitemReducer, []);
  const [show, setShow] = useState(false);

  const [subtotal, setSubtotal] = useState(0);

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
        appmenuitems,
        setAppMenuItem,
        dessertmenuitems,
        setDessertMenuItem,
        subtotal,
        setSubtotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
