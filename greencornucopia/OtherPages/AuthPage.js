import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import firebaseAuth from './FirebaseConfig';
 
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
                console.log('hello ' + this.state.email + ' ' + this.state.password);
                this.props.navigation.navigate('Dashboard');
              }}
            />
            <Button 
              title="Sign Up"
              onPress={() => {
                console.log('hello ' + this.state.email + ' ' + this.state.password);
                this.props.navigation.navigate('Dashboard');
              }}
            />
          </View>
        );
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
    fontSize: 24
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