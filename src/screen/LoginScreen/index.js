import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, SafeAreaView, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from '../../components/Text'
import TextInput, { fontIcon } from '../../components/TextInput'
import { styles } from './styles.Login'
import { screenName } from "../../utils/constant"
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import BackgroundView from '../../components/BackgroundView';
import StartApp from '../../HOC/StartApp';
import { getIsFechingSelectors } from '../../redux/selector/productSelectors';
import { useSelector } from 'react-redux';
import { string } from 'yup';


const validateSchema = Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ').required('Trường này bắt buộc nhập thông tin'),
    password: Yup.string().min(5, 'Passwork tối thiểu 5 ký tự').required('Trường này bắt buộc nhập thông tin'),
})
const validateSchemaError = Yup.object().shape({
    password: Yup.string().min(5, 'email or password fail'),
});
const BackgroundViewLoading = StartApp(BackgroundView);

export default function LoginScreen() {
    const navigation = useNavigation();
    const isFetching = useSelector(getIsFechingSelectors);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [token, setToken] = useState();
    useEffect(() => {
        saveEmailToInput();
    }, [])
    const submitFormLogin = async (email, password) => {

        return await axios({
            method: 'post',
            url: 'http://svcy3.myclass.vn/api/Users/signin',
            data: {
                email,
                password
            }
        });
    }

    const getItem = async () => {
        try {
            const result = await AsyncStorage.getItem('token');
            return result;
        } catch (e) {
            console.log(e);
        }
    }

    const saveEmailToInput = async () => {
        const token = await getItem();
        setToken(token);
    }

    const onSubmit = async ({ email, password }) => {
        try {
            const result = await submitFormLogin(email, password);
            await AsyncStorage.setItem('token', result?.data?.content?.accessToken);
            const token = result?.data?.content;

            if (token) {
                navigation.navigate(screenName.home);
            }
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {token !== null ? navigation.navigate(screenName.home) :
                <BackgroundView >
                    <View style={styles.topContent}>
                        <View style={{ marginBottom: 80, marginTop: 50 }}>
                            <Text style={styles.textHeader}> Welcome Back</Text>
                            <Text style={styles.textDescription}>I'm happy to see you again. You can continue where you left of by logging in.</Text>
                        </View>

                        <Formik
                            initialValues={{ email: `${email}`, password: '' }}
                            onSubmit={onSubmit}
                            validationSchema={validateSchema}
                        >
                            {({ values, errors, handleChange, handleSubmit, handleBlur }) => (
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
                                                                    (data) => {
                                                                        console.log(data.accessToken.toString())
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
                    </View>

                    <View style={styles.viewSignUp}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate(screenName.signUp)}>
                            <Text style={{ fontWeight: '900' }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </BackgroundView>
            }
        </KeyboardAvoidingView>
    )
}
