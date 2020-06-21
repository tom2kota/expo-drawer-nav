import * as React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from "./src/screens/ImageScreen";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ComponentsStack = createStackNavigator();
const ListStack = createStackNavigator();
const ImageStack = createStackNavigator();
const CounterStack = createStackNavigator();
const ColorStack = createStackNavigator();

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
            <Tab.Screen name="IMAGES">
                {() => (
                    <ImageStack.Navigator>
                        <ImageStack.Screen name="IMAGES" component={ImageScreen}>
                        </ImageStack.Screen>
                    </ImageStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="COUNTER">
                {() => (
                    <CounterStack.Navigator>
                        <CounterStack.Screen name="COUNTER" component={CounterScreen}>
                        </CounterStack.Screen>
                    </CounterStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="COLOR">
                {() => (
                    <ColorStack.Navigator>
                        <ColorStack.Screen name="COLOR" component={ColorScreen}>
                        </ColorStack.Screen>
                    </ColorStack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
)

export default App
