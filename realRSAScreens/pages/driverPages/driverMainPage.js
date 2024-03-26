import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
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
      <SafeAreaView style={styles.mainFlex}>
        <View>
          <Text style={styles.welcomeTitle}>Welcome Back Driver!</Text>
          <Text style={styles.subheadTitle}>Current Delivery:</Text>
        </View>
        {/* insert cards here */}
        <DriverNavBar />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainFlex: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    padding: 10,
  },
  subheadTitle: {
    fontSize: 20,
    fontWeight: '400',
    padding: 10,
  }
})

export default DriverMainPage;
