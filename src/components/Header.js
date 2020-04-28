import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalContext} from '../context/GlobalContext';
import {months} from '../util/helper';

const Header = () => {
  /*const [date, setDate] = useState('');
  useEffect(() => {
    let d = new Date().toDateString();
    setDate(d.substr(d.indexOf(' ') + 1));
  }, []);
*/
  const {date} = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Heather</Text>
      <Text style={styles.date}>{`${months[date.month]} ${date.year}`}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
  date: {
    color: 'white',
    paddingHorizontal: 4,
    borderRadius: 10,
    backgroundColor: '#262626',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
