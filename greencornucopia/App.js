import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthPage from './OtherPages/AuthPage';
import LoginPage from './OtherPages/LoginPage';
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
          <Stack.Navigator>
            <Stack.Screen
             name='Home'
             component={AuthPage}
             />
             <Stack.Screen
             name='Login'
             component={LoginPage}
             />
             <Stack.Screen
             name='Signup'
             component={SignupPage}
             />
             <Stack.Screen
             name='Dashboard'
             component={DashboardPage}
             />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

export default App;