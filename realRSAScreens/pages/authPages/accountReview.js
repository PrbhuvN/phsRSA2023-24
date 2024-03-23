import React from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class ReviewPage extends React.Component {

  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.navigation.navigate('Landing Page');
  }

  render() {
    return (
      <SafeAreaView style={styles.mainFlex}>
        <TouchableOpacity onPress={this.goBack}>
          <Image source={require("../../assets/icons/backIcon.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Your Account is Being Reviewed!</Text>
        <Text style={styles.bodyText}>Functionality will be limited until our team verifies your account. We will notify you once your account is verified.</Text>
        <Image source={require("../../assets/images/cornucopiaLogo.png")} style={{alignSelf: 'center', padding: 20}}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainFlex: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between'
  },
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bodyText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 15,
  }
});

export default ReviewPage;