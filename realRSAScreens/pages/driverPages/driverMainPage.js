import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
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
      <SafeAreaView style={styles.mainFlex}>
        <View>
          <Text style={styles.welcomeTitle}>Welcome Back Driver!</Text>
          <Text style={styles.subheadTitle}>Current Delivery:</Text>
        </View>
        {/* insert cards here */}
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('View Requests') }}>
          <View style={styles.buttonView} color={''}>
            <Text styles={styles.buttonText} color={'#ffffff'}>
              View Available Requests
            </Text>
          </View>
        </TouchableOpacity>
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
  },
  buttonView: {
    backgroundColor: '#4085f5',
    borderRadius: 8,
    padding: 10,
    margin: 15,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 50,
    fontSize: 18,
  },
})

export default DriverMainPage;
