//EXPENSES Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  // console.log('expenseReducer: received action', action);
  switch (action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        };
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default:
    // console.log('expenseReducer: unknown action type', action.type);
      return state;
  }
};
