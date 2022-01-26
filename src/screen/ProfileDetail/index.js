import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '../../components/Text';
import TextInput, { fontIcon } from '../../components/TextInput';
import { RadioButton } from 'react-native-paper';
import { getItem, getRequestProfile } from '../../redux/thunk/categoryThunkAction';
import { getProfileSelectors, getTokenSelectors } from '../../redux/selector/productSelectors';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/constant'
import { COLORS } from '../../themes/style';
const ProfileDetail = () => {
    const dispatch = useDispatch();
    const profile = useSelector(getProfileSelectors);
    const [checked, setChecked] = useState(profile.gender);
    const token = useSelector(getTokenSelectors);
    const navigation = useNavigation();
    useEffect(() => {
        dispatch(getRequestProfile(token));
    }, [])
    const onPress = async () => {
        await AsyncStorage.setItem('token', '');
        navigation.navigate(screenName.login);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.styleText}>Person Data</Text>
            <Image source={{ uri: profile.avatar }} style={{ backgroundColor: 'gray', width: 100, height: 100, borderRadius: 100 }} />
            <View style={styles.centerView}>
                <TextInput font={fontIcon.fontisto} value={profile.email} icon='email' size={20} placeholder='Email Address' style={{ marginHorizontal: 5 }} />
                <TextInput font={fontIcon.evilIcons} value={profile.password} icon='lock' size={30} placeholder='Password' />
                <TextInput font={fontIcon.antDesign} value={profile.name} icon='user' size={20} placeholder='Name' style={{ marginHorizontal: 5 }} />
                <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                    <View style={styles.viewRadio}>
                        <View style={styles.radioBtn}>
                            <RadioButton value={true} />
                            <Text style={styles.textRadio}>Male</Text>
                        </View>
                        <View style={styles.radioBtn}>
                            <RadioButton value={false} />
                            <Text style={styles.textRadio}>Female</Text>
                        </View>
                    </View>
                </RadioButton.Group>

                <TextInput font={fontIcon.feather} value={profile.phone} icon='phone' size={20} placeholder='Phone number' style={{ marginHorizontal: 5 }} />
            </View>
            <TouchableOpacity onPress={() => onPress()} style={styles.btnLogout}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    styleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    radioBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 40
    },
    textRadio: {
        fontSize: 20
    },
    viewRadio: {
        flexDirection: 'row',
        marginBottom: 10,
    }
    ,
    centerView: {
        marginTop: 50,
    }, btnLogout: {
        backgroundColor: COLORS.lightBlue,
        width: 300,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})

export default ProfileDetail;
