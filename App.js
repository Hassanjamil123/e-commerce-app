import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { legacy_createStore as createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
//import {composeWithDevTools} from 'redux-devtools-extension'
import 'expo-dev-menu';
import DevMenu from "react-native-dev-menu";

import productReducers from './store/reducers/products'
import cartReducers from './store/reducers/cart'
import ordersReducers from './store/reducers/orders'

import RootTabs from './navigation/ShopNavigator'


// if (__DEV__) {
//   DevMenu.addItem("Say Hello", () => alert("Hello!"));
// }

const rootReducer = combineReducers({
  products: productReducers,
  cart: cartReducers,
  orders: ordersReducers
}); 
 
const store = createStore(rootReducer)

// SplashScreen.preventAutoHideAsync(); 
 
export default function App() {

  const [fontsLoaded] = useFonts({ 
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>  
      <RootTabs onLayoutRootView={onLayoutRootView} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
