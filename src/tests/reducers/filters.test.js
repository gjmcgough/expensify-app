import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const testDate = moment(0).add(2, 'days');
const testText = "bill";

test('should set the defaults on initialization', () => {
  const state = filtersReducer(undefined, {type: "@@INIT"});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set the sort by to amount', () => {
  const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
  expect(state.sortBy).toEqual('amount');
});

test('should set the sort by to date', () => {
  const state = filtersReducer({ sortBy: 'amount' }, {type: "SORT_BY_DATE"});
  expect(state.sortBy).toEqual('date');
});

test('should set the start date', () => {
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: testDate});
  expect(state.startDate).toEqual(testDate);
});

test('should set the end date', () => {
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: testDate});
  expect(state.endDate).toEqual(testDate);
});

test('should set the text filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: testText});
  expect(state.text).toEqual(testText);
});
