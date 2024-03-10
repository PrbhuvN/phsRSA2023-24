import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import firebaseApp from './FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { KeyboardAvoidingView } from "react-native";
 
class LoginPage extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        email: '',
        password: '',
      }
  }

  render() {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView 
            behavior="padding"
            style={styles.container}
          >
            <Text style={styles.title}>Green Cornucopia</Text>
            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={(text) => this.setState({email:text})}
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password:text})}
            />
            <Button 
              title="Login"
              onPress={() => {
                console.log('logging in ' + this.state.email + ' ' + this.state.password);
                login(this.state.email, this.state.password, this.props.navigation);
              }}
            />
            <Button 
              title="Sign Up"
              onPress={() => {
                console.log('signing up ' + this.state.email + ' ' + this.state.password)
                signup(this.state.email, this.state.password, this.props.navigation);
              }}
            />
          </KeyboardAvoidingView>
        </View>
      );
  }
}

const auth = getAuth(firebaseApp);
// const keyboardOffset = useHeaderHeight();

const login = async (email, password, navigation) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    navigation.navigate('Dashboard');
  } catch(error) {
    console.log(error);
    alert(error);
  }
}

const signup = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log(response);
    navigation.navigate('Dashboard');
  } catch(error) {
    console.log(error);
    alert(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default LoginPage;