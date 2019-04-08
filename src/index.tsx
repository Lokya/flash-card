import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import './index.less';

import Home from './page/Home/index';
import Study from './page/Study/index';
import FlashCard from './page/FlashCard/index';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <div>
      <Switch>
        <Route path={'/flash-card'} title="flash-card" component={FlashCard}/>
        <Route path={'/study'} title="study" component={Study}/>
        <Route path={'/'} title="home" component={Home}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
