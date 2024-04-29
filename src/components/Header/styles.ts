import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { actualDeviceSize, moderateScale, moderateScaleVertical, textScale } from "../../theme/responsiveSize";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.black,
        height: moderateScale(100),
        width: actualDeviceSize.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle:{
        color: colors.yellow,
        fontSize: textScale(24),
        fontWeight: '700'
    }
  
});

export default styles;