//import liraries
import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './Src/Navigations/Routes';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import store from './Src/redux/store';
import { changeLang } from './Src/redux/reducers/appsettings';
import strings from './Src/Constants/lang';
// create a component
const App = () => {
const {dispatch}=store;
  useEffect(()=>{
    dispatch(changeLang('ar'));
    strings.setLanguage('ar');
  },[])
  return (
    // <View style={styles.container}>
      <Provider store={store}>
      <Routes/>
      </Provider>
    // </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
