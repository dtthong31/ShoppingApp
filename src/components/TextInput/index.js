import React, { Component } from 'react'
import { TextInput as RNInput, StyleSheet, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '../../themes/style';
import Text from '../Text'
export const fontIcon = {
    fontisto: "Fontisto",
    evilIcons: "EvilIcons",
    antDesign: 'AntDesign',
    feather: 'Feather',
    entypo: 'Entypo'
}
export default class TextInput extends Component {
    state = {
        focusInput: false,
    }
    render() {
        const { errorText, font, icon, placeholder, style, size, color = 'gray', onBlur, secureTextEntry, value, onChangeText } = this.props;
        const renderIconTextInput = () => {
            switch (font) {
                case fontIcon.fontisto:
                    return <Fontisto name={icon} size={size} color={color} style={{ marginLeft: 20 }} />
                case fontIcon.antDesign:
                    return <AntDesign name={icon} size={size} color={color} style={{ marginLeft: 20 }} />
                case fontIcon.feather:
                    return <Feather name={icon} size={size} color={color} style={{ marginLeft: 20 }} />
                default:
                    return <EvilIcons name={icon} size={size} color={color} style={{ marginLeft: 20 }} />
            }
        }
        return (
            < >
                <View style={[styles.container, errorText && styles.styleError,]}>
                    <View style={style}>
                        {renderIconTextInput()}
                    </View>
                    <RNInput
                        secureTextEntry={secureTextEntry}
                        onChangeText={onChangeText}
                        style={[styles.styleTextInput,
                        this.state.focusInput && styles.styleFocus]}
                        placeholder={placeholder}
                        value={value}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    {!!errorText && <Text>{errorText}</Text>}
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        width: '90%',
        marginBottom: 10
    },
    styleTextInput: {
        width: '80%',
        height: 50,
        marginHorizontal: 10
    },
    styleError: { borderColor: 'red', borderWidth: 1 },
    styleFocus: { borderColor: 'green', borderWidth: 1 }
})
