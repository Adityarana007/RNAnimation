import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { moderateScaleVertical, textScale } from "../../../theme/responsiveSize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',

    },
    signinContinueView: {
        marginTop: moderateScaleVertical(60),
    },
    signinText: {
        fontSize: textScale(24),
        color: colors.white
    },
    loginText: {
        color: colors.white,
    },
    btnOuterView: {
        marginTop: moderateScaleVertical(60),
    },
    marginTop30:{
        marginTop: moderateScaleVertical(30)
    }
});
export default styles;