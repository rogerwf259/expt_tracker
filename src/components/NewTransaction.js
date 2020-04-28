import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Keyboard,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {GlobalContext} from '../context/GlobalContext';

const NewTransaction = ({show, dismiss}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const {transactions, addTransaction, date} = useContext(GlobalContext);
  function generateTransaction() {
    addTransaction({
      id: transactions.length + 1,
      name: name,
      amount: +amount,
      day: date.day,
      month: date.month,
      year: date.year,
    });
    Keyboard.dismiss();
    setName('');
    setAmount('');
    dismiss(false);
  }
  return (
    <View styles={{flex: 1}}>
      <Modal
        isVisible={show}
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={1000}
        avoidKeyboard={false}
        onBackButtonPress={() => dismiss(false)}
        onBackdropPress={() => dismiss(false)}>
        <View style={styles.container}>
          <TextInput
            keyboardType="visible-password"
            style={styles.text}
            placeholder="Expense name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            keyboardType="visible-password"
            style={styles.text}
            placeholder="Amount"
            onChangeText={text => setAmount(text)}
            value={amount}
          />
          <Button title="Save" onPress={() => generateTransaction()} />
        </View>
      </Modal>
    </View>
  );
};

export default NewTransaction;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});
