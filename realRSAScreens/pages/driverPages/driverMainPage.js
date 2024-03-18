import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
      </SafeAreaView>
    );
  }
}

export default DriverMainPage;
