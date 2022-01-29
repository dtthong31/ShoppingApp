import React, { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, SafeAreaView, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from '../../components/Text'
import TextInput, { fontIcon } from '../../components/TextInput'
import { styles } from './styles.Login'
import { screenName } from "../../utils/constant"
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import BackgroundView from '../../components/BackgroundView';
import { getTokenSelectors } from '../../redux/selector/productSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { submitFormLogin, submitTokenFacebook } from '../../api';
import { setTokenSuccess } from '../../redux/actions/productActions';
import AnimatedLottieView from 'lottie-react-native';
import animation from '../../assets/index'
import { setRequestLoginFB } from '../../redux/thunk/categoryThunkAction';
const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    password: Yup.string().min(5, 'Passwork is too short!').required('Password is required!'),
})
const validateSchemaError = Yup.object().shape({
    password: Yup.string().min(5, 'email or password fail'),
});
export default function LoginScreen() {
    const user = {
        email: '',
        password: ''
    }
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const token = useSelector(getTokenSelectors);
    const onSubmit = async ({ email, password }) => {
        try {
            const result = await submitFormLogin(email, password);
            await AsyncStorage.setItem('token', result?.data?.content?.accessToken);
            const res = result?.data?.content?.accessToken;
            dispatch(setTokenSuccess(res));
            if (res) {
                navigation.navigate(screenName.home);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onSubmitFB = async (accessToken) => {
        try {
            console.log("submit");
            const result = await submitTokenFacebook(accessToken);
            console.log(result.data.statusCode);
            if (result?.data?.statusCode === 200) {
                dispatch(setTokenSuccess(result?.data?.content?.accessToken));
                // await AsyncStorage.setItem('token', result?.data?.content?.accessToken);
                navigation.navigate(screenName.home);
            }
        } catch (error) {

        }
    }
    return (
        <BackgroundView style={{ backgroundColor: '#4effc4' }}>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4effc4' }}>
                <AnimatedLottieView style={{ height: 600 }} source={animation} autoPlay loop />

            </View>
            <View style={styles.topContent}>

                <Text style={[styles.textHeader, { marginBottom: 30, backgroundColor: '#4effc4' }]}> You're Welcome </Text>

                <Formik
                    initialValues={user}
                    onSubmit={onSubmit}
                    validationSchema={validateSchema}
                >
                    {({ values, errors, handleChange, handleSubmit }) => (
                        <View style={styles.formContent}>
                            <View style={{ alignItems: 'center' }}>
                                <TextInput
                                    font={fontIcon.fontisto}
                                    icon='email' size={20}
                                    placeholder='Email Address'
                                    style={{ marginHorizontal: 5 }}
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    errorText={errors.email} />
                                <TextInput
                                    font={fontIcon.evilIcons}
                                    onChangeText={handleChange('password')}
                                    secureTextEntry={true}
                                    icon='lock' size={30}
                                    placeholder='Password'
                                    value={values.password}
                                    errorText={errors.password} />
                            </View>

                            <TouchableOpacity style={styles.buttonForGot} >
                                <Text >Forgot Password?</Text>
                            </TouchableOpacity>
                            <View  >
                                <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
                                    <TouchableOpacity style={styles.btnLoggin} onPress={handleSubmit}>
                                        <Text style={{ fontWeight: '800', color: 'white' }}>Sign in</Text>
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 10 }}>or</Text>
                                    <View>
                                        <LoginButton
                                            onLoginFinished={
                                                (error, result) => {
                                                    if (error) {
                                                        console.log("login has error: " + result.error);
                                                    } else if (result.isCancelled) {
                                                        console.log("login is cancelled.");
                                                    } else {
                                                        AccessToken.getCurrentAccessToken().then(
                                                            async (data) => {
                                                                const accessToken = data.accessToken.toString();
                                                                await onSubmitFB(accessToken);
                                                            }
                                                        )
                                                    }
                                                }
                                            }
                                            onLogoutFinished={() => console.log("logout.")} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}

                </Formik>
                <View style={styles.viewSignUp}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(screenName.signUp)}>
                        <Text style={{ fontWeight: '900' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </BackgroundView>
    );

}