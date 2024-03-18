import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNav from './authNav';
import DriverNav from './driverNav';
import DonorNav from './donatorNav';
import RequesterNav from './requesterNav';
import SupportNav from './supportNav';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Parent Navigation' screenOptions={{
          contentStyle: {
            backgroundColor: '#d8fdd1'
          }
        }}>
          <Stack.Screen
            name='Authentication'
            component={AuthNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Driver Navigation'
            component={DriverNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Donor Navigation'
            component={DonorNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Requester Navigation'
            component={RequesterNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Support Navigation'
            component={SupportNav}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;