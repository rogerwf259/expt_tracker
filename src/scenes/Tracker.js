import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Platform, Button} from 'react-native';
import Balance from '../components/Balance';
import TransactionList from '../components/TransactionList';
import Header from '../components/Header';
import NewTransaction from '../components/NewTransaction';

const Tracker = ({navigation}) => {
  const [show, setShow] = useState(false);
  const dismissModal = change => {
    setShow(change);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <Balance />
        <TransactionList />
        <Button title="Add" onPress={() => setShow(true)} />
        <NewTransaction show={show} dismiss={dismissModal} />
      </View>
    </SafeAreaView>
  );
};

export default Tracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
});
