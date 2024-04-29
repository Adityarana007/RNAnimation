import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { actualDeviceSize, moderateScale, moderateScaleVertical, textScale } from "../../theme/responsiveSize";

const styles = StyleSheet.create({
    inputOuterView: {
        backgroundColor: colors.white,
        height: moderateScale(38),
        width: actualDeviceSize.width - 32,
        borderRadius: 20
    },
    titleStyle:{
        fontSize: textScale(18),
        color: colors.black
    },
    textInput: {
        backgroundColor: colors.white,
        height: moderateScale(38),
        paddingHorizontal: moderateScale(20),
        borderRadius: 4
    }
});

export default styles;