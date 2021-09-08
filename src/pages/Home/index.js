import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {HeaderImage, Logo} from '../../assets';
import { BalanceBar } from '../../components';
import {windowHeight, windowWidth} from '../../utils/consts';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={HeaderImage} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Welcome, </Text>
          <Text style={styles.username}>Mamat Basreng</Text>
        </View>
      </ImageBackground>
      <BalanceBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    height: windowHeight * 0.6,
    width: windowWidth * 1.7,
    paddingHorizontal: 10,
  },
  logo: {
    marginTop: 8,
    marginLeft: -5,
    height: windowHeight * 0.13,
    width: windowWidth * 0.5,
  },
  headerText: {
    marginTop: windowHeight * 0.07,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Bold',
  },
  username: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
