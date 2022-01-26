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
        color: '#000',
        fontWeight: '700',
        fontSize: 18,
        // paddingTop: 5    
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
        // height: '35%',
        paddingTop: 10,
        marginHorizontal: 30,
    },
    viewBtnAdd: { marginTop: 15, justifyContent: 'center', alignItems: 'center' },
    btnAdd: { backgroundColor: '#1f1f1f', height: 60, width: '90%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
    textAdd: { color: '#ffce68', fontSize: 25, fontWeight: '700' },
    textPrice: { fontSize: 20, fontWeight: '700', paddingTop: 10, color: 'black' },
    textCount: { fontSize: 20, fontWeight: '700', color: 'black' },
    viewCount: { alignItems: 'baseline', paddingTop: 10, flexDirection: 'row', },
    viewTotalAndCount: { justifyContent: 'space-between', paddingHorizontal: 25, flexDirection: 'row' },
    viewBottom: { backgroundColor: '#FFF', width: '100%', height: '50%', borderRadius: 30 },
    viewDescription: { flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', alignItems: 'baseline' },
    btnLike: { position: 'absolute', alignItems: 'flex-end' },
    btnSize: { width: 34, height: 32, backgroundColor: '#1f1f1f', borderRadius: 5, justifyContent: 'center', alignItems: 'center' },
    viewSize: { flexDirection: 'row', marginLeft: 4, marginTop: 5, alignItems: 'baseline' },
    viewTextPrice: { backgroundColor: '#1f1f1f', borderRadius: 10, marginTop: 5, width: 60, height: 35 },
    viewNameAndPrice: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }
});
export default styles;
