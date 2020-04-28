import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalContext} from '../context/GlobalContext';
import {Easing} from 'react-native-reanimated';
import {timing} from 'react-native-redash';
import Graph from './Graph';
const Balance = () => {
  const {transactions, date} = useContext(GlobalContext);
  const amounts = transactions.map(transaction =>
    transaction.day === date.day && transaction.month == date.month
      ? transaction.amount
      : 0,
  );
  const total = amounts
    .reduce((total, current) => (total += current), 0)
    .toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((total, current) => (total += current), 0)
    .toFixed(2);
  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((total, current) => (total += current), 0) * -1
  ).toFixed(2);
  const percentage = expense > 0 && income > 0 ? expense / income : 0;
  const config = {
    duration: 1 * 1000,
    from: 0,
    to: percentage,
    easing: Easing.linear,
  };
  return (
    <View style={styles.container}>
      <View style={styles.graph}>
        <Graph progress={timing(config)} percentage={percentage} />
      </View>
      <View style={styles.balance}>
        <Text style={styles.balanceTitle}>Balance</Text>
        <Text style={styles.balanceText}>{total}$</Text>
        <Text style={styles.balanceTitle}>Income</Text>
        <Text style={styles.balanceText}>{income}</Text>
        <Text style={styles.balanceTitle}>Expense</Text>
        <Text style={styles.balanceText}>{expense}</Text>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    height: '30%',
    flexDirection: 'row',
  },
  graph: {
    flex: 1,
  },
  balance: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  balanceTitle: {
    padding: 0,
    width: '100%',
    color: '#9BA7BC',
    fontSize: 15,
    paddingLeft: 30,
  },
  balanceText: {
    padding: 0,
    width: '100%',
    fontSize: 25,
    color: 'white',
    paddingLeft: 30,
  },
});
