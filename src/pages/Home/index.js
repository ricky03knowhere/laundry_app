import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {HeaderImage, Logo} from '../../assets';
import {BalanceBar} from '../../components';
import {ActionBtn} from '../../components/';
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
      <View style={styles.service}>
        <Text style={styles.label}>Our Services</Text>
        <View style={styles.serviceIcon}>
          <ActionBtn title="kilos" type="service" />
          <ActionBtn title="units" type="service" />
          <ActionBtn title="vip" type="service" />
          <ActionBtn title="carpet" type="service" />
          <ActionBtn title="iron" type="service" />
          <ActionBtn title="express" type="service" />
        </View>
      </View>
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
  label: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18
  },
  service: {
    paddingLeft: 10,
    paddingTop: 25,
  },
  serviceIcon : {
    paddingLeft: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15
  }
});
