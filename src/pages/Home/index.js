import React from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {HeaderImage, Logo} from '../../assets';

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
    </View>
  );
};

export default Home;

const windowHeight = Dimensions.get('window').height * 0.6;
const windowWidth = Dimensions.get('window').width * 0.6;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    height: windowHeight * 0.6,
    width: windowWidth * 1.7,
    paddingHorizontal: 30,
  },
  logo: {
    marginTop: 8,
    marginLeft: -18,
    height: windowHeight * 0.13,
    width: windowWidth * 0.5,
  },
  headerText: {
    marginTop: windowHeight * 0.07,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Bold'
  },
  username: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Regular'
  },
});
