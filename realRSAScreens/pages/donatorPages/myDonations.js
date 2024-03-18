import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';

class MyDonations extends React.Component {
  constructor(props) {
    super(props);
  }

  createDonation = () => {
    this.props.navigation.navigate('Donation Info');
  }

  render() {
    return (
      <SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default MyDonations;
