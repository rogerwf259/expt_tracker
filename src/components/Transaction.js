import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import SwipeableRow from './SwipeableRow';
import {RectButton} from 'react-native-gesture-handler';
import {GlobalContext} from '../context/GlobalContext';

const Transaction = props => {
  const {deleteTransaction} = useContext(GlobalContext);
  const {id, name, amount} = props.transaction;
  const deleteT = () => {
    deleteTransaction(id);
  };
  const editT = () => {
    console.log('Clicked edit transaction');
  };
  return (
    <SwipeableRow removeTransaction={deleteT} editTransaction={editT}>
      <RectButton style={styles.container}>
        <Text style={styles.transName}>{name}</Text>
        <Text style={[styles.transAmount, {marginLeft: 30}]}>
          {amount > 0 ? '+' + amount : '-' + Math.abs(amount)}$
        </Text>
      </RectButton>
    </SwipeableRow>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  transName: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  transAmount: {
    color: '#999',
    backgroundColor: 'transparent',
  },
});
