import React, { Component, useState } from 'react'
import { RNPickerSelect } from 'react-native-picker-select';
import { KeyboardAvoidingView, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native'
import Text from '../../components/Text'
import TextInput, { fontIcon } from '../../components/TextInput'
import { styles } from './styles.Signup'
import { COLORS } from '../../themes/style';
import { screenName } from '../../utils/constant';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { submitFormSignUp } from '../../api';

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string().trim().min(5, 'Passwork is too short!').required('Password is required!'),
    name: Yup.string().trim().min(2, "Invalid name!").required("Name is required!"),
    phone: Yup.string().min(10, "Invalid phone").required("Phone is required!"),
})
const SignUpDetail = () => {
    const [gender, setGender] = useState(true);
    const navigation = useNavigation();
    const [checked, setChecked] = useState('true');
    const userInfo = {
        email: '',
        password: '',
        name: '',
        gender: gender,
        phone: ''
    }
    const onSubmit = async ({ email, password, name, phone, gender }) => {
        try {
            const result = await submitFormSignUp(email, password, name, gender, phone);
            const res = result?.data?.statusCode;
            console.log("res", JSON.stringify(result.data, null, "  "));
            if (res === '200') {
                navigation.navigate(screenName.login);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.topContent}
            >
                <View style={{ flex: 0.3 }}>
                    <Text style={styles.textHeader}> Welcome to Register</Text>
                    {/* <Text style={styles.textDescription}>I'm happy to see you again. You can continue where you left of by logging in.</Text> */}
                </View>
                <View style={{ flex: 1.5 }} >
                    <Formik initialValues={userInfo} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => {
                            const { email, password, name, gender, phone } = values;

                            return <>
                                <TextInput
                                    font={fontIcon.fontisto}
                                    icon='email' size={20}
                                    placeholder='Email Address'
                                    style={{ marginHorizontal: 5 }}
                                    value={email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    errorText={touched.email && errors.email} />
                                <TextInput
                                    onChangeText={handleChange('password')}
                                    value={password}
                                    font={fontIcon.evilIcons}
                                    icon='lock' size={30}
                                    placeholder='Password'
                                    errorText={touched.password && errors.password}
                                    onBlur={handleBlur('password')} />
                                <TextInput
                                    onChangeText={handleChange('name')}
                                    value={name}
                                    onBlur={handleBlur('name')}
                                    font={fontIcon.antDesign}
                                    icon='user' size={20}
                                    placeholder='Name'
                                    errorText={touched.name && errors.name}
                                    style={{ marginHorizontal: 5 }} />
                                <RadioButton.Group
                                    onValueChange={newValue => setChecked(newValue)}
                                    value={checked}>
                                    <View style={styles.viewRadio}>
                                        <View style={styles.radioBtn}>
                                            <RadioButton value={gender} />
                                            <Text style={styles.textRadio}>Male</Text>
                                        </View>
                                        <View style={styles.radioBtn}>
                                            <RadioButton value="false" />
                                            <Text style={styles.textRadio}>Female</Text>
                                        </View>
                                    </View>
                                </RadioButton.Group>
                                <TextInput
                                    onChangeText={handleChange('phone')}
                                    value={phone}
                                    onBlur={handleBlur('phone')}
                                    errorText={touched.phone && errors.phone}
                                    font={fontIcon.feather}
                                    icon='phone' size={20}
                                    placeholder='Phone number'
                                    style={{ marginHorizontal: 5 }} />
                                <View>
                                    <TouchableOpacity style={styles.btnSignup} onPress={handleSubmit}>
                                        <Text style={{ fontWeight: '800', color: 'white' }}>Sign up</Text>
                                    </TouchableOpacity>
                                </View>

                            </>
                        }}
                    </Formik>
                </View>
                <View style={styles.viewSignUp}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate(screenName.login) }}>
                        <Text style={{ fontWeight: '900' }}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default SignUpDetail;
