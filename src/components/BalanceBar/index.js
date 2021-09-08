import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PRIMARY_COLOR, windowHeight} from '../../utils/consts';
import ActionBtn from '../ActionBtn';
import Gap from '../Gap';

const BalanceBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceInfo}>
        <View style={styles.text}>
          <Text style={styles.balanceLabel}>Balance  &#008;:</Text>
          <Text style={styles.balanceValue}>$12.05,-</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.pointsLabel}>Delivery Points  :</Text>
          <Text style={styles.pointsValue}>1249 Points</Text>
        </View>
      </View>
      <View style={styles.ActionBtn}>
        <ActionBtn title="addSaldo" />
        <Gap width={10} />
        <ActionBtn title="getPoint" />
      </View>
    </View>
  );
};

export default BalanceBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: -windowHeight * 0.1,
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  balanceInfo: {
    width: '50%',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceLabel: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  balanceValue: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  pointsLabel: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
  },
  pointsValue: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: PRIMARY_COLOR,
  },
  ActionBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
