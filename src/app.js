// install > import > use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    DASHBOARD
  </div>
);

const AddExpensePage = () => (
  <div>
    EXPENSE
  </div>
);

const EditExpensePage = () => (
  <div>
    EDIT
  </div>
);

const  HelpPage = () => (
  <div>
    HELP
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
