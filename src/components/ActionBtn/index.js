import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAddSaldo, IconGetPoint} from '../../assets';
import {SECONDARY_COLOR} from '../../utils/consts';

const ActionBtn = ({title}) => {
  const Icon = () => {
    if (title === 'addSaldo') return <IconAddSaldo />;
    if (title === 'getPoint') return <IconGetPoint />;
    return <IconAddSaldo />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionBtn;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
  },
  title: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
