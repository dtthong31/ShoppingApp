import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { getRequestProductByCategory } from '../../redux/thunk/categoryThunkAction';
import { getProductByCategorySelectors } from '../../redux/selector/productSelectors';
const ProductByCategory = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const listProduct = useSelector(getProductByCategorySelectors);
    useEffect(() => {
        dispatch(getRequestProductByCategory(route.params.id));
    }, [])
    return (
        <View>
            <Text style={styles.styleText}>List Product</Text>
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
        paddingVertical: 20
    },
    styleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20
    }
})

export default ProductByCategory;
