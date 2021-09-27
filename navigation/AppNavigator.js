import React from "react";
import {Dimensions,View,Image,Platform,ToastAndroid,Alert} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/SigninScreen";
import SplashScreen from "../screens/SplashScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Notifications,{screenOptions as NotificationOptions} from "../screens/Notifications";
import { NavigationContainer,DrawerActions,StackActions } from '@react-navigation/native';
import AnimationScreen from "../screens/AnimationScreen";
import Colors from '../constants/Colors';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const MyStack = createStackNavigator();
const MyDrawer = createDrawerNavigator();


const defaultScreenOptions = {
  headerShown: true,
};

const SplashScreenOptions={
  headerShown: false,
}

const SignInScreenOptions={
  headerShown: false,
}

const RegisterScreenOptions={
  headerShown: false,
}
const AnimationScreenOptions={
  headerShown: false,
}


export const AppNavigator = () => {
  
  return (
<NavigationContainer independent={true}>

     <MyStack.Navigator initialRouteName={SplashScreen} screenOptions={defaultScreenOptions} >
      
      <MyStack.Screen
        name=" "
        component={SplashScreen}
        options={SplashScreenOptions}
      />
      <MyStack.Screen
      name="AnimationScreen"
      component={AnimationScreen}
      options={AnimationScreenOptions}
      />
      
      <MyStack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={SignInScreenOptions}
      />
       <MyStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={RegisterScreenOptions}
      />
        
    </MyStack.Navigator>
    </NavigationContainer>
  );
};
// export const DrawerScreen =({navigation})=>{
//    const doUserLogOut = async function () {
//     return await Parse.User.logOut()
//       .then(async () => {
//         // To verify that current user is now empty, currentAsync can be used
//         const currentUser = await Parse.User.currentAsync();
//         if (currentUser === null) {
//           Platform.OS === 'ios' ? Alert.alert('Success!', 'No user is logged in anymore!'):null;
//           Platform.OS ==='android'? ToastAndroid.show(`Success! You've succesfully logged out`, ToastAndroid.SHORT):null;

//         }
//         // Navigation dispatch calls a navigation action, and popToTop will take
//         // the user back to the very first screen of the stack
//         navigation.dispatch(StackActions.popToTop());
//         return true;
//       })
//       .catch((error) => {
//         Alert.alert('Error!', error.message);
//         return false;
//       });
//   };
//   return(
//   <MyDrawer.Navigator initialRouteName="New Order" overlayColor='1' drawerType={'front'} drawerStyle={{backgroundColor:Colors.primary,opacity:0.9}}  drawerContentOptions={{
//     activeTintColor:'white',
//     activeBackgroundColor: Colors.accent,
//     inactiveTintColor: 'white',
//     inactiveBackgroundColor: 'transparent',
//     labelStyle:{fontSize:16,marginLeft:5} }}   
//   drawerContent={props => {
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <View style={{flexDirection:'row',marginTop:'30%'}}>
//                 <DrawerItem label=""  icon={() => <MaterialCommunityIcons color='white' size={30} name={'car-multiple'} />  }/>
//                 <DrawerItem label="" style={{marginLeft:-80}} icon={() =><FontAwesome5Icon color='white' size={25} name={'bus-alt'} />
//                 }/>
//                <DrawerItem label="" style={{marginLeft:-80}} icon={() => <MaterialCommunityIcons color='white' size={30} name={'truck-check-outline'} />
//                 }/>
//               <DrawerItem label="" style={{marginLeft:-80}} icon={() => <MaterialCommunityIcons color='white' size={30} name={'tanker-truck'} />
//                 }/>
//                 <DrawerItem label="" style={{marginLeft:-80}} icon={() => <MaterialCommunityIcons color='white' size={30} name={'crane'} />
//                 }/>
//                 <DrawerItem label="" style={{marginLeft:-80}} icon={() => <MaterialCommunityIcons color='white' size={30} name={'factory'} />
//                 }/>
//                 </View>
//         <DrawerItem label="Logout" activeTintColor={Colors.accent} activeBackgroundColor='white' inactiveTintColor='white' inactiveBackgroundColor='transparent' style={{backgroundColor:'transparent',marginTop:'0%'}}  onPress={() => doUserLogOut()} />
//       </DrawerContentScrollView>
//     )
//   }} screenOptions={defaultScreenOptions}>

//     <MyDrawer.Screen name="Profile" component={Profile} options={screenOptions}  />
//     <MyDrawer.Screen name="New Order" component={NewOrder} options={{headerShown:false}}/>
//     <MyDrawer.Screen name="My Orders" component={MyOrders} options={screenOptions}  />
//     <MyDrawer.Screen name="My Address" component={Address} options={screenOptions}  />
//     <MyDrawer.Screen name="My Wallet" component={Wallet} options={screenOptions}  />
//     <MyDrawer.Screen name="Order Statistics" component={OrderStats} options={screenOptions} />
//     <MyDrawer.Screen name="Contact Us" component={Contact} options={screenOptions} />
//     <MyDrawer.Screen name="Grievances" component={Grievances} options={screenOptions} />
//     <MyDrawer.Screen name="FAQs" component={FAQs} options={screenOptions} />
//     {/* <MyDrawer.Screen name="OrderPage" component={OrderPage} options={OrderPageScreenOptions} /> */}

//     </MyDrawer.Navigator>)
// };
export const screenOptions = ({navigation}) => {
  return {
    headerTitle: () => (
      <Image style={{alignSelf:'center',height:Dimensions.get('window').height*0.07,width:200}} source={require('../assets/logo.png')}/>

      ),
    headerStyle:{backgroundColor:Colors.accent,borderBottomWidth:1},
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        {/* <Item
          title="menu"
          Colors ='black'
          IconComponent={Logo}
          iconName={Platform.OS === "android" ? "menu" : "menu"}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        /> */}
      </HeaderButtons>
    ),
   
    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Notifications"
    //       IconComponent={Logo}
    //       iconName={Platform.OS === "android" ? "bell" : "bell"}
    //       onPress={() => {
    //        navigation.navigate("Notifications");
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  };
};