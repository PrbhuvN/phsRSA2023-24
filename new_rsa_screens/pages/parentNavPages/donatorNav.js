import React from 'react';

import DonatorMainPage from './../donatorPages/donatorMainPage'
import DonationConfirmation from './../donatorPages/donateFoodConfirmation'
import DonationExpiry from './../donatorPages/donateFoodExpiry'
import DonationInfo from './../donatorPages/donateFoodInfo'
import MyDonations from './../donatorPages/myDonations'

import { createStackNavigator } from '@react-navigation/stack';

const DonatorStack = createStackNavigator();

class DonatorNav extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
        <DonatorStack.Navigator initialRouteName='Donor Navigation'>
          <DonatorStack.Screen
            name='Main Page'
            component={DonatorMainPage}
            options={{ headerShown: false }}
          />
          <DonatorStack.Screen
            name='My Donations'
            component={MyDonations}
            options={{ headerShown: false }}
          />
          <DonatorStack.Screen
            name='Donation Info'
            component={DonationInfo}
            options={{ headerShown: false }}
          />
          <DonatorStack.Screen
            name='Donation Expiry'
            component={DonationExpiry}
            options={{ headerShown: false }}
          />
          <DonatorStack.Screen
            name='Donation Confirmation'
            component={DonationConfirmation}
            options={{ headerShown: false }}
          />
        </DonatorStack.Navigator>
    );
  }
}

export default DonatorNav;