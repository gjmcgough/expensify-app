import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'ghbkl',
    description: 'January rent',
    notes: 'paid late, dammit....',
    amount: 100000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
