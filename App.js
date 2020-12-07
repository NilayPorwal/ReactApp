import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers';
import  HomeScreen  from "./src/components/HomeScreen";

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <HomeScreen/>
      </Provider>
    );
  }
}
