import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RequestCardView = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        {/*upper bar collection*/}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/*pfp*/}
          <ImageBackground
            source={require('./assets/images/de8116f3-5eab-4da6-a85d-0ea13fdd6186.png')}
          />
          {/* card title */}
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
              position: 'absolute',
              top: 0,
              left: 0,
              textAlign: 'left',
              zIndex: 19,
            }}
            numberOfLines={1}>
            Fresh Fruit Needed!
          </Text>
        </View>
        {/* rest of card */}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '400',
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
          {/* card image */}
          <ImageBackground
            style={{
              position: 'absolute',
              top: 0,
              zIndex: 22,
            }}
            source={require('./assets/images/3f0eb259e014cdc93250787756b2504869bb4195.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RequestCardView;
