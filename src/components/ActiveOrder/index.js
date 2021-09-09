import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconActiveOrder} from '../../assets';
import {DANGER_COLOR, DISABLED_COLOR, PRIMARY_COLOR, TERNARY_COLOR, WARNING_COLOR, windowHeight, windowWidth} from '../../utils/consts';

const ActiveOrder = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconActiveOrder style={styles.text} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 18,
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight * 0.03,
    alignItems: 'center',
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  status: status => ({
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Light',
    color: status === 'done' ? PRIMARY_COLOR : status === 'in progress' ? WARNING_COLOR : DANGER_COLOR
  }),
});
