import { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = { users };
export const Context = createContext({});

const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.random();
    return {
      ...state,
      users: [...state.users, user],
    };
  },
  updateUser(state, action) {
    const updated = action.payload;
    return {
      ...state,
      users: state.users.map(u => u.id === updated.id ? updated : u)
    };
  },
  deleteUser(state, action) {
    const user = action.payload;
    return {
      ...state,
      users: state.users.filter(u => u.id !== user.id)
    };
  },
};

export default function ContextProvider({ children }) {

  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
