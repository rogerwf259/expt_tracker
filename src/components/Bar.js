import React, {useEffect} from 'react';
import Animated, {interpolate, add} from 'react-native-reanimated';
import {Rect} from 'react-native-svg';
import {randomColor} from '../util/helper';

const Bar = ({progress, position, size}) => {
  /*useEffect(() => {
    console.log(`Position of bar ${position}: ${x}`);
  }, [x]);*/
  const AnimatedBar = Animated.createAnimatedComponent(Rect);
  const grow = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const strokeWidth = 3;
  const width = 20;
  const animatedHeight = add(grow, 0);
  const x = position * 36;
  const color = randomColor();
  return (
    <AnimatedBar
      x={x}
      y={290}
      width={width}
      fill="blue"
      height={animatedHeight}
      strokeWidth={strokeWidth}
      stroke="black"
    />
  );
};

export default Bar;
