import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export default class BackgroundView extends Component {
    render() {
        const { style } = this.props;
        return (
            <SafeAreaView style={[styles.container, style]} >
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        paddingTop: 3,
    }
})
