import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './Home';
import BookDetail from './BookDetail';
import BookList from './BookList';
import ReadingList from './ReadingList';

const RoutingConfig = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
	  <Route path="/books/:bookid.html" component={BookDetail}/>
	  <Route path="/books/list/:type?/:key?/:page?" component={BookList}/>
	  <Route path="/books/readings/:page?" component={ReadingList} />
    </div>
  </Router>
);

export default RoutingConfig;
