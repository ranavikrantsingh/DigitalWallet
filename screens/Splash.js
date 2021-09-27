import React from 'react'
import { StyleSheet, SafeAreaView,Dimensions } from 'react-native'
import Video from 'react-native-video'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SplashScreen = ({ navigation }) => {
    
    setTimeout(() => {
        navigation.replace('SigninScreen')
        
    }, 3500);
    return (
        <SafeAreaView>
            <Video style={styles.background} source={require('../assets/Splash.mp4')} fullscreen={true}
                resizeMode="cover"
            />
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    background:{
        position: 'absolute',
        height:800,
        width:windowWidth,
        top:0,
        left:0,
        right:0,
        bottom:0,
}
    
})