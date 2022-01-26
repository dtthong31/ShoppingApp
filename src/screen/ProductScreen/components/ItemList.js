import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Text from '../../../components/Text';
import { screenName } from '../../../utils/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getRequestProductFavorite, setRequestLikeproduct, setRequestUnLikeproduct } from '../../../redux/thunk/categoryThunkAction';
import { useDispatch, useSelector } from 'react-redux';
const ItemList = (props) => {
    const { item, token, checkFavorite } = props;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [color, setColor] = useState();
    const [check, setCheck] = useState(checkFavorite);

    const onPress = () => {
        console.log(checkFavorite);
        if (check) {
            setCheck(false);
            setColor('#f93e3e');
            dispatch(setRequestLikeproduct({ id: item.id, token: token }));
            dispatch(getRequestProductFavorite(token));
        } else {
            setCheck(true);
            setColor('gray');
            dispatch(setRequestUnLikeproduct({ id: item.id, token: token }));
            dispatch(getRequestProductFavorite(token));
        }
    }
    useEffect(() => {
        if (check) {
            setColor('#f93e3e');
        } else {
            setColor('gray');
        }
    }, [check])
    return (
        <TouchableOpacity onPress={() => { navigation.navigate(screenName.productDetail, { id: item.id, color: color, check: check, token: token }) }}>
            <View style={{ height: 220, }}>
                <View style={styles.container}>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', paddingRight: 40, paddingTop: 5 }}>
                        <TouchableOpacity onPress={() => onPress()}>
                            <Ionicons name='heart-circle' size={30} color={color} style={{ position: 'absolute', alignItems: 'flex-end' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.styleImageView}>
                        <Image source={{ uri: item.image }} style={styles.styleImage} />
                    </View>
                    <View style={{ marginHorizontal: 10 }} >
                        <Text style={styles.styleText}> {item.name} </Text>
                        <Text style={styles.styleText}> ${item.price} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2e0e0',
        width: 160,
        height: 230,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    styleImage: {
        width: 140,
        height: 150,
        transform: [{ rotate: '-25deg' }],
    },
    styleImageView: {
        justifyContent: 'center',
        paddingLeft: 5,
        paddingTop: 15,

    },
    LogoContainer: {
        width: 157,
        height: 220,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    styleLogoImage: {
        width: 50,
        height: 50,
        borderRadius: 15,
    },
    styleText: {
        color: 'black',
    }
})
export default ItemList;