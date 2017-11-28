
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import {  createRouter,NavigationContext,  NavigationProvider, StackNavigation,} from '@expo/ex-navigation';
import { Provider } from 'react-redux';
import Router from './navigation/router';
import Store from './redux/store';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const navigationContext = new NavigationContext({
    router: Router,
    store: Store
  })
  


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
          <NavigationProvider  router ={Router} context={navigationContext}>
              <StackNavigation  
              id="root"
              navigatorUID="root" 
              initialRoute={Router.getRoute('layout')} />
           </NavigationProvider>
      </Provider>
    );
  }
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
