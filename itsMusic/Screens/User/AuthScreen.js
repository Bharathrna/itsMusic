import React, {useRef, useEffect} from "react";

import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomButton from "../../Components/CustomButton";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as AuthActions from "../../Store/Actions/AuthAction";
import authHandler from "../../Utils/AuthenticationHandler";
import Dimensions from '../../Constants/Dimensions';

const AuthScreen = props => {

    const mounted = useRef(true);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         webClientId: '148638834105-23op28nh367i00jldurm139jfa5pr7u0.apps.googleusercontent.com',
    //       });

    //     return function cleanup() {
    //         mounted.current = false;
    //     };
    // }, []);
    

    return (
        <View style = {styles.container}>
            <ImageBackground
                source={require('../../Assets/Images/bieber.jpg')}
                resizeMode="cover"
                style = {styles.imageStyle}
            >
            <View style = {styles.logoAndButtonView}>
                <View style = {{...styles.introView, marginTop: Dimensions.height / 4}}>
                    <Icon
                        name="spotify"
                        size={52}
                        color="white"
                        style={{
                            paddingBottom: moderateScale(10),
                        }}
                    />
                    <Text style = {styles.introTextStyle}>Millions of songs.</Text>
                    <Text style = {styles.introTextStyle}>Free on Spotify.</Text>
                </View>
                <View style = {styles.customButtonView}>
                    <CustomButton 
                        viewStyle = {{...styles.customButtonStyle, backgroundColor: "#2DE26D"}} 
                        textStyle = {{color: 'black'}} 
                        title = 'Login with Spotify'
                        onPress = {() => authHandler.onLogin()}
                    />
                    {/* <CustomButton 
                        viewStyle = {{...styles.customButtonStyle, backgroundColor: "black", borderColor: 'grey'}} 
                        textStyle = {{color: 'white'}} textWrapper = {{paddingRight: moderateScale(25)}} 
                        title = 'Continue with phone number' 
                        iconNeeded = {true} 
                        imageUrl = {require('../../Assets/Images/phone.jpg')}/>
                    <CustomButton 
                        viewStyle = {{...styles.customButtonStyle, backgroundColor: "black", borderColor: 'grey'}} 
                        textStyle = {{color: 'white'}} 
                        textWrapper = {{paddingRight: moderateScale(25)}} 
                        imageStyle = {{height: moderateScale(20), width: moderateScale(20)}} 
                        title = 'Continue with Google' 
                        imageNeeded = {true} 
                        imageUrl = {require('../../Assets/Images/google.png')}
                       // onPress = {() => dispatch(AuthActions.googleSignIn())}
                       onPress = {() => authHandler.onLogin()}
                     />
                    <CustomButton 
                        viewStyle = {{backgroundColor: 'black', borderColor: 'grey'}} 
                        textStyle = {{color: 'white'}} 
                        title = 'Continue with Facebook' 
                        textWrapper = {{paddingRight: moderateScale(25)}} 
                        imageStyle = {{height: moderateScale(25), width: moderateScale(25)}} 
                        imageNeeded = {true} 
                        imageUrl = {require('../../Assets/Images/facebook.png')}/> */}
                </View>
                {/* <TouchableOpacity activeOpacity={0.7} style = {styles.logInViewStyle}>
                    <Text style = {styles.logInTextStyle}>Log in</Text>
                </TouchableOpacity> */}
            </View>
        </ImageBackground>
        </View>
    )
};

const styles = ScaledSheet.create({
    imageStyle: {
        flex: 1,
        height: '100%',
    },

    customButtonStyle: {
        marginBottom: '125@ms'
    },

    customButtonView: {
        flex: 1,
        justifyContent: 'center',
    },

    logInTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: '14@ms'
    },

    logInViewStyle: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: '20@ms'
    },

    logoAndButtonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    introView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    introTextStyle: {
        textAlign: 'center',
        fontSize: '35@ms',
        color: 'white',
        fontFamily: 'Poppins-SemiBold'
    },

    container: {
       flex: 1,
       backgroundColor: 'black'
    }
});

export default AuthScreen;