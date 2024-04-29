import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import Button from '../../../components/Button/Button';
import { useNav } from '../../../navigation/useNav';
import { ScreenNameKeys } from '../../../constants/ScreenNameKeys';
import InputBox from '../../../components/InputBox';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNav();
    const onLoginPress = () => {
        navigation.navigate(ScreenNameKeys.HOME_TAB);
    };

    const onUsernameChange = (value:string) => {
        setUserName(value);
    }
    const onPasswordChange = (value:string) => {
        setPassword(value);
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.signinContinueView}>
                <Text style={styles.signinText}>Sign in to continue</Text>
            </View>
            <View style={styles.marginTop30}>
                    <InputBox value={username} onTextChange={onUsernameChange} placeholder='User Name'/>
            </View>
            <View style={styles.marginTop30}>
                    <InputBox secureTextEntry value={password} onTextChange={onPasswordChange} placeholder='Password' />
            </View>
            <View style={styles.btnOuterView}>
                <Button title='Login' onPress={onLoginPress}/>
            </View>
            </ScrollView>

        </SafeAreaView>
    )
};

export default Login;