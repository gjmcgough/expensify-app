import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter }  from '../../actions/filters';

test('should generate setStartDate action object', () => {
 const action = setStartDate(moment(0));
 expect(action).toEqual({
   type: 'SET_START_DATE',
   startDate: moment(0)
 });
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should genereate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should genereate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate setTextFilter action object', () => {
  const action = setTextFilter('bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  });
});

test('should generate setTextFilter action object with DEFAULT', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
