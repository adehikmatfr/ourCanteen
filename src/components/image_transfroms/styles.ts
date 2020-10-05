const { StyleSheet, PixelRatio } = require('react-native');

const Styles = StyleSheet.create({
    imageStyle: (vRatio: Number, width: any) => {
        return {
            height: PixelRatio.getPixelSizeForLayoutSize(vRatio),
            width: width,
        };
    },
});

export default Styles;