import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tracker from './src/scenes/Tracker';
import {GlobalProvider} from './src/context/GlobalContext';
import Info from './src/scenes/Info';

/*const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <MainStack.Navigator headerMode="none">
          <MainStack.Screen name="Home" component={Tracker} />
          <MainStack.Screen name="Login" component={Info} />
        </MainStack.Navigator>
      </GlobalProvider>
    </NavigationContainer>
  );
};
*/

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Tab.Navigator
          tabBarOptions={{
            style: {height: 45},
          }}>
          <Tab.Screen name="Home" component={Tracker} />
          <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
      </GlobalProvider>
    </NavigationContainer>
  );
};

export default App;
