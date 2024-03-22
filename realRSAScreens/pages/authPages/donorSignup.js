import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { firebaseApp, db } from './../../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'

const auth = getAuth(firebaseApp);

class DonorSignup extends React.Component {
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
    this.props.navigation.navigate('Donor Portal');
  };

  render() {
    return (
      <SafeAreaView style={styles.mainFlex}>
        <ScrollView>
        <Text style={styles.titleContent}>GreenCornucopia</Text>
        <Image source={require("../../assets/images/cornucopiaLogo.png")} style={styles.logo}/>
        <View style={styles.inputView}>
          <Text styles={styles.inputText}>First Name:</Text>
          <TextInput
            styles={styles.emailInput}
            autoCorrect={false}
            autoComplete={false}
            autoCapitalize={false}
            borderRadius={8}
            placeholderTextColor={'#cccccc'}
            backgroundColor='#ffffff'
            padding={7}
            placeholder='John'
            onChangeText={text => { this.setState({ fName: text }) }} />
        </View>
        <View style={styles.inputView}>
          <Text styles={styles.inputText}>Last Name:</Text>
          <TextInput
            styles={styles.emailInput}
            autoCorrect={false}
            autoComplete={false}
            autoCapitalize={false}
            borderRadius={8}
            placeholderTextColor={'#cccccc'}
            backgroundColor='#ffffff'
            padding={7}
            placeholder='Doe'
            onChangeText={text => { this.setState({ lName: text }) }} />
        </View>
        <View style={styles.inputView}>
          <Text styles={styles.inputText}>Phone Number:</Text>
          <TextInput
            styles={styles.emailInput}
            autoCorrect={false}
            autoComplete={false}
            borderRadius={8}
            autoCapitalize={false}
            keyboardType='phone-pad'
            placeholderTextColor={'#cccccc'}
            backgroundColor='#ffffff'
            padding={7}
            placeholder='xxx-xxx-xxxx'
            onChangeText={text => { this.setState({ number: text }) }} />
        </View>
        <View style={styles.inputView}>
          <Text styles={styles.inputText}>Email:</Text>
          <TextInput
            styles={styles.emailInput}
            autoCorrect={false}
            autoComplete={false}
            autoCapitalize={false}
            keyboardType='email-address'
            borderRadius={8}
            placeholderTextColor={'#cccccc'}
            backgroundColor='#ffffff'
            padding={7}
            placeholder='green@cornucopia.com'
            onChangeText={text => { this.setState({ email: text }) }} />
        </View>
        <View style={styles.inputView}>
          <Text styles={styles.inputText}>Password:</Text>
          <TextInput
            ssecureTextEntry={true}
            styles={styles.passwordInput}
            autoCorrect={false}
            autoComplete={false}
            autoCapitalize={false}
            borderRadius={8}
            placeholderTextColor={'#cccccc'}
            backgroundColor='#ffffff'
            padding={7}
            placeholder='********'
            onChangeText={text => {this.setState({password: text})}}/>
        </View>
        <View style={styles.inputView}>
          <Text styles={styles.inputText}>Confirm Password:</Text>
          <TextInput
            secureTextEntry={true}
            styles={styles.passwordInput}
            autoCorrect={false}
            autoComplete={false}
            autoCapitalize={false}
            borderRadius={8}
            placeholderTextColor={'#cccccc'}
            backgroundColor='#ffffff'
            padding={7}
            placeholder='********'
            onChangeText={text => {this.setState({confirmPassword: text})}}/>
        </View>
        <TouchableOpacity onPress={() => {signup(this.state, this.props.navigation);}}>
          <View style={styles.buttonView} color={''}>
            <Text styles={styles.buttonText} color={'#ffffff'}>
              Request Account Creation
            </Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
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
    alignSelf: 'center',
  },
  titleContent: {
    fontSize: 30,
    fontWeight: 100,
    textAlign: 'center',
    paddingTop: 30,
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
  inputView: {
    flexDirection: 'column',
    alignContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  inputText: {
    alignContent: 'left',
    margin: 5,
  },
  emailInput: {
    autoCapitalize: 'none',
    autoCorrect: 'false',
    borderRadius: 15,
  },
  passwordInput: {
    autoCapitalize: 'none',
    autoCorrect: 'false',
    borderRadius: 15,
  },
});

const signup = async (state, navigation) => {
  if (state.fName == '' || state.lName == '' || state.number == '' || state.email == '' || state.password == '' || state.confirmPassword == '') {
    alert('Please complete all fields.');
    return;
  }
  if (state.password != state.confirmPassword) {
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
      const firestoreResponse = await setDoc(doc(db, "users", response.user.uid), userData);
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

export default DonorSignup;
