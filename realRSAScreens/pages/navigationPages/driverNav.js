import React from 'react';

import DriverMainPage from '../driverPages/driverMainPage'
import MapPage from '../driverPages/map'
import AcceptedRequests from '../driverPages/acceptedRequests'
import UpcomingDelivery from '../driverPages/upcomingFoodDelivery'
import RequestsPage from '../driverPages/viewRequests'

import { createStackNavigator } from '@react-navigation/stack';

const DriverStack = createStackNavigator();

class DriverNav extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.navigation.state.params);
    return ( 
        <DriverStack.Navigator initialRouteName='Driver Navigation'>
          <DriverStack.Screen
            name='Main Page'
            component={DriverMainPage}
            options={{ headerShown: false }}
          />
          <DriverStack.Screen
            name='Map'
            component={MapPage}
            options={{ headerShown: false }}
          />
          <DriverStack.Screen
            name='Accepted Requests'
            component={AcceptedRequests}
            options={{ headerShown: false }}
          />
          <DriverStack.Screen
            name='Upcoming Delivery'
            component={UpcomingDelivery}
            options={{ headerShown: false }}
          />
          <DriverStack.Screen
            name='View Requests'
            component={RequestsPage}
            options={{ headerShown: false }}
          />
        </DriverStack.Navigator>
    );
  }
}

export default DriverNav;