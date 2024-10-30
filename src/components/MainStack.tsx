import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { MessagesScreen } from "./screens/MessagesScreen";
import { MapScreen } from "./screens/MapScreen";
import { UsersScreen } from "./screens/UsersScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Family Search" }}
            />
            <StackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "My Profile" }}
            />
            <StackNavigator.Screen
                name="Search"
                component={SearchScreen}
                options={{ title: "Find Family" }}
            />
            <StackNavigator.Screen
                name="Messages"
                component={MessagesScreen}
                options={{ title: "Messages" }}
            />
            <StackNavigator.Screen
                name="Map"
                component={MapScreen}
                options={{ title: "Family Map" }}
            />
            <StackNavigator.Screen
                name="Users"
                component={UsersScreen}
                options={{ title: "Manage Users" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);