import React from 'react'
import { StyleSheet,KeyboardAvoidingView, Text,Pressable, View } from 'react-native'
import { TextInput } from 'react-native-paper';

const SignIn = () => {
    return (
        <KeyboardAvoidingView>
            <TextInput
                style={styles.txtInput}
                value={username}
                mode='flat' //mode='outlined' for the google type and removed the background as  'transparent' for the outlined
                theme={{ colors: { primary: Colors.accent, background: 'transparent' } }}
                outlineColor={Colors.accent}
                label="Enter your email Address"
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
            />
            <TextInput
                style={styles.txtInput1}
                value={password}
                mode='flat' //mode='outlined' for the google type and removed the background as  'transparent' for the outlined
                outlineColor={Colors.accent}
                theme={{ colors: { primary: Colors.accent, background: 'transparent' } }}
                label={'Password'}
                secureTextEntry={!showPassword}
                onChangeText={(text) => setPassword(text)}
            />
            <ButtonComponent name="Sign in" onPress={() => ()} />
            <View style={{flexDirection:'row'}}>
           <Pressable
          onPress={()=> doUserPasswordReset()}
          children={({ pressed }) => (
          <Text style={{     textDecorationLine: 'underline',
          marginLeft:18,fontSize:16,fontWeight:'bold',color: pressed ? Colors.accent : 'gray'}}>
Forgot password ?
          </Text>
        )}/>
            <Pressable
           onPress={()=>navigation.navigate('RegisterScreen')}
        children={({ pressed }) => (
          <Text style={{textDecorationLine: 'underline',
          marginHorizontal:Dimensions.get('window').width/2.9,fontSize:16,fontWeight:'bold',color: pressed ? Colors.accent : 'gray'}}>
New User?
          </Text>
        )}/>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SignIn

const styles = StyleSheet.create({
    input:{
        marginTop:30
    },
    txtInput:{
    //  marginVertical:Dimensions.get('window').height*0.01,
      width:'90%',
      left:16,
      fontSize:16
    },
    txtInput1:{
      marginVertical:Dimensions.get('window').height*0.01,
       width:'90%',
       left:16,
       fontSize:16
     },
    toggler:{
      position: 'absolute',
      marginHorizontal:Dimensions.get('window').width*0.83,
      marginVertical:Dimensions.get('window').height*0.080,
      },
      toggler1:{
        position: 'absolute',
        marginLeft:Dimensions.get('window').width*0.83,
        marginVertical:Dimensions.get('window').height*0.13,
        },
});
