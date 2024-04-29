import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button/Button';
import {useNav} from '../../../navigation/useNav';
import {ScreenNameKeys} from '../../../constants/ScreenNameKeys';
import Header from '../../../components/Header';

const Home = () => {
  const navigation = useNav();
  const onScrollToIndexPress = () => {
    navigation.navigate(ScreenNameKeys.SCROLL_TO_INDEX);
  }
  return (
    <>
      <Header title={'Home'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.signinContinueView}>
          {/* <Text style={styles.signinText}>Welcome to Home Screen</Text> */}
          <Button title='Scroll To Index' onPress={onScrollToIndexPress}/>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
