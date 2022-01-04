import React, { useEffect } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
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
    useEffect(() => {
        dispatch(getRequestProductByID(route?.params?.id));
    }, [])
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
                            <Text style={styles.styleText}> {product.name} </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.styleText}> ${product.price} </Text>
                                <Text style={styles.styleText}> Size: {`${product.size} `}</Text>
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginHorizontal: 20 }}>
                    <Text style={styles.styleText}>Description</Text>
                    <AntDesign name='star' size={30} color={'#f8cd65'} />
                </View>
                <View>
                    <Text style={styles.styleTextBottomContent}>{product.description}</Text>
                    <Text style={styles.styleTextBottomContent}>{product.shortDescription}</Text>
                </View>

            </View>
        </BackgroundView>
    )
}
export default ProductDetail;
