import React from 'react';

export default (props) => (
  <div>
    {console.log("PROPSSSSS " + props.expensesCount())}
    {console.log("EXPENSES " + props.expenses)}
    {
      props.expensesCount(props.expenses) > 1 ? (
        <h3>Viewing {props.expensesCount(props.expenses)} expenses totalling {props.expensesTotal(props.expenses)}</h3>
      ) : (
        <h3>Viewing {props.expensesCount(props.expenses)} expense totalling {props.expensesTotal(props.expenses)}</h3>
      )
    }
  </div>
);
