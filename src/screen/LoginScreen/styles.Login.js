import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContent: {
        flex: 1.5,
        alignItems: 'center',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        backgroundColor: 'white'
    },
    bottomContent: {
        flex: 0.5,
        alignItems: 'center',
        marginTop: 100
    },
    buttonForGot: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // marginTop: 20,
        marginRight: 20
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
        alignItems: 'center',
        marginTop: 10

    },
    textHeader: {
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        marginHorizontal: 15
    },
    viewSignUp: { flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginBottom: 30 }
})
