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
