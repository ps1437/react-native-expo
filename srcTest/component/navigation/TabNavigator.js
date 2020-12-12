import React from 'react';
import { View, StyleSheet, Dimensions, Animated, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="profile " onPress={() => navigation.navigate("profile", { name: "Praveen" })} />
        </View>
    );
}


const ProfileScreen = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile  Screen</Text>
            <Text> name from HomeScreen params </Text>
            <Button title="home" onPress={() => navigation.navigate("home")} />
        </View>
    );
}


const Stack = createStackNavigator();

const StackNavigator = () => (

    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#009688",
            },
            headerTintColor: "#fff",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS

        }}
    >
        <Stack.Screen
            options={{
                title: 'Home',


            }}

            name="home" component={HomeScreen} />
        <Stack.Screen
            options={({ route }) => ({ title: route.params.name })}

            name="profile" component={ProfileScreen} />

    </Stack.Navigator>
)

const Tab = createMaterialBottomTabNavigator();

const AppTabNavigator = () => (
    <Tab.Navigator
        barStyle={{ backgroundColor: '#694fad' }}
        screenOptions={({ route }) => ({
            activeTintColor: "black",
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'ios-search' : 'ios-search';
                }


                return <Ionicons name={iconName} size={24} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: "#00695C",
            inactiveTintColor: "#26A69A",
            activeBackgroundColor: "#eee",
            inactiveBackgroundColor: "#fff",
        }}
    >
        <Tab.Screen

            options={{
                tabBarColor: "#009688",
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                tabBarBadge: 3,
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}

            name="Home" component={StackNavigator} />
        <Tab.Screen
            options={{
                tabBarColor: "#00695C",
            }}
            name="Settings" component={ProfileScreen} />
        <Tab.Screen
            options={{
                tabBarColor: "#26A69A",
            }}
            name="Search" component={ProfileScreen} />
        <Tab.Screen
            options={{
                tabBarColor: "#2196F3",
            }}
            name="Settinsgs" component={ProfileScreen} />

    </Tab.Navigator>)



function TabNavigator() {
    return (
        <NavigationContainer>
            <AppTabNavigator />
        </NavigationContainer>
    );
}



export default TabNavigator;