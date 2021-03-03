import React, { createContext, useReducer } from 'react';
import axios from 'axios';
// import jwtDecode from "jwt-decode";
import AppReducer from './AppReducer';

const initialState = {
  users: [],
  transactions: [],
  token: null,
  error: null,
  loading: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getToken = () => {
    return localStorage.getItem('token');
  }

  axios.defaults.headers.common["x-auth-token"] = getToken();

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        transactions: state.transactions,
        users: state.users,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
