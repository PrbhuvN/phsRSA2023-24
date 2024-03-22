import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
  }

  donorRecipientPortal = () => {
    this.props.navigation.navigate('Donor Login');
    console.log('Donor/Recipient button pressed!');
  };

  driverPortal = () => {
    this.props.navigation.navigate('Driver Login');
    console.log('Delivery Driver button pressed!');
  };

  render() {
    return (
      <SafeAreaView style={styles.mainFlex}>
        <Text style={styles.titleContent}>GreenCornucopia</Text>
        <Image source={require("../../assets/images/cornucopiaLogo.png")} style={styles.logo}/>
        <TouchableOpacity onPress={this.donorRecipientPortal}>
          <View style={styles.buttonView}>
            <Text styles={styles.buttonText} color={'#ffffff'}>
              Donor/Recipient Portal
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.driverPortal}>
          <View style={styles.buttonView}>
            <Text styles={styles.buttonText} color={'#ffffff'}>
              Delivery Driver Portal
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainFlex: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  logo: {
    alignSelf:'center',
  },
  titleContent: {
    fontSize: 30,
    fontWeight: 100,
    textAlign: 'center',
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
});

export default LandingPage;
