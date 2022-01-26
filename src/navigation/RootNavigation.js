import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from 'react-native';
import { CartDetail, LikeProductDetail, LoadToken, LoginScreen, ProductByCategory, ProductDetail, ProductScreen, ProfileDetail, SignUpDetail, StartApp } from "../screen";
import { screenName } from "../utils/constant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS } from "../themes/style";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => {
    return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.lightBack },
        tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === screenName.product) {
                iconName = 'home';
            }
            else if (route.name === screenName.cartDetail) {
                iconName = 'shopping-cart';
            }
            else if (route.name === screenName.likeProduct) {
                iconName = 'heart';
            }
            else {
                iconName = 'user';
            }
            return (
                <View style={[styles.styleIcon, { backgroundColor: focused ? COLORS.lightPurple : "transparen" }]}>
                    <Entypo name={iconName} color={COLORS.white} size={22} />
                </View>
            );
        }
    }
}
const RootTab = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name={screenName.product} component={ProductScreen} />
            <Tab.Screen name={screenName.cartDetail} component={CartDetail} />
            <Tab.Screen name={screenName.likeProduct} component={LikeProductDetail} />
            <Tab.Screen name={screenName.profile} component={ProfileDetail} />
        </Tab.Navigator>
    )
}
const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.login} component={LoginScreen} />
            <Stack.Screen name={screenName.productDetail} component={ProductDetail} />
            <Stack.Screen name={screenName.productByCategory} component={ProductByCategory} />
            <Stack.Screen name={screenName.signUp} component={SignUpDetail} />
            <Stack.Screen name={screenName.home} component={RootTab} />
        </Stack.Navigator >
    );
}
const styles = StyleSheet.create({
    styleIcon: {
        width: "50%",
        height: "80%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default RootNavigation;