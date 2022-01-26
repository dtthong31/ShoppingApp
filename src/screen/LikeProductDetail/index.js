import React, { useEffect, } from 'react'
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { getRequestProductFavorite, } from '../../redux/thunk/categoryThunkAction';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFavoriteSelectors, getTokenSelectors } from '../../redux/selector/productSelectors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenName } from '../../utils/constant';
import { useNavigation } from '@react-navigation/native';
export default function LikeProductDetail() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const productsFavorite = useSelector(getProductsFavoriteSelectors);
    const token = useSelector(getTokenSelectors);
    console.log(productsFavorite);
    useEffect(() => {
        dispatch(getRequestProductFavorite(token));
    }, [])
    const renderItemFavorite = (item) => {
        return <View style={styles.viewImg}>
            <Text style={styles.textName}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={styles.styleImage} />
            <View style={{
                position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', width: 360,
                height: 320, backgroundColor: ''
            }}>
                <TouchableOpacity style={styles.btnAddStore}>
                    <AntDesign name='plus' size={40} color={'white'} />
                </TouchableOpacity>
            </View>
        </View>
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#4effc4' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
                <Text style={{ color: 'gray', fontSize: 50, fontWeight: 'bold', }}>Favortie</Text>
                <TouchableOpacity onPress={() => { navigation.navigate(screenName.cartDetail) }}>
                    <Ionicons name='ios-cart-outline' size={30} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={productsFavorite}
                renderItem={({ item }) => renderItemFavorite(item)}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />} />
        </View>
    )
}
const styles = StyleSheet.create({
    styleImage: {
        width: 300,
        height: 320,
        transform: [{ rotate: '-30deg' }],
        marginLeft: 10,
        marginTop: 20
    },
    viewImg: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 360,
        height: 320,
        marginLeft: 15
    },
    textName: {
        position: 'absolute',
        fontSize: 30,
        fontWeight: '900',
        color: 'gray',
        marginTop: 10,
        marginLeft: 20
    },
    btnAddStore: {
        backgroundColor: '#f8cd65',
        width: 60,
        height: 60,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

