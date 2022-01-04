import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CartDetail, LikeProductDetail, LoginScreen, ProductByCategory, ProductDetail, ProductScreen, ProfileDetail, SignUpDetail, StartApp } from "../screen";
import { screenName } from "../utils/constant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={screenName.product} component={ProductScreen} />
            <Tab.Screen name={screenName.cartDetail} component={CartDetail} />
            <Tab.Screen name={screenName.likeProduct} component={LikeProductDetail} />
        </Tab.Navigator>
    )
}
const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.login} component={LoginScreen} />
            <Stack.Screen name={screenName.productDetail} component={ProductDetail} />
            <Stack.Screen name={screenName.productByCategory} component={ProductByCategory} />
            <Stack.Screen name={screenName.profile} component={ProfileDetail} />
            <Stack.Screen name={screenName.signUp} component={SignUpDetail} />
            <Stack.Screen name={screenName.home} component={RootTab} />
        </Stack.Navigator >
    );
}

export default RootNavigation;