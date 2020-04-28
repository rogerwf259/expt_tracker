import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeekGraph from '../components/WeekGraph';
import {GlobalContext} from '../context/GlobalContext';
import {groupBy} from '../util/helper';

const Info = () => {
  const {date, transactions} = useContext(GlobalContext);
  const group = groupBy(['month']);
  const localTransactions = group(transactions);
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text>Statistics: </Text>
      </View>
      <WeekGraph transacts={localTransactions[date.month]} />
      <View style={{flex: 1, borderColor: 'black', borderWidth: 2}}>
        <Text>Expenses: </Text>
        <Text>Income: </Text>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'red',
    borderWidth: 2,
  },
});
