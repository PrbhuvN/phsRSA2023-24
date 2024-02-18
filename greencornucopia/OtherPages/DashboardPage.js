import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
 
class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Helo ur computer has virus</Text>
            <Button 
              title="Sign Out"
              onPress={() => {
                this.props.navigation.popToTop();
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
  }
});
 
export default DashboardPage;