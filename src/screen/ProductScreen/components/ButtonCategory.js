import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from '../../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/constant';

const ButtonCategory = (props) => {
    const { categoryItem } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName.productByCategory, { id: categoryItem.id })}>
            <Text style={styles.styleTextBTN}>{categoryItem.category}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    styleTextBTN: {
        // color: 'white',
        fontSize: 17,
        fontWeight: '700',
    }
})

export default ButtonCategory
