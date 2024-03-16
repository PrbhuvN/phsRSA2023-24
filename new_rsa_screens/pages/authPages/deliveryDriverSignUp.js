/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(){
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 400,
            height: 1144,
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 28,
              height: 39.448,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 18,
              marginTop: 40.857,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 23,
            }}
          >
            <ImageBackground
              style={{
                width: 11.303,
                height: 24.663,
                position: 'relative',
                zIndex: 19,
                marginTop: 7.393,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 8.349,
              }}
              source={require('./assets/images/f315e544-b31a-4778-954d-a74d6e051009.png')}
            />
          </View>
          <View
            style={{
              width: 303,
              height: 37,
              backgroundColor: '#d9d9d9',
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              position: 'relative',
              zIndex: 16,
              marginTop: 697.695,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 49,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: '63.01%',
                height: '55.63%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 20.582,
                color: '#898686',
                position: 'absolute',
                top: '16.22%',
                left: 0,
                textAlign: 'center',
                zIndex: 26,
              }}
              numberOfLines={1}
            >
              Re-Enter Password
            </Text>
          </View>
          <ImageBackground
            style={{
              width: 297.6,
              height: 52.682,
              position: 'relative',
              zIndex: 2,
              marginTop: 48,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 54,
            }}
            source={require('./assets/images/70bc6466-9564-4dc3-894c-26a256bd9783.png')}
          >
            <Text
              style={{
                display: 'flex',
                width: '87.03%',
                height: '30.37%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 16,
                color: '#ffffff',
                position: 'absolute',
                top: '34.17%',
                left: '5.71%',
                textAlign: 'center',
                zIndex: 3,
              }}
              numberOfLines={1}
            >
              Request Account Creation
            </Text>
          </ImageBackground>
          <Text
            style={{
              display: 'flex',
              width: 233.6,
              height: 59.295,
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 24,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'center',
              overflow: 'hidden',
              zIndex: 9,
              marginTop: 79.318,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 72,
            }}
          >
            Connect and Share Surplus{'\n'}Food
          </Text>
          <ImageBackground
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            source={require('./assets/images/8d69a665-99ce-4038-8e7e-2da574f4e56f.png')}
          />
          <Text
            style={{
              display: 'flex',
              width: 234.667,
              height: '5.4%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 36,
              color: '#030303',
              position: 'absolute',
              top: '6.99%',
              left: '20.75%',
              textAlign: 'center',
              zIndex: 6,
            }}
          >
            GreenCornucopia
          </Text>
          <ImageBackground
            style={{
              width: '16%',
              height: '6.47%',
              position: 'absolute',
              top: '11.19%',
              left: '42%',
              zIndex: 20,
            }}
            source={require('./assets/images/e930316539a719bb240a81b09af1877d699fdd2a.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: '75.75%',
              height: '3.23%',
              backgroundColor: '#d9d9d9',
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              position: 'absolute',
              top: '23.78%',
              left: '12.25%',
              zIndex: 10,
            }}
          />
          <Text
            style={{
              display: 'flex',
              width: '47.73%',
              height: '1.8%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 20.582,
              color: '#898686',
              position: 'absolute',
              top: '24.3%',
              left: '4%',
              textAlign: 'center',
              zIndex: 11,
            }}
            numberOfLines={1}
          >
            First Name
          </Text>
          <View
            style={{
              width: '75.75%',
              height: '3.23%',
              backgroundColor: '#d9d9d9',
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              position: 'absolute',
              top: '31.12%',
              left: '12.25%',
              zIndex: 12,
            }}
          />
          <Text
            style={{
              display: 'flex',
              width: '47.73%',
              height: '1.8%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 20.582,
              color: '#898686',
              position: 'absolute',
              top: '31.91%',
              left: '4%',
              textAlign: 'center',
              zIndex: 21,
            }}
            numberOfLines={1}
          >
            Last Name
          </Text>
          <View
            style={{
              width: '75.75%',
              height: '3.23%',
              backgroundColor: '#d9d9d9',
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              position: 'absolute',
              top: '38.46%',
              left: '12.25%',
              zIndex: 13,
            }}
          />
          <Text
            style={{
              display: 'flex',
              width: '47.73%',
              height: '1.8%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 20.582,
              color: '#898686',
              position: 'absolute',
              top: '39.07%',
              left: '8.25%',
              textAlign: 'center',
              zIndex: 22,
            }}
            numberOfLines={1}
          >
            Phone Number
          </Text>
          <View
            style={{
              width: '75.75%',
              height: '3.23%',
              backgroundColor: '#d9d9d9',
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              position: 'absolute',
              top: '45.8%',
              left: '12.25%',
              zIndex: 14,
            }}
          />
          <Text
            style={{
              display: 'flex',
              width: '47.73%',
              height: '1.8%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 20.582,
              color: '#898686',
              position: 'absolute',
              top: '46.42%',
              left: '-0.5%',
              textAlign: 'center',
              zIndex: 23,
            }}
            numberOfLines={1}
          >
            Email
          </Text>
          <View
            style={{
              width: '75.75%',
              height: '3.23%',
              backgroundColor: '#d9d9d9',
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              position: 'absolute',
              top: '53.15%',
              left: '12.25%',
              zIndex: 17,
            }}
          />
          <Text
            style={{
              display: 'flex',
              width: '47.73%',
              height: '1.8%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 20.582,
              color: '#898686',
              position: 'absolute',
              top: '53.76%',
              left: '9%',
              textAlign: 'center',
              zIndex: 24,
            }}
            numberOfLines={1}
          >
            Phone Number
          </Text>
          <View
            style={{
              width: '75.75%',
              height: '3.23%',
              backgroundColor: '#d9d9d9',
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              position: 'absolute',
              top: '60.58%',
              left: '12.25%',
              zIndex: 15,
            }}
          />
          <Text
            style={{
              display: 'flex',
              width: '47.73%',
              height: '1.8%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 20.582,
              color: '#898686',
              position: 'absolute',
              top: '61.1%',
              left: '3.75%',
              textAlign: 'center',
              zIndex: 25,
            }}
            numberOfLines={1}
          >
            Password
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
