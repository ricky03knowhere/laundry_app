import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconAddSaldo,
  IconGetPoint,
  IconCarpet,
  IconIron,
  IconKilos,
  IconUnits,
  IconVIP,
  IconExpress,
} from '../../assets';
import {SECONDARY_COLOR} from '../../utils/consts';

const ActionBtn = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconAddSaldo />;
    if (title === 'Get Point') return <IconGetPoint />;
    if (title === 'kilos') return <IconKilos />;
    if (title === 'units') return <IconUnits />;
    if (title === 'iron') return <IconIron />;
    if (title === 'vip') return <IconVIP />;
    if (title === 'express') return <IconExpress />;
    if (title === 'carpet') return <IconCarpet />;
    return <IconAddSaldo />;
  };
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.label(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionBtn;

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: type === 'service' ? 12: 0,
    marginRight: type === 'service' ? 18 : 8,
  }),
  button: type => ({
    padding: type === 'service' ? 12 : 7,
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
    marginBottom: 4,
  }),
  label: type => ({
    fontSize: type === 'service' ? 15 : 13,
    fontFamily:
      type === 'service' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
});
