import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Transaction from './Transaction';
import {GlobalContext} from '../context/GlobalContext';
import {months} from '../util/helper';
import DateTimePicker from '@react-native-community/datetimepicker';

const TransactionList = () => {
  const {transactions, date, setDate} = useContext(GlobalContext);
  let localTransactions = transactions.filter(transaction => {
    if (transaction.day == date.day && transaction.month == date.month) {
      return transaction;
    }
  });
  const [show, setShow] = useState(false);
  const onChange = (event, datePicked) => {
    if (datePicked !== undefined) {
      let selected = {
        day: datePicked.getDate(),
        month: datePicked.getMonth(),
        year: datePicked.getFullYear(),
      };
      setShow(!show);
      setDate(selected);
    } else {
      setShow(!show);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{height: '10%'}}>
        <Text onPress={() => setShow(!show)}>{`${months[date.month]} ${
          date.day
        }`}</Text>
        {show ? (
          <DateTimePicker
            testID="datePicker"
            mode="date"
            display="calendar"
            value={new Date(date.year, date.month, date.day)}
            onChange={onChange}
          />
        ) : (
          <Text />
        )}
      </View>
      {localTransactions.length == 0 ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#7F5EF9" />
          <Text>You have no transactions yet!</Text>
          <Text>Might want to log your day now.</Text>
        </View>
      ) : (
        <FlatList
          style={{
            marginTop: 10,
          }}
          data={localTransactions}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => <Transaction transaction={item} />}
          keyExtractor={item => `${item.id}`}
        />
      )}
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '60%',
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  loading: {
    justifyContent: 'center',
    height: '90%',
    alignItems: 'center',
  },
});
