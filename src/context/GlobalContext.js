import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {id: 1, name: 'Pizza', amount: -25, day: 26, month: 3, year: 2020},
    {id: 2, name: 'Gas', amount: -23, day: 26, month: 3, year: 2020},
    {
      id: 3,
      name: 'Netflix',
      amount: -10,
      day: 26,
      month: 3,
      year: 2020,
    },
    {id: 4, name: 'Income', amount: 40, day: 24, month: 3, year: 2020},
    {
      id: 5,
      name: 'Pay check',
      amount: 120,
      day: 26,
      month: 3,
      year: 2020,
    },
    {
      id: 5,
      name: 'Milk shake',
      amount: -24,
      day: 24,
      month: 3,
      year: 2020,
    },
  ],
  date: {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }
  function setDate(date) {
    dispatch({
      type: 'SET_DATE',
      payload: date,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        date: state.date,
        setDate,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
