export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload,
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'SET_DATE':
      return {
        ...state,
        date: {
          day: action.payload.day,
          month: action.payload.month,
          year: action.payload.year,
        },
      };
    default:
      return state;
  }
};
