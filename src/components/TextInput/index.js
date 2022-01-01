import React, { Component } from 'react'
import { TextInput as RNInput, StyleSheet, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { COLORS } from '../../themes/style';
export const fontIcon = {
    fontisto: "Fontisto",
    evilIcons: "EvilIcons"
}
export default class TextInput extends Component {
    render() {
        const { font, icon, placeholder, style, size, color = 'gray' } = this.props;
        const renderIconTextInput = () => {
            switch (font) {
                case fontIcon.fontisto:
                    return <Fontisto name={icon} size={size} color={color} style={{ marginLeft: 20 }} />
                default:
                    return <EvilIcons name={icon} size={size} color={color} style={{ marginLeft: 20 }} />
            }
        }
        return (
            <View style={styles.container}>
                <View style={style}>
                    {renderIconTextInput()}
                </View>
                <RNInput style={styles.styleTextInput} placeholder={placeholder} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        width: '90%',
        marginBottom: 20
    },
    styleTextInput: {
        width: '70%',
        height: 50,
        marginHorizontal: 10
    }
})
