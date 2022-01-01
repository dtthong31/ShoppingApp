import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import Text from '../../components/Text'
import TextInput, { fontIcon } from '../../components/TextInput'
import { styles } from './styles.Login'
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS } from '../../themes/style'
import { screenName } from "../../utils/constant";
import { useNavigation } from '@react-navigation/native'


export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContent}>
                <View style={{ marginBottom: 80 }}>
                    <Text style={styles.textHeader}> Welcome Back</Text>
                    <Text style={styles.textDescription}>I'm happy to see you again. You can continue where you left of by logging in.</Text>
                </View>
                <View >
                    <TextInput font={fontIcon.fontisto} icon='email' size={20} placeholder='Email Address' style={{ marginHorizontal: 5 }} />
                    <TextInput font={fontIcon.evilIcons} icon='lock' size={30} placeholder='Password' />
                    <TouchableOpacity style={styles.buttonForGot}>
                        <Text >Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContent} >
                <TouchableOpacity style={styles.btnLoggin}>
                    <Text style={{ fontWeight: '800', color: 'white' }}>Sign in</Text>
                </TouchableOpacity>
                <Text>or</Text>
                <TouchableOpacity style={[styles.btnLoggin, { backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around' }]}>
                    <Entypo name='facebook' size={30} color={'blue'} />
                    <Text style={{ fontWeight: '800', color: '#858aa5' }}>Sign in with facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewSignUp}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(screenName.signUp)}>
                    <Text style={{ fontWeight: '900' }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
