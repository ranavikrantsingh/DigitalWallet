import "react-native-gesture-handler";
import React,{useEffect} from "react";
// import Parse from 'parse/react-native.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View,StatusBar,LogBox,Dimensions } from "react-native";
import Colors from "./constants/Colors";
import MainNavigator from "./navigation/MainNavigator";
// import OneSignal from 'react-native-onesignal';

// Parse.setAsyncStorage(AsyncStorage);
// Parse.initialize('YVrd5P0VRLsrhhXeqIcerPrnaxeTktEVqhhn3F8I', 'sxN97lrKi33BdQdvbbomVVXHSD28wLGF2mmzViHN');
// Parse.serverURL = 'https://parseapi.back4app.com/';

const App = (props) => {
  
  // useEffect(() => {
  //   OneSignal.setAppId('2f978cc9-abbf-4549-b452-a087d45cfc69', {
  //     kOSSettingsKeyAutoPrompt: false,
  //     kOSSettingsKeyInAppLaunchURL: false,
  //     kOSSettingsKeyInFocusDisplayOption: 2,
  //   });
  //   OneSignal.setLogLevel(6, 0);
  // }, []);
  
  LogBox.ignoreAllLogs()

  return (
    <View style={styles.screen}>
          <StatusBar  backgroundColor={Colors.accent} barStyle="light-content"/>
      <MainNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
