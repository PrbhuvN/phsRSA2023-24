import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import DriverNavBar from '../driverNavBar';

class DriverMainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoRequests = () => {
    this.props.navigation.navigate('View Requests', {
      uid: this.props.route.params.uid,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Driver Main Page</Text>
        <DriverNavBar/>
      </SafeAreaView>
    );
  }
}

export default DriverMainPage;
