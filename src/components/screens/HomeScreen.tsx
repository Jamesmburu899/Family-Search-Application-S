import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

export function HomeScreen({ navigation }: { navigation: FrameNavigationProp<any, "Home"> }) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Family Search
            </label>
            <button
                className="text-lg text-blue-600 mb-4"
                onTap={() => navigation.navigate("Profile")}
            >
                My Profile
            </button>
            <button
                className="text-lg text-blue-600 mb-4"
                onTap={() => navigation.navigate("Search")}
            >
                Find Family
            </button>
            <button
                className="text-lg text-blue-600 mb-4"
                onTap={() => navigation.navigate("Messages")}
            >
                Messages
            </button>
            <button
                className="text-lg text-blue-600 mb-4"
                onTap={() => navigation.navigate("Map")}
            >
                Family Map
            </button>
            <button
                className="text-lg text-blue-600 mb-4"
                onTap={() => navigation.navigate("Users")}
            >
                Manage Users
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
});