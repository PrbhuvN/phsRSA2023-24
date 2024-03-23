import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import firebaseApp from '../../FirebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';

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

  signUp = () => {
    this.props.navigation.navigate('Donor Signup');
  };

  render() {
    return (
      <SafeAreaView style={styles.mainFlex}>
        <ScrollView>
          <TouchableOpacity onPress={this.goBack}>
            <Image source={require("../../assets/icons/backIcon.png")} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.titleContent}>GreenCornucopia</Text>
          <Image source={require("../../assets/images/cornucopiaLogo.png")} style={styles.logo} />
          <View style={styles.inputView}>
            <Text styles={styles.inputText}>Email:</Text>
            <TextInput
              styles={styles.emailInput}
              autoCorrect={false}

              autoCapitalize={false}
              keyboardType='email-address'
              placeholderTextColor={'#cccccc'}
              backgroundColor='#ffffff'
              borderRadius={8}
              padding={7}
              placeholder='green@cornucopia.com'
              onChangeText={text => { this.setState({ email: text }) }} />
          </View>
          <View style={styles.inputView}>
            <Text styles={styles.inputText}>Password:</Text>
            <TextInput
              secureTextEntry={true}
              styles={styles.passwordInput}
              autoCorrect={false}

              autoCapitalize={false}
              placeholderTextColor={'#cccccc'}
              backgroundColor='#ffffff'
              borderRadius={8}
              padding={7}
              placeholder='********'
              onChangeText={text => { this.setState({ password: text }) }} />
          </View>
          <TouchableOpacity onPress={() => { login(this.state, this.props.navigation); }}>
            <View style={styles.buttonView} color={''}>
              <Text styles={styles.buttonText} color={'#ffffff'}>
                Login as Donor
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 'auto', padding: 20 }} onPress={this.signUp}>
            <Text>No Account? Click here to Sign Up.</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const login = async (state, navigation) => {
  try {
    const response = await signInWithEmailAndPassword(auth, state.email, state.password);
    console.log(response);
    navigation.navigate('Donor Navigation', {
      screen: 'Main Page',
      params: {
        uid: response.user.uid
      }
  });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const styles = StyleSheet.create({
  mainFlex: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center'
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
  inputView: {
    flexDirection: 'column',
    alignContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  inputText: {
    alignContent: 'left',
  },
  emailInput: {
    borderRadius: 10,
  },
  passwordInput: {
    borderRadius: 10,
  },
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
});



export default DonorLogin;
