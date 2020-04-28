import {createStackNavigator} from '@react-navigation/stack';
import Tracker from './scenes/Tracker';
import Info from './scenes/Info';

const MainStackNavigator = createStackNavigator();

const MainStackScreen = () => {
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Tracker} />
    <MainStack.Screen name="Login" component={Info} />
  </MainStack.Navigator>;
};
