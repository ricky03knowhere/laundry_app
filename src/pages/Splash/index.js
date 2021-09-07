import React, {useEffect} from 'react';
import {ImageBackground, Image, StyleSheet} from 'react-native';
import {SplashBackground, logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={logo} style={styles.logo}></Image>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 105,
    width: 222,
  },
});
