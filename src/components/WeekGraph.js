import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg from 'react-native-svg';
import {timing} from 'react-native-redash';
import {Easing} from 'react-native-reanimated';
import Bar from '../components/Bar';
import {groupBy} from '../util/helper';

const WeekGraph = ({transacts}) => {
  const [size, setSize] = useState(0);
  let expense = 0;
  let income = 0;
  function getInfo() {
    const amounts = transacts.map(transaction => transaction.amount);
    amounts.forEach(element =>
      element > 0 ? (income += element) : (expense += element),
    );
    console.log(amounts, expense, income);
  }
  useEffect(() => {
    getInfo();
  }, []);
  const bars = [120, 100, 75, 200, 100, 50, 30];
  const config = {
    duration: 1.5 * 1000,
    from: 0,
    to: 150,
    easing: Easing.bounce,
  };
  return (
    <View style={styles.svg}>
      <Svg
        height="90%"
        width="90%"
        style={{
          borderColor: 'black',
          borderWidth: 3,
        }}
        onLayout={event => setSize(event.nativeEvent.layout.height)}>
        {bars.map((value, index) => (
          <Bar
            key={index}
            progress={timing({...config, to: value})}
            position={index + 1}
            size={size}
          />
        ))}
      </Svg>
    </View>
  );
};

export default WeekGraph;

const styles = StyleSheet.create({
  svg: {
    flex: 3,
    borderColor: 'green',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
