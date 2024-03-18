import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  SectionList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const RequestCardView = (data) => {
  return (
    <View
      style={{
        padding: 10
      }}>
      {[data].map((request) => {
        return (
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#b1eba4',
              alignContent: 'stretch',
              justifyContent: 'stretch',
              padding: 5,
              alignItems: 'stretch',
            }}
          >
            <View style={{
              flex: 1,
              padding: 20,

              flexDirection: 'row',
              alignContent: 'stretch',
              justifyContent: 'stretch'
            }}
            >
              <Text
                style={{
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 20,
                  fontWeight: '400',
                  lineHeight: 30,
                  color: '#030303',
                  flex: 2,
                  top: 0,
                  left: 0,
                  textAlign: 'center',
                  zIndex: 19,
                }}
                numberOfLines={1}>
                Fresh Fruit Needed!
              </Text>
              <ImageBackground
                style={{
                  width: 11.813,
                  height: 4.126,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                  alignContent: 'center',
                  justifyContent: 'space-between',
                }}
                source={require('./assets/images/1bda9b54-ce26-4768-908e-2be87be9e56d.png')}
              />
            </View>
            <View
              style={{
                height: 150,
                position: 'relative',
                zIndex: 22,
                padding: 20,
                flex: 1,
              }}>
              <Text
                style={{
                  display: 'flex',
                  width: 252,
                  height: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '400',
                  lineHeight: 24,
                  color: '#030303',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  textAlign: 'left',
                  zIndex: 20,
                }}>
                Apples{'\n'}Oranges{'\n'}Bananas{'\n'}
                {'\n'}Food Bank in Charlotte
              </Text>
            </View>
          </View>
        );
      }
      )
      };
    </View>
  );
}

export default RequestCardView;