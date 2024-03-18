import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {firebaseApp, db} from './../../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'

const auth = getAuth(firebaseApp);

class DriverSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      fName: '',
      lName: '',
      number: '',
    };
  }
  goBack = () => {
    this.props.navigation.navigate('Driver Login');
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
              height: 1144,
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
                height: 39.448,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 18,
                marginTop: 40.857,
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
                onPress={() => {
                  this.goBack();
                }}>
              <ImageBackground
                style={{
                  width: 11.303,
                  height: 24.663,
                  position: 'relative',
                  zIndex: 19,
                  marginTop: 7.393,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 8.349,
                }}
                source={require('./../../assets/images/f315e544-b31a-4778-954d-a74d6e051009.png')}
              />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 303,
                height: 37,
                backgroundColor: '#d9d9d9',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'relative',
                zIndex: 16,
                marginTop: 697.695,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 49,
              }}>
            </View>
            <ImageBackground
              style={{
                width: 297.6,
                height: 52.682,
                position: 'relative',
                zIndex: 2,
                marginTop: 48,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 54,
              }}
              source={require('./../../assets/images/70bc6466-9564-4dc3-894c-26a256bd9783.png')}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  signup(this.state, this.props.navigation);
                }}
                >
                <Text
                  style={{
                    display: 'flex',
                    width: '87.03%',
                    height: '30.37%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 16,
                    color: '#ffffff',
                    position: 'absolute',
                    top: '34.17%',
                    left: '5.71%',
                    textAlign: 'center',
                    zIndex: 3,
                  }}
                  numberOfLines={1}>
                  Request Account Creation
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <Text
              style={{
                display: 'flex',
                width: 233.6,
                height: 59.295,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'center',
                overflow: 'hidden',
                zIndex: 9,
                marginTop: 79.318,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 72,
              }}>
              Connect and Share Surplus{'\n'}Food
            </Text>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              source={require('./../../assets/images/8d69a665-99ce-4038-8e7e-2da574f4e56f.png')}
            />
            <Text
              style={{
                display: 'flex',
                width: 234.667,
                height: '5.4%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 36,
                color: '#030303',
                position: 'absolute',
                top: '6.99%',
                left: '20.75%',
                textAlign: 'center',
                zIndex: 6,
              }}>
              GreenCornucopia
            </Text>
            <ImageBackground
              style={{
                width: '16%',
                height: '6.47%',
                position: 'absolute',
                top: '11.19%',
                left: '42%',
                zIndex: 20,
              }}
              source={require('./../../assets/images/e930316539a719bb240a81b09af1877d699fdd2a.png')}
              resizeMode="cover"
            />
            <View
              style={{
                width: '75.75%',
                height: '3.23%',
                backgroundColor: '#d9d9d9',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'absolute',
                top: '23.78%',
                left: '12.25%',
                zIndex: 10,
              }}
            />
            <TextInput
            
            placeholder="First Name"
              style={{
                display: 'flex',
                width: '47.73%',
                height: '1.8%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                opacity: 100,
                lineHeight: 20.582,
                color: 'black',
                position: 'absolute',
                top: '24.3%',
                left: '16%',
                textAlign: 'left',
                zIndex: 11,
              }}
              numberOfLines={1}
              onChangeText={(text) => this.setState({fName:text})}>
              
            </TextInput>

            <View
              style={{
                width: '75.75%',
                height: '3.23%',
                backgroundColor: '#d9d9d9',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'absolute',
                top: '31.12%',
                left: '12.25%',
                zIndex: 12,
              }}
            />
            <TextInput
            placeholder="Last Name"
              style={{
                display: 'flex',
                width: '47.73%',
                height: '1.8%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 20.582,
                color: 'black',
                position: 'absolute',
                top: '31.91%',
                left: '16%',
                textAlign: 'left',
                zIndex: 21,
              }}
              numberOfLines={1}
              onChangeText={(text) => this.setState({lName:text})}>
              
            </TextInput>
            <View
              style={{
                width: '75.75%',
                height: '3.23%',
                backgroundColor: '#d9d9d9',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'absolute',
                top: '38.46%',
                left: '12.25%',
                zIndex: 13,
              }}
            />
            <TextInput
            placeholder="Phone Number"
              style={{
                display: 'flex',
                width: '47.73%',
                height: '1.8%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 20.582,
                color: 'black',
                position: 'absolute',
                top: '39.07%',
                left: '16%',
                textAlign: 'left',
                zIndex: 22,
              }}
              numberOfLines={1}
              onChangeText={(text) => this.setState({number:text})}>
              
            </TextInput>
            <View
              style={{
                width: '75.75%',
                height: '3.23%',
                backgroundColor: '#d9d9d9',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'absolute',
                top: '45.8%',
                left: '12.25%',
                zIndex: 14,
              }}
            />
            <TextInput
              style={{
                display: 'flex',
                width: '47.73%',
                height: '1.8%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 20.582,
                color: 'black',
                position: 'absolute',
                top: '46.42%',
                left: '-0.5%',
                textAlign: 'center',
                zIndex: 23,
              }}
              onChangeText={(text) => this.setState({email:text})}
              numberOfLines={1}
              placeholder='email'>
            </TextInput>
            <View
              style={{
                width: '75.75%',
                height: '3.23%',
                backgroundColor: '#d9d9d9',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'absolute',
                top: '53.15%',
                left: '12.25%',
                zIndex: 17,
              }}
            />
            <TextInput
              style={{
                display: 'flex',
                width: '47.73%',
                height: '1.8%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 20.582,
                color: 'black',
                position: 'absolute',
                top: '53.76%',
                left: '9%',
                textAlign: 'center',
                zIndex: 24,
              }}
              onChangeText={(text) => this.setState({password:text})}
              numberOfLines={1}
              secureTextEntry={true}
              placeholder='password'>
            </TextInput>
            <View
              style={{
                width: '75.75%',
                height: '3.23%',
                backgroundColor: '#d9d9d9',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'absolute',
                top: '60.58%',
                left: '12.25%',
                zIndex: 15,
                
              }}
            />
            <TextInput
              style={{
                display: 'flex',
                width: '47.73%',
                height: '1.8%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 20.582,
                color: 'black',
                position: 'absolute',
                top: '61.1%',
                left: '3.75%',
                textAlign: 'center',
                zIndex: 25,
                
              }}
              onChangeText={(text) => this.setState({confirmPassword:text})}
              secureTextEntry={true}
              numberOfLines={1}
              placeholder='re-enter password'>
            </TextInput>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const signup = async (state, navigation) => {
  if (state.fName == '' || state.lName == '' || state.number == '' || state.email == '' || state.password == '' || state.confirmPassword == '')
  {
    alert('Please complete all fields.');
    return;
  }
  if (state.password != state.confirmPassword)
  {
    alert('Passwords do not match.');
  }
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      state.email,
      state.password,
    );
    console.log(response);

    const userData = {
      fName: state.fName,
      lName: state.lName,
      number: state.number
    }

    try {
      const firestoreResponse = await setDoc(doc(db, "drivers", response.user.uid), userData);
      console.log(firestoreResponse);
    } catch (error) {
      console.log(error);
      alert(error);
    }
    navigation.navigate('Account Review');
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export default DriverSignup;
