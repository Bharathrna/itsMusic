import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import AuthScreen from './Screens/User/AuthScreen'
import SplashScreen from 'react-native-lottie-splash-screen';
import AuthReducer from './Store/Reducers/AuthReducer';
import { watcherSaga } from './Store/Sagas/RootSaga';
import AppNavigator from './Navigation/AppNavigator';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: AuthReducer
});

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

const App: () => Node = () => {

  useEffect(() => {
    SplashScreen.hide(); 
  }, []);

  return (
      <Provider store = {store}>
        <AuthScreen/>
      </Provider>
    );
};

const styles = StyleSheet.create({
});

export default App;



