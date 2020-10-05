const { StyleSheet } = require('react-native');

const Styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#90caf9',
        marginLeft: 10,
    },
    button: {
        elevation: 6,
        backgroundColor: '#22aaf0',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
});

export default Styles;