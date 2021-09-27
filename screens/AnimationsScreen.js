import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import Colors from '../constants/Colors';
import LottieView from 'lottie-react-native';
const AnimationScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            {/* <Animatable.Image 
            animation="fadeInUpBig"
            delay={400}
            source={require('../assets/Splash.jpg')}
            style={styles.logo}
            resizeMode="cover"
            /> */}
         <LottieView source={require('../assets/8507-wallet-animation.json')} autoPlay/>

        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
            delay={1100}>
            <Text style={[styles.title, {
                color: colors.text
            }]}>Stay connected with us!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
             
            <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate('SigninScreen')}>
                
                    <LottieView style={{height:60,left:-10}} source={require('../assets/74772-continue.json')} autoPlay loop/>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default AnimationScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.accent
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: '100%',
      height: '100%'
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      fontSize:16,
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'black',
      fontWeight: 'bold',
      fontSize:26
  }
});