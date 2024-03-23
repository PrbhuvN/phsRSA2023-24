import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomBar from '../navBar.js';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoRequest = () => {
    this.props.navigation.navigate('Requester Navigation', {
      screen: 'Main Page',
      params: {
        uid: this.props.route.params.uid
      }
    });
  };

  gotoDonate = () => {
    this.props.navigation.navigate('Donor Navigation', {
      screen: 'Main Page',
      params: {
        uid: this.props.route.params.uid
      }
    });
  };

  render() {
    console.log('uid: ' + this.props.route.params.uid);
    return (
      <SafeAreaView style={styles.mainFlex}>
        <Text style={styles.welcomeTitle}>
          Welcome Back, Sid
        </Text>
        <View style={styles.redirectContainer}>
          <TouchableOpacity onPress={this.gotoRequest}>
            <View style={styles.redirectCard}>
              <Image source={require("../../assets/icons/requestIcon.png")} style={styles.redirectIcon} />
              <Text>
                Request
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoDonate}>
            <View style={styles.redirectCard}>
              <Image source={require("../../assets/icons/donateIcon.png")} style={styles.redirectIcon} />
              <Text>
                Distribute
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <BottomBar />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainFlex: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  welcomeTitle: {
    fontWeight: '300',
    fontSize: 35,
    textAlign: 'center',
    padding: 30,
  },
  redirectContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  redirectCard: {
    backgroundColor: '#96c9f2',
    borderRadius: 12,
    padding: 15,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redirectIcon: {
    alignSelf: 'center',
    margin: 5,
    width: 40,
    height: 40,
  }
});

export default WelcomePage;