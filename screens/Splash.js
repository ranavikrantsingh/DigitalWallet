import React from 'react'
import { StyleSheet, SafeAreaView,Dimensions } from 'react-native'
import Video from 'react-native-video'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Splash = ({navigation}) => {
    
    setTimeout(() => {navigation.replace('SignIn')
        
    }, 5500);
    return (
        <SafeAreaView>
        <Video style={styles.background} source={require('../assets/Splash.mp4')} fullscreen={true}
resizeMode="cover"
/>
        </SafeAreaView>
    )
}

export default Splash

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