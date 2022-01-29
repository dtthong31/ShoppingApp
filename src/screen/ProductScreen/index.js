import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import BackgroundView from '../../components/BackgroundView'
import { getListCategorySelectors, getListProductSelectors, getProductsFavoriteSelectors, getTokenSelectors } from '../../redux/selector/productSelectors';
import { getRequestListCategory, getRequestListProduct, getRequestProductFavorite } from '../../redux/thunk/categoryThunkAction';
import ButtonCategory from './components/ButtonCategory';
import ItemList from './components/ItemList';
import { styles } from './styles.ProductScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductScreen() {

    const dispatch = useDispatch();
    const listCategory = useSelector(getListCategorySelectors);
    const listProduct = useSelector(getListProductSelectors);
    const productsFavorite = useSelector(getProductsFavoriteSelectors);
    const token = useSelector(getTokenSelectors);
    const getItem = async () => {
        try {
            const res = await AsyncStorage.getItem('token');
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getItem();
        dispatch(getRequestListCategory());
        dispatch(getRequestListProduct());
        dispatch(getRequestProductFavorite(token));
    }, []);

    const renderItemproduct = (item) => {
        let favorite = productsFavorite.find((product) => product.id === item.id);
        if (favorite) {
            return <ItemList item={item} token={token} checkFavorite={true} />;
        }
        return <ItemList item={item} token={token} checkFavorite={false} />;
    }
    return (
        <BackgroundView style={styles.container}>
            <View>
                <FlatList
                    data={listCategory}
                    contentContainerStyle={styles.category}
                    renderItem={({ item }) => <ButtonCategory categoryItem={item} token={token} />}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                />
            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={styles.styleText}>All Product</Text>
                <FlatList
                    data={listProduct}
                    renderItem={({ item }) => renderItemproduct(item)}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.product}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                />
            </View>
        </BackgroundView>
    )
}
