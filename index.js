/* 

** Core concepts

1.state
2.action => type,payload
3.reducer
4.store => getState(),dispatch(),subscribe()

*/

/*

** Multiple Reducer

*/

const { createStore, combineReducers } = require("redux");

//constants

const ADD_PRODUCT = "ADD_PRODUCT";

/* state */

//Products state

const products = {
  products: ["t-shirt"],
  totalProducts: 1,
};

// Cart state

const cart = {
  cart: ["pant", "sports shoes"],
  totalProducts: 2,
};

/* Action */

//action for products

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const addCart = (cart) => {
  return {
    type: "ADD_CART",
    payload: cart,
  };
};

/* Reducer */

//products reducer
const productsReducer = (state = products, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        totalProducts: state.totalProducts + 1,
      };

    default:
      return state;
  }
};

//cart Reducer

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        cart: [...state.cart, action.payload],
        totalProducts: state.totalProducts + 1,
      };

    default:
      return state;
  }
};

//Combine reducers

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
});

//store

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("nailpolish"));
store.dispatch(addCart("nail"));

/* 

***Example using  PAYLOAD 
const { createStore } = require("redux");

const userInfo = {
  user: ["Sarafat"],
  totalUser: 1,
};

//action

const addUser = (user) => {
  return {
    type: "ADD",
    payload: user,
  };
};

const userReducer = (state = userInfo, action) => {
  if (action.type === "ADD") {
    return {
      user: [...state.user, action.payload],
      totalUser: state.totalUser + 1,
    };
  }
};

const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("ali"));

*/

/*

*** Example using  PAYLOAD with counter


const { createStore } = require("redux");

//define constant
const INCREMENT = "INCREMENT";
const ADD_USER = "ADD_USER";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// state

// const count = {
//   count: 0,
// };

const userCount = {
  user: ["ali"],
  totalUser: 1,
};
//action => type,payload

const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// reducer

const countReducer = (state = count, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      state;
  }
};

const userReducer = (state = userCount, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        totalUser: state.totalUser + 1,
      };
  }
};

//store

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//dispatch
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(addUser("adir"));
store.dispatch(addUser("sarafat"));


*/
