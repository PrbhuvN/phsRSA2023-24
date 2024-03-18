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
