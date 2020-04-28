import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle, Text} from 'react-native-svg';
import Animated, {interpolate, multiply} from 'react-native-reanimated';

const Graph = ({progress, percentage}) => {
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const alpha = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI * 2],
  });
  const [size, setSize] = useState(0);
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumnference = radius * 2 * Math.PI;
  const strokeDashoffset = multiply(alpha, radius);
  return (
    <View
      style={styles.container}
      onLayout={event => setSize(event.nativeEvent.layout.width - 20)}>
      <Svg width={size} height={size}>
        <Text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          stroke="white"
          strokeWidth={1}
          dy={1}>
          {`${Math.ceil(percentage * 100)}%`}
        </Text>
        <Circle
          stroke="#BD76CA"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />
        <AnimatedCircle
          stroke="#38363E"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circumnference} ${circumnference}`}
          {...{strokeWidth, strokeDashoffset}}
        />
      </Svg>
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
