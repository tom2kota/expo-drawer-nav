import * as React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ComponentsStack = createStackNavigator();
const ListStack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="HOME">
                {() => (
                    <HomeStack.Navigator>
                        <HomeStack.Screen name="HOME" component={HomeScreen}>
                        </HomeStack.Screen>
                    </HomeStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="COMPONENTS">
                {() => (
                    <ComponentsStack.Navigator>
                        <ComponentsStack.Screen name="COMPONENTS" component={ComponentsScreen}>
                        </ComponentsStack.Screen>
                    </ComponentsStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="LIST">
                {() => (
                    <ListStack.Navigator>
                        <ListStack.Screen name="LIST" component={ListScreen}>
                        </ListStack.Screen>
                    </ListStack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
)

export default App
