import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LandingPage from './../authPages/landingPage.js';
import DonorPortal from './../authPages/donorPortal.js';
import DonorSignup from './../authPages/donorSignup.js';
import DriverLogin from './../authPages/deliveryDriverLogin.js';
import ReviewPage from './../authPages/accountReview.js'
import { createStackNavigator } from '@react-navigation/stack';

const NewStack = createStackNavigator();

class AuthNav extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
        <NewStack.Navigator initialRouteName='Authentication'>
          <NewStack.Screen
            name='Landing Page'
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <NewStack.Screen
            name='Donor Portal'
            component={DonorPortal}
            options={{ headerShown: false }}
          />
          <NewStack.Screen
            name='Donor Signup'
            component={DonorSignup}
            options={{ headerShown: false }}
          />
          <NewStack.Screen
            name='Driver Login'
            component={DriverLogin}
            options={{ headerShown: false }}
          />
          <NewStack.Screen
            name='Account Review'
            component={ReviewPage}
            options={{ headerShown: false }}
          />
        </NewStack.Navigator>
    );
  }
}

export default AuthNav;