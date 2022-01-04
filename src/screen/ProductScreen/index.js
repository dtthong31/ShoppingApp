import React, { useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import BackgroundView from '../../components/BackgroundView'
import { getListCategorySelectors, getListProductSelectors } from '../../redux/selector/productSelectors';
import { getRequestListCategory, getRequestListProduct } from '../../redux/thunk/categoryThunkAction';
import ButtonCategory from './components/ButtonCategory';
import ItemList from './components/ItemList';
import { styles } from './styles.ProductScreen';

export default function ProductScreen() {
    const dispatch = useDispatch();
    const listCategory = useSelector(getListCategorySelectors);
    const listProduct = useSelector(getListProductSelectors);
    useEffect(() => {
        dispatch(getRequestListCategory());
        dispatch(getRequestListProduct());
    }, [])
    return (
        <BackgroundView style={styles.container}>
            <View>
                <Text style={styles.styleText}>List Category</Text>
                <FlatList
                    data={listCategory}
                    contentContainerStyle={styles.category}
                    renderItem={({ item }) => <ButtonCategory categoryItem={item} />}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                />
            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
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
        </BackgroundView>
    )
}
