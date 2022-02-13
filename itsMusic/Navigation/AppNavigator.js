import React from 'react';
import { BottomNavigator } from './MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <BottomNavigator/>
        </NavigationContainer>
    )
};

export default AppNavigator;