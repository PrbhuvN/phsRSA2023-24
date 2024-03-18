import React from 'react';

import RequesterDonorMainPage from '../requesterPages/requesterDonorMainPage';
import RequestConfirmation from '../requesterPages/foodRequestConfirm';
import RequestExpiry from '../requesterPages/foodRequestExpiry';
import RequestInfo from '../requesterPages/foodRequestInfo';
import RequestCheckout from '../requesterPages/requestCheckout';
import ViewRequests from '../requesterPages/viewDonationRequests';


import { createStackNavigator } from '@react-navigation/stack';

const RequesterStack = createStackNavigator();

class DonatorNav extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
        <RequesterStack.Navigator initialRouteName='Requester Navigation' screenOptions={{
          contentStyle: {
            backgroundColor: '#d8fdd1'
          }
        }}>
          <RequesterStack.Screen
            name='Main Page'
            component={RequesterDonorMainPage}
            options={{ headerShown: false }}
          />
          <RequesterStack.Screen
            name='Confirm Request'
            component={RequestConfirmation}
            options={{ headerShown: false }}
          />
          <RequesterStack.Screen
            name='Request Expiry'
            component={RequestExpiry}
            options={{ headerShown: false }}
          />
          <RequesterStack.Screen
            name='Request Info'
            component={RequestInfo}
            options={{ headerShown: false }}
          />
          <RequesterStack.Screen
            name='Request Checkout'
            component={RequestCheckout}
            options={{ headerShown: false }}
          />
          <RequesterStack.Screen
            name='View Requests'
            component={ViewRequests}
            options={{ headerShown: false }}
          />
        </RequesterStack.Navigator>
    );
  }
}

export default DonatorNav;