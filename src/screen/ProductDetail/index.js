import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import Text from '../../components/Text'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenName } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { getRequestProductByID } from '../../redux/thunk/categoryThunkAction'
import { getProductByIDSelectors } from '../../redux/selector/productSelectors'
import BackgroundView from '../../components/BackgroundView'
import AntDesign from 'react-native-vector-icons/AntDesign'
const ProductDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const product = useSelector(getProductByIDSelectors);
    const [count, setCount] = useState(0);
    useEffect(() => {
        dispatch(getRequestProductByID(route?.params?.id));
    }, [])
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <Text style={[styles.styleText]}> {product.name} </Text>
                                <View style={{ backgroundColor: '#1f1f1f', borderRadius: 10, marginTop: 5, width: 60, height: 35 }}>
                                    <Text style={[styles.styleText, { color: '#ffce68', textAlign: 'center' }]}> ${product.price} </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                                <Text style={styles.styleText}>Size:</Text>
                                <FlatList data={product.size}
                                    horizontal={true}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity>
                                            <Text style={styles.styleText}>{item}</Text>
                                        </TouchableOpacity>
                                    } />
                            </View>
                        </View>
                        <View style={[styles.likeProduct, StyleSheet.absoluteFill]}>
                            <TouchableOpacity >
                                <Ionicons name='heart-circle' size={60} color={'#ff2750'} style={{ position: 'absolute', alignItems: 'flex-end' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContent} >
                <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Text style={styles.styleText}>Description</Text>
                    <AntDesign name='star' size={30} color={'#f8cd65'} />
                </View>
                <Text style={styles.styleTextBottomContent}>{product.description}</Text>
                <View style={{ backgroundColor: '#FFF', width: '100%', height: '60%', borderRadius: 30 }}>
                    <View style={{ justifyContent: 'space-between', paddingHorizontal: 25, flexDirection: 'row' }}>
                        <View style={{ alignItems: 'baseline', paddingTop: 10, flexDirection: 'row', }}>
                            <TouchableOpacity onPress={handleButtonAdd}>
                                <AntDesign name='minuscircleo' size={24} color={'black'} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>{count}</Text>
                            <TouchableOpacity onPress={() => setCount(count + 1)}>
                                <AntDesign name='pluscircleo' size={24} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: '700', paddingTop: 10, color: 'black' }}>{`Total: ${product.price * count}`}</Text>
                    </View>
                    <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#1f1f1f', height: 60, width: '90%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffce68', fontSize: 25, fontWeight: '700' }}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </BackgroundView>
    )
}
export default ProductDetail;
