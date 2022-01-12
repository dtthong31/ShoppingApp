import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topContent: {
        flex: 2,

    },
    bottomContent: {
        flex: 1,
        paddingTop: 10,
    },
    viewContent: {
        alignItems: 'center',
        marginTop: 10
    }
    ,
    iconsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 5
    },
    container: {
        backgroundColor: '#fafafa',
        width: '90%',
        height: '95%',
        borderRadius: 20,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    styleImage: {
        width: '80%',
        height: '80%',
        marginRight: 20,
        transform: [{ rotate: '-25deg' }],
        marginTop: 30
    },
    styleImageView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '85%',
        height: '75%',
        backgroundColor: '#fadfe0',
        marginTop: 10
    },
    LogoContainer: {
        width: 157,
        height: 220,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    styleLogoImage: {
        width: 50,
        height: 50,
        borderRadius: 15,
    },
    styleText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 18,
        paddingTop: 5
    }, likeProduct:
    {
        alignItems: 'flex-end',
        paddingRight: 90,
        paddingTop: 10,
    },

    styleTextBanner: {
        color: 'black',
        fontWeight: '700',
        paddingRight: 20,
        fontSize: 28
    },
    textTopContent: {
        marginHorizontal: 10, marginRight: 10, width: '90%',
        height: '75%', justifyContent: 'flex-start'
    },
    styleTextBottomContent: {
        color: 'gray',
        fontWeight: '700',
        fontSize: 18,
        width: '85%',
        height: '35%',
        paddingTop: 10,
        marginHorizontal: 30,
    },
});
export default styles;
