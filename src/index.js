import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';
import {firebaseApp} from './firebase';
import {logUser} from './actions';
import reducer from './reducers';

import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    //console.log('user signed in/up', user);
    const {email} = user;
    store.dispatch(logUser(email));
  }
  else{
    //console.log('user signed out');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/app' component={App} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
