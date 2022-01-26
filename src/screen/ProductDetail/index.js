import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import Text from '../../components/Text'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenName } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { getRequestProductByID, getRequestProductFavorite, setRequestLikeproduct, setRequestUnLikeproduct } from '../../redux/thunk/categoryThunkAction'
import { getProductByIDSelectors } from '../../redux/selector/productSelectors'
import BackgroundView from '../../components/BackgroundView'
import AntDesign from 'react-native-vector-icons/AntDesign'
const ProductDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const product = useSelector(getProductByIDSelectors);
    const [count, setCount] = useState(1);
    const [color, setColor] = useState(route?.params?.color);
    const [check, setCheck] = useState(route?.params?.check);

    const onPress = () => {
        if (check) {
            setCheck(false);
            setColor('#f93e3e');
            dispatch(setRequestLikeproduct({ id: route?.params?.id, token: route?.params?.token }));
            dispatch(getRequestProductFavorite(route?.params?.token));
        } else {
            setCheck(true);
            setColor('gray');
            dispatch(setRequestUnLikeproduct({ id: route?.params?.id, token: route?.params?.token }));
            dispatch(getRequestProductFavorite(route?.params?.token));
        }
    }
    useEffect(() => {

        dispatch(getRequestProductByID(route?.params?.id));
    }, [])
    useEffect(() => {
        if (check) {
            setColor('#f93e3e');
        } else {
            setColor('gray');
        }
    }, [check])
    const handleButtonAdd = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            return;
        }

    }
    return (
        <BackgroundView style={{ flex: 1, backgroundColor: '#f0f0f2' }}>
            <View style={styles.topContent} >
                <View style={styles.iconsView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={30} />
                    </TouchableOpacity>
                    <Text style={styles.styleTextBanner}>Running shose</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate(screenName.cartDetail) }}>
                        <Ionicons name='ios-cart-outline' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewContent}>

                    <View style={styles.container}>
                        <View style={styles.styleImageView}>
                            <Image source={{ uri: product.image }} style={styles.styleImage} />
                        </View>
                        <View style={styles.textTopContent} >
                            <View style={styles.viewNameAndPrice}>
                                <Text style={[styles.styleText]}> {product.name} </Text>
                                <View style={styles.viewTextPrice}>
                                    <Text style={[styles.styleText, { color: '#ffce68', textAlign: 'center' }]}> ${product.price} </Text>
                                </View>
                            </View>
                            <View style={styles.viewSize}>
                                <Text style={styles.styleText}>Size:</Text>
                                <FlatList data={product.size}
                                    horizontal={true}
                                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity style={styles.btnSize}>
                                            <Text style={[styles.styleText, { color: '#ffce68' }]}>{item}</Text>
                                        </TouchableOpacity>
                                    } />
                            </View>
                        </View>
                        <View style={[styles.likeProduct, StyleSheet.absoluteFill]}>
                            <TouchableOpacity onPress={() => onPress()}>
                                <Ionicons name='heart-circle' size={60} color={color} style={styles.btnLike} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContent} >
                <View style={styles.viewDescription}>
                    <Text style={styles.styleText}>Description</Text>
                    <AntDesign name='star' size={30} color={'#f8cd65'} />
                </View>
                <ScrollView>
                    <Text style={styles.styleTextBottomContent}>{product.description}</Text>
                </ScrollView>
                <View style={styles.viewBottom}>
                    <View style={styles.viewTotalAndCount}>
                        <View style={styles.viewCount}>
                            <TouchableOpacity onPress={handleButtonAdd}>
                                <AntDesign name='minuscircleo' size={24} color={'black'} />
                            </TouchableOpacity>
                            <Text style={styles.textCount}>{count}</Text>
                            <TouchableOpacity onPress={() => setCount(count + 1)}>
                                <AntDesign name='pluscircleo' size={24} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textPrice}>{`Total: ${product.price * count}`}</Text>
                    </View>
                    <View style={styles.viewBtnAdd}>
                        <TouchableOpacity style={styles.btnAdd} >
                            <Text style={styles.textAdd}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </BackgroundView>
    )
}
export default ProductDetail;
