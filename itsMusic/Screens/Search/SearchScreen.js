import React from 'react';

import {View, Text} from 'react-native';

import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const SearchScreen = props => {
    return (
        <View style = {styles.container}>
            <Text style = {{color: 'white'}}>This is Search screen!!</Text>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});
export default SearchScreen;


