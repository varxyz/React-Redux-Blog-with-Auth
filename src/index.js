import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import IndexPage from './components/indexPage';
import PostNew from './components/posts_new';
import PostEdit from './components/post_edit';
import PostShow from './components/post_show';
import Posts from './components/posts';
import { AUTH_USER } from './actions';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(
  createStore
);
const store = createStoreWithMiddleware(reducers);
if (localStorage.getItem('token')) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="signup" component={Signup} />
        <Route path="signin" component={Signin} />
        <Route path="post/new" component={PostNew} />
        <Route path="edit/:id" component={PostEdit} />
        <Route path="posts/:id" component={PostShow} />;
        <Route path="posts" component={Posts} />;
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
