/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ReviewPage extends React.Component {

  constructor(props) {
    super(props);
  }

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
              position: 'relative',
              overflow: 'hidden',
              marginTop: 0,
              marginRight: 'auto',
              marginBottom: 0,
              marginLeft: 'auto',
            }}
          >
            <View
              style={{
                width: 28,
                height: 28,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 10,
                marginTop: 29,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 23,
              }}
            >
              <ImageBackground
                style={{
                  width: 11.303,
                  height: 17.505,
                  position: 'relative',
                  zIndex: 11,
                  marginTop: 5.247,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 8.349,
                }}
                source={require('./../../assets/images/7c91e4f4-ae1a-49a1-88e1-ad210098d597.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                width: 317,
                height: 91,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 32,
                fontWeight: '700',
                lineHeight: 48,
                color: '#030303',
                position: 'relative',
                textAlign: 'center',
                zIndex: 5,
                marginTop: 17,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 41,
              }}
            >
              Your Account is Being Reviewed!
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 333,
                height: 207,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 36,
                color: '#030303',
                position: 'relative',
                textAlign: 'center',
                zIndex: 8,
                marginTop: 71,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 34,
              }}
            >
              Functionality will be restricted until our team verifies your
              account. We will notify you once our investigation is concluded.
            </Text>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              source={require('../../assets/images/2fa68a1c-92dd-47d2-9750-0d06eeda6619.png')}
            />
            <ImageBackground
              style={{
                width: '49%',
                height: '27.59%',
                position: 'absolute',
                top: '58.74%',
                left: '25.5%',
                zIndex: 12,
              }}
              source={require('./../../assets/images/e930316539a719bb240a81b09af1877d699fdd2a.png')}
              resizeMode='cover'
            >
              <Text
                style={{
                  display: 'flex',
                  width: '25.03%',
                  height: '9.78%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#ffffff',
                  position: 'absolute',
                  top: '82.31%',
                  left: '36.02%',
                  textAlign: 'center',
                  zIndex: 2,
                }}
                numberOfLines={1}
              >
                Login
              </Text>
            </ImageBackground>
            <View
              style={{
                width: '26.67%',
                height: '14.99%',
                position: 'absolute',
                top: '66.25%',
                left: '25.07%',
                overflow: 'hidden',
                zIndex: 9,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ReviewPage;