import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTokenSelectors } from '../../redux/selector/productSelectors';
import { useNavigation } from '@react-navigation/native';
import { screenName } from "../../utils/constant"
import { useDispatch, useSelector } from 'react-redux';
import { setTokenSuccess } from '../../redux/actions/productActions';
export default function LoadToken() {
    const token = useSelector(getTokenSelectors);
    const nav = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        getItem();
    }, [])

    getItem = async () => {
        try {
            const res = await AsyncStorage.getItem('token');
            dispatch(setTokenSuccess(res));

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            {token === null ? nav.navigate(screenName.login) : nav.navigate(screenName.home)}
        </>
    )
}
