import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { getRequestProductByCategory } from '../../redux/thunk/categoryThunkAction';
import { getProductByCategorySelectors } from '../../redux/selector/productSelectors';
import ItemList from './components/ItemList';
import Ionicons from 'react-native-vector-icons/Ionicons'
const ProductByCategory = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const listProduct = useSelector(getProductByCategorySelectors);
    useEffect(() => {
        dispatch(getRequestProductByCategory(route.params.id));
    }, [])
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back' size={30} />
                </TouchableOpacity>
                <Text style={styles.styleText}>List Product</Text>
            </View>
            <FlatList
                data={listProduct}
                renderItem={({ item }) => <ItemList item={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.product}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    product: {
        marginTop: 10,
        marginHorizontal: 18,
        paddingBottom: 90
    },
    styleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20
    }
})

export default ProductByCategory;
