import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoRequest = () => {
    this.props.navigation.navigate('Requester Navigation');
  };

  gotoDonate = () => {
    this.props.navigation.navigate('Donor Navigation', {
      screen: 'My Donations'
    });
  };

  render() {
    return (
      <SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default WelcomePage;