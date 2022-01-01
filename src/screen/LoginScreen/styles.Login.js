import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContent: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80
    },
    bottomContent: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },
    buttonForGot: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    textDescription: {
        color: 'gray',
        fontSize: 15,
        marginHorizontal: 30
    }
    ,
    btnLoggin: {
        backgroundColor: '#475bd8',
        width: '80%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        marginHorizontal: 15
    },
    viewSignUp: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginBottom: 30 }
})
