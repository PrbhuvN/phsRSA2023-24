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
    this.props.navigation.navigate('Donor Portal');
    console.log('Donor/Recipient button pressed!');
  };

  handleDriverPress = () => {
    this.props.navigation.navigate('Driver Login');
    console.log('Delivery Driver button pressed!');
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          scrollEnabled={true}
          contentInsetAdjustmentBehavior='automatic'
        >
          <View
            style={{
              width: 400,
              height: 812,
              fontSize: 0,
              position: 'relative',
              overflow: 'hidden',
              marginTop: 0,
              marginRight: 'auto',
              marginBottom: 0,
              marginLeft: 'auto',
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 313.6,
                height: 58.435,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 32,
                fontWeight: '700',
                lineHeight: 48,
                color: '#030303',
                position: 'relative',
                textAlign: 'center',
                zIndex: 2,
                marginTop: 116,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 43,
              }}
              numberOfLines={1}
            >
              GreenCornucopia
            </Text>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              source={require('./../../assets/images/82756143-0c8d-478d-a838-b2b974c7716a.png')}
            />
            <ImageBackground
              style={{
                width: 235,
                height: 269,
                position: 'absolute',
                top: 230,
                left: 82,
                zIndex: 11,
              }}
              source={require('./../../assets/images/e930316539a719bb240a81b09af1877d699fdd2a.png')}
              resizeMode='cover'
            />
            <TouchableOpacity
              style={{
                width: 348.8,
                height: 43.826,
                position: 'absolute',
                top: 673,
                left: 26,
                zIndex: 1,
                backgroundColor: '#007bff',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.handleDonorRecipientPress}
            >
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#ffffff',
                }}
                numberOfLines={1}
              >
                Donor/Recipient Portal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 348.8,
                height: 43.826,
                position: 'absolute',
                top: 735,
                left: 26,
                zIndex: 9,
                backgroundColor: '#007bff',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.handleDriverPress}
            >
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#ffffff',
                }}
                numberOfLines={1}
              >
                Delivery Driver Portal
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                display: 'flex',
                width: 233.6,
                height: '5.18%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'absolute',
                top: '73.77%',
                left: '20.75%',
                textAlign: 'left',
                zIndex: 5,
              }}
            >
              Connect and Share Surplus
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 39.467,
                height: '5.18%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'absolute',
                top: '77.66%',
                left: '44.22%',
                textAlign: 'left',
                zIndex: 6,
              }}
            >
              food
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default LandingPage;
