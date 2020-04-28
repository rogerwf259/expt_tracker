import React, {Component} from 'react';
import {Text, StyleSheet, View, Animated, I18nManager} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class SwipeableRow extends Component {
  renderAction = (text, color, x, progress, id) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const deleteHandler = () => {
      this.close();
      this.props.removeTransaction();
    };
    const editHandler = () => {
      this.close();
      this.props.editTransaction();
    };
    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          onPress={id ? editHandler : deleteHandler}
          style={[styles.rightAction, {backgroundColor: color}]}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };
  renderRightAction = progress => {
    return (
      <View
        style={{
          width: 80,
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        }}>
        {this.renderAction('Delete', 'red', 80, progress, false)}
      </View>
    );
  };
  renderLeftAction = progress => {
    return (
      <View
        style={{
          width: 80,
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        }}>
        {this.renderAction('Edit', 'blue', -80, progress, true)}
      </View>
    );
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        rightThreshold={40}
        renderLeftActions={this.renderLeftAction}
        renderRightActions={this.renderRightAction}>
        {this.props.children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
