import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerView}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home Page');}}>
                    <Image source={require("../assets/icons/homeIcon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('View Requests');}}>
                    <Image source={require("../assets/icons/searchIcon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Map');}}>
                    <Image source={require("../assets/icons/truckIcon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Support Navigation', { screen: 'Chat Page'});}}>
                    <Image source={require("../assets/icons/chatIcon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Support Navigation', { screen: 'Profile Page'});}}>
                    <Image source={require("../assets/icons/profileIcon.png")} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    icon: {
        alignSelf: 'center'
    }
});

export default NavBar;