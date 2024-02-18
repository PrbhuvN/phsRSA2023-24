import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthPage from './OtherPages/AuthPage';
import LoginPage from './OtherPages/AuthPage';
import SignupPage from './OtherPages/SignupPage';
import DashboardPage from './OtherPages/DashboardPage';

const Stack = createStackNavigator();
 
class App extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Authentication'>
            <Stack.Screen
              name='Authentication'
              component={AuthPage}
            />
            <Stack.Screen
              name='Dashboard'
              component={DashboardPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

export default App;