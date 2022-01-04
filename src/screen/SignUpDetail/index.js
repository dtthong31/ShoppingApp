import React, { Component, useState } from 'react'
import { RNPickerSelect } from 'react-native-picker-select';
import { KeyboardAvoidingView, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native'
import Text from '../../components/Text'
import TextInput, { fontIcon } from '../../components/TextInput'
import { styles } from './styles.Signup'
import { COLORS } from '../../themes/style';

const SignUpDetail = () => {
    const [gender, setGender] = useState('true');
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.topContent}
            >
                <View style={{ marginBottom: 80 }}>
                    <Text style={styles.textHeader}> Welcome to Shopping</Text>
                    {/* <Text style={styles.textDescription}>I'm happy to see you again. You can continue where you left of by logging in.</Text> */}
                </View>
                <View >
                    <TextInput font={fontIcon.fontisto} icon='email' size={20} placeholder='Email Address' style={{ marginHorizontal: 5 }} />
                    <TextInput font={fontIcon.evilIcons} icon='lock' size={30} placeholder='Password' />
                    <TextInput font={fontIcon.antDesign} icon='user' size={20} placeholder='Name' style={{ marginHorizontal: 5 }} />
                    <View style={{ backgroundColor: COLORS.lightGray, borderRadius: 10, marginBottom: 20 }}>
                        <RNPickerSelect
                            onValueChange={(value) => setGender(value)}
                            value={gender}
                            items={[
                                { label: 'Nam', value: 'true' },
                                { label: 'Nữ', value: 'false' },
                            ]}
                        />
                    </View>
                    <TextInput font={fontIcon.feather} icon='phone' size={20} placeholder='Phone number' style={{ marginHorizontal: 5 }} />
                    <View>
                        <TouchableOpacity style={styles.btnSignup}>
                            <Text style={{ fontWeight: '800', color: 'white' }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewSignUp}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(screenName.lo)}>
                        <Text style={{ fontWeight: '900' }}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default SignUpDetail;
