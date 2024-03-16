import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNav from './pages/parentNavPages/authNav';

const Stack = createStackNavigator();

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Parent Navigation'>
          <Stack.Screen
            name='Authentication'
            component={AuthNav}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;