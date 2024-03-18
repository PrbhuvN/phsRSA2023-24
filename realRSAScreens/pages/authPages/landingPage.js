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

class LandingPage extends React.Component {
  
  constructor(props) {
    super(props);
  }

  handleDonorRecipientPress = () => {
    this.props.navigation.navigate('Donor Login');
    console.log('Donor/Recipient button pressed!');
  };

  handleDriverPress = () => {
    this.props.navigation.navigate('Driver Login');
    console.log('Delivery Driver button pressed!');
  };

  render() {
    return (
      <SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default LandingPage;
