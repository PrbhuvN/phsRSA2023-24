import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {firebaseApp} from './../../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(firebaseApp);

class DriverLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  goBack = () => {
    this.props.navigation.navigate('Landing Page');
  };

  signup = () => {
    this.props.navigation.navigate('Driver Signup');
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
                zIndex: 17,
                marginTop: 29,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 23,
              }}
            >
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={this.goBack}>
              <ImageBackground
                style={{
                  width: 11.303,
                  height: 17.505,
                  position: 'relative',
                  zIndex: 18,
                  marginTop: 5.247,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 8.349,
                }}
                source={require('./../../assets/images/511aaa46-d4cf-4b92-8be9-371840bff8a3.png')}
              />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                display: 'flex',
                width: 234.667,
                height: 43.826,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 36,
                color: '#030303',
                position: 'relative',
                textAlign: 'center',
                zIndex: 8,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 83,
              }}
              numberOfLines={1}
            >
              GreenCornucopia
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 234.667,
                height: 29.826,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 22.5,
                color: '#030303',
                position: 'relative',
                textAlign: 'center',
                zIndex: 11,
                marginTop: -5.826,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 83,
              }}
              numberOfLines={1}
            >
              Delivery Driver Login
            </Text>
            <ImageBackground
              style={{
                width: 104,
                height: 119,
                position: 'relative',
                zIndex: 19,
                marginTop: 23.174,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 148,
              }}
              source={require('./../../assets/images/e930316539a719bb240a81b09af1877d699fdd2a.png')}
              resizeMode='cover'
            />
            <View
              style={{
                width: 401.067,
                height: 34.087,
                position: 'relative',
                zIndex: 14,
                marginTop: 80,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: -47,
              }}
            >
              <View
                style={{
                  width: '60.37%',
                  height: '100%',
                  backgroundColor: '#d9d9d9',
                  borderTopLeftRadius: 36,
                  borderTopRightRadius: 36,
                  borderBottomRightRadius: 36,
                  borderBottomLeftRadius: 36,
                  position: 'absolute',
                  top: 0,
                  left: '39.63%',
                  zIndex: 13,
                }}
              />
              
              <Text
                style={{
                  display: 'flex',
                  width: '47.61%',
                  height: '42.86%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '700',
                  lineHeight: 14.609,
                  color: '#000000',
                  position: 'absolute',
                  top: '17.86%',
                  left: 0,
                  textAlign: 'center',
                  zIndex: 14,
                }}
                numberOfLines={1}
              >
                Email:
              </Text>
              <TextInput
                style={{
                  width: '60%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '40%',
                  zIndex: 15,
                  paddingLeft: 10,
                }}
                placeholder="Enter your email"
                placeholderTextColor="#000000"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => this.setState({email:text})}
              />
            </View>
            <View
              style={{
                width: 401.067,
                height: 34.087,
                position: 'relative',
                zIndex: 16,
                marginTop: 25.565,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: -47,
              }}
            >
              <View
                style={{
                  width: '60.37%',
                  height: '100%',
                  backgroundColor: '#d9d9d9',
                  borderTopLeftRadius: 36,
                  borderTopRightRadius: 36,
                  borderBottomRightRadius: 36,
                  borderBottomLeftRadius: 36,
                  position: 'absolute',
                  top: 0,
                  left: '39.63%',
                  zIndex: 15,
                }}
              />
              <Text
                style={{
                  display: 'flex',
                  width: '47.61%',
                  height: '42.86%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '700',
                  lineHeight: 14.609,
                  color: '#000000',
                  position: 'absolute',
                  top: '17.86%',
                  left: 0,
                  textAlign: 'center',
                  zIndex: 16,
                }}
                numberOfLines={1}
              >
                Password:
              </Text>
              <TextInput
                style={{
                  width: '60%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '40%',
                  zIndex: 17,
                  paddingLeft: 10,
                }}
                placeholder="Enter your password"
                placeholderTextColor="#000000"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => this.setState({password:text})}
              />
            </View>
            <ImageBackground
              style={{
                width: 297.6,
                height: 37.393,
                position: 'relative',
                zIndex: 4,
                marginTop: 66.261,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 51,
              }}
              source={require('./../../assets/images/3f37f61b-d493-4a52-8ee1-b0f76a76a03c.png')}
            >
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  login(
                    this.state.email,
                    this.state.password,
                    this.props.navigation,
                  );
                }}>
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
                  Login
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                width: 306,
                height: 121.739,
                position: 'relative',
                zIndex: 21,
                marginTop: -6.436,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 47,
              }}
            >
              <View
                style={{
                  width: '34.86%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '17.41%',
                  overflow: 'hidden',
                  zIndex: 12,
                }}
              />
              <Text
                style={{
                  display: 'flex',
                  height: '19.71%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 13,
                  fontWeight: '400',
                  lineHeight: 19.5,
                  color: '#000000',
                  position: 'absolute',
                  top: '26.32%',
                  left: 0,
                  textAlign: 'left',
                  zIndex: 20,
                }}
                numberOfLines={1}
              >
                Not a Delivery Driver?&nbsp;
              </Text>
                <Button
                  style={{
                    display: 'flex',
                    height: '19.71%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 13,
                    fontWeight: '600',
                    lineHeight: 19.5,
                    color: '#0c40f9',
                    position: 'absolute',
                    top: '26.32%',
                    left: '47.06%',
                    textAlign: 'left',
                    zIndex: 21,
                  }}
                  title='Sign up and Get Verified'
                  onPress={this.signup}>
                </Button>
            </View>
            <ImageBackground
              style={{
                width: 297.6,
                height: 52.682,
                position: 'relative',
                zIndex: 5, // changed zIndex from 1 to 5
                marginTop: 0, // changed marginTop from 4319.304 to 0
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 1459,
              }}
              source={require('./../../assets/images/a105f3f5-9bc3-4cf2-8344-5105c9a05a35.png')}
            />
            <Text
              style={{
                display: 'flex',
                width: 259,
                height: 16,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 16,
                color: '#ffffff',
                position: 'relative',
                textAlign: 'center',
                zIndex: 1,
                marginTop: 47.318,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 1241,
              }}
              numberOfLines={1}
            >
              Request Account Creation
            </Text>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
              }}
              source={require('./../../assets/images/e5b20bec-3b85-4213-ab2a-7356e6903acb.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const login = async (email, password, navigation) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    navigation.navigate('Driver Navigation', { 
      screen: 'Main Page', 
      params: 
      {
        uid: response.user.uid
      }
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export default DriverLogin;
