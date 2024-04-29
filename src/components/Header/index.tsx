import React from 'react';
import { SafeAreaView, Text, View } from "react-native"
import styles from './styles';

interface Props {
    title?: string;
}

const Header = ({title}: Props) => {
    return(
        <SafeAreaView style={styles.headerContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
        </SafeAreaView>
    )
};

export default Header;