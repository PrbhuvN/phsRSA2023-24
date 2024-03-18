import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import firebaseApp from '../../FirebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(firebaseApp);

class DonorLogin extends React.Component {
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

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          scrollEnabled={true}
          contentInsetAdjustmentBehavior="automatic">
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
            }}>
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
              }}>
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
                  source={require('./../../assets/images/7f9e9b3e-0bd5-4b79-87c0-9f1885a8409a.png')}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                height: 43.826,
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 36,
                color: '#030303',
                position: 'relative',
                textAlign: 'left',
                zIndex: 6,
                marginTop: 6,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 83,
              }}
              numberOfLines={1}>
              GreenCornucopia
            </Text>
            <ImageBackground
              style={{
                width: 142,
                height: 163,
                position: 'relative',
                zIndex: 19,
                marginTop: 8.174,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 129,
              }}
              source={require('./../../assets/images/e930316539a719bb240a81b09af1877d699fdd2a.png')}
              resizeMode="cover"
            />
            <View
              style={{
                width: 401.067,
                height: 34.087,
                position: 'relative',
                zIndex: 14,
                marginTop: 69,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: -47,
              }}>
                
              <TextInput
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
                numberOfLines={1}
                placeholder="email"
                onChangeText={text => this.setState({email: text})}
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
                >Email: </Text>
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
              }}>
                
              <TextInput
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
                placeholder="password"
                onChangeText={text =>
                  this.setState({password: text})
              }
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
                >Password: </Text>
            </View>
            <ImageBackground
              style={{
                width: 297.6,
                height: 37.393,
                position: 'relative',
                zIndex: 2,
                marginTop: 66.261,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 51,
              }}
              source={require('./../../assets/images/b824bafd-9e57-4d35-b5b6-860d661da878.png')}
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
                    display: 'flex',
                    width: '16.49%',
                    height: '58.6%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#ffffff',
                    position: 'absolute',
                    top: '19.71%',
                    left: '40.86%',
                    textAlign: 'center',
                    zIndex: 3,
                  }}
                  numberOfLines={1}>
                  Login
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                width: 233.6,
                height: 136.13,
                position: 'relative',
                zIndex: 12,
                marginTop: -6.436,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 80,
              }}>
              <View
                style={{
                  width: '45.66%',
                  height: '89.43%',
                  position: 'absolute',
                  top: 0,
                  left: '8.68%',
                  overflow: 'hidden',
                  zIndex: 10,
                }}
              />
              <Text
                style={{
                  width: '94.98%',
                  height: '17.89%',
                  fontFamily: 'Poppins',
                  fontSize: 13,
                  fontWeight: '400',
                  lineHeight: 19.5,
                  position: 'absolute',
                  top: '23.54%',
                  left: '3.85%',
                  textAlign: 'left',
                  zIndex: 11,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: 13,
                    fontWeight: '400',
                    lineHeight: 19.5,
                    color: '#000000',
                    position: 'relative',
                    textAlign: 'left',
                  }}>
                  Don’t have an account?&nbsp;
                </Text>
                  <Button
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: 13,
                      fontWeight: '600',
                      lineHeight: 19.5,
                      color: '#004bbc',
                      position: 'relative',
                      textAlign: 'left',
                    }}
                    onPress={() => {handleSignUp(this.props.navigation);}}
                    title='Sign Up'>
                  </Button>
              </Text>
              <Text
                style={{
                  width: '94.98%',
                  height: '17.89%',
                  fontFamily: 'Poppins',
                  fontSize: 13,
                  fontWeight: '400',
                  lineHeight: 19.5,
                  position: 'absolute',
                  top: '23.54%',
                  left: '3.85%',
                  textAlign: 'left',
                  zIndex: 12,
                }}>
              </Text>
              <Text
                style={{
                  display: 'flex',
                  width: 233.6,
                  height: '30.92%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '400',
                  lineHeight: 24,
                  color: '#1c1c1e',
                  position: 'absolute',
                  top: '69.08%',
                  left: 0,
                  textAlign: 'center',
                  zIndex: 9,
                }}>
                Connect and Share Surplus{'\n'}Food
              </Text>
            </View>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              source={require('./../../assets/images/f4cc22de-6fa0-45cc-9bad-5fa20254f9b2.png')}
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
    navigation.navigate('Welcome Page', {
      uid: response.user.uid
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

handleSignUp = (navigation) => {
  navigation.navigate('Donor Signup');
};


export default DonorLogin;
