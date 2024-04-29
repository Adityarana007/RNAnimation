import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../../theme/responsiveSize';
import colors from '../../theme/colors';

interface Props {
    onPress?: () => void;
    title?: string;
}

const Button = ({onPress, title}: Props) => {
    const handleBtnPress = () => {
        if(onPress !== undefined) {
            onPress();
        }
    } 
    return(
        <Pressable onPress={handleBtnPress} style={styles.buttonView}>
            <Text style={styles.titleStyle}>{title}</Text>
        </Pressable>
    )
};

export default Button;

const styles = StyleSheet.create({
    buttonView: {
        backgroundColor: colors.yellow,
        height: moderateScale(38),
        justifyContent: 'center',
        alignItems: 'center',
        // width: moderateScaleVertical(130),
        paddingHorizontal: moderateScale(20),
        borderRadius: 20,
    },
    titleStyle:{
        fontSize: textScale(18),
        color: colors.black
    }
})