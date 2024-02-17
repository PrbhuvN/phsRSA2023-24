import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
 
class AuthPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>The Green Cornucopia</Text>
            <Button title="Login" onPress={() =>
              this.props.navigation.navigate('Login')
            }/>
            <Button title="Sign Up" onPress={() =>
              this.props.navigation.navigate('Signup')
            }/>
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
  }
});


 
export default AuthPage;