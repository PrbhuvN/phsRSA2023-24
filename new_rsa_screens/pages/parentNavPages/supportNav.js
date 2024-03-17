import React from 'react';

import ChatPage from './../supportPages/chatPage';
import HelpPage from './../supportPages/helpPage';


import { createStackNavigator } from '@react-navigation/stack';

const SupportStack = createStackNavigator();

class SupportNav extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
        <SupportStack.Navigator initialRouteName='Support Navigation'>
          <SupportStack.Screen
            name='Chat Page'
            component={ChatPage}
            options={{ headerShown: false }}
          />
          <SupportStack.Screen
            name='Help Page'
            component={HelpPage}
            options={{ headerShown: false }}
          />
        </SupportStack.Navigator>
    );
  }
}

export default SupportNav;