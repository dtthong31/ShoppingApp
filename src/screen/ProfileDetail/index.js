import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../../components/Text';
import TextInput, { fontIcon } from '../../components/TextInput';
import { RadioButton } from 'react-native-paper';

const ProfileDetail = () => {
    const [checked, setChecked] = useState('true');
    return (
        <View style={styles.container}>
            <Text style={styles.styleText}>Person Data</Text>
            <View style={{ backgroundColor: 'gray', width: 100, height: 100, borderRadius: 100 }} />
            <View style={styles.centerView}>
                <TextInput font={fontIcon.fontisto} icon='email' size={20} placeholder='Email Address' style={{ marginHorizontal: 5 }} />
                <TextInput font={fontIcon.evilIcons} icon='lock' size={30} placeholder='Password' />
                <TextInput font={fontIcon.antDesign} icon='user' size={20} placeholder='Name' style={{ marginHorizontal: 5 }} />
                <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                    <View style={styles.viewRadio}>
                        <View style={styles.radioBtn}>
                            <RadioButton value="true" />
                            <Text style={styles.textRadio}>Male</Text>
                        </View>
                        <View style={styles.radioBtn}>
                            <RadioButton value="false" />
                            <Text style={styles.textRadio}>Female</Text>
                        </View>
                    </View>
                </RadioButton.Group>

                <TextInput font={fontIcon.feather} icon='phone' size={20} placeholder='Phone number' style={{ marginHorizontal: 5 }} />
            </View>
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
    }
})

export default ProfileDetail;
