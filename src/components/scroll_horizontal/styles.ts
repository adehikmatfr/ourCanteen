const { StyleSheet } = require('react-native');

const Styles = StyleSheet.create({
    // imageProduct
    cardImg: {
        marginRight: 16
    },
    cardCon: { height: 150, width: 150, borderRadius: 10 },
    img: {
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        flex: 1,
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1C1C1C',
        marginTop: 12,
    },
    // schroll
    scrollCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    Bedge: { fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' },
    showAll: { fontSize: 17, fontWeight: 'bold', color: '#22aaf0' },
    garis: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        height: 3,
        marginTop: 15,
    }
});

export default Styles;