import React from 'react';

import LandingPage from '../authPages/landingPage.js';
import DonorLogin from '../authPages/donorLogin.js';
import DonorSignup from '../authPages/donorSignup.js';
import RequesterLogin from '../authPages/requesterLogin.js';
import RequesterSignup from '../authPages/requesterSignup.js';
import DriverLogin from '../authPages/driverLogin.js';
import DriverSignup from '../authPages/driverSignup.js';
import ReviewPage from '../authPages/accountReview.js'
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

class AuthNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthStack.Navigator initialRouteName='Authentication'>
        <AuthStack.Screen
          name='Landing Page'
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Donor Login'
          component={DonorLogin}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Donor Signup'
          component={DonorSignup}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Requester Login'
          component={RequesterLogin}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Requester Signup'
          component={RequesterSignup}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Driver Login'
          component={DriverLogin}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Driver Signup'
          component={DriverSignup}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Account Review'
          component={ReviewPage}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
}

export default AuthNav;