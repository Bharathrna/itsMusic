import React from 'react';

import {View, StatusBar, Text, ScrollView} from 'react-native';

import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = props => {
    return (
            <LinearGradient 
            colors={['#222627', 'black', '#343434']}
            //locations={[0, 0.3]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0, y: 1 }} 
            style = {styles.container} 
            >
                <ScrollView>
                <View style = {styles.statusBarView}>
                    <StatusBar translucent={true} backgroundColor={'transparent'} />
                </View>                
                <View>
                    <Text style = {styles.sectionHeaderText}>To get you started</Text>
                </View>
            </ScrollView>
            </LinearGradient>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },

    statusBarView: {
        paddingVertical: '15@ms'
    },

    sectionHeaderText: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: '20@ms',
        paddingTop: '20@ms',
        paddingLeft: '15@ms'
    }
});

export default HomeScreen;


