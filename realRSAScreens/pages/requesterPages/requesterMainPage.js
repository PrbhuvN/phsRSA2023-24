import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class RequesterDonorMainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  createRequest = () => {
    console.log('big boy');
    this.props.navigation.navigate('Request Info');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Requester Main Page</Text>
      </SafeAreaView>
    );
  }
}

export default RequesterDonorMainPage