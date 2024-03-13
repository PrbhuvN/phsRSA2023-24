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

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 400,
            height: 812,
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
              width: 389,
              height: 138.703,
              position: 'relative',
              zIndex: 10,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
            <ImageBackground
              style={{
                width: '27.42%',
                height: '80.97%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 7,
              }}
              source={require('./assets/images/fc78f91d-648c-4189-b717-4710c179c7c1.png')}
            >
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 8,
                }}
                source={require('./assets/images/5b147269-02bb-4a33-a237-397d6a396ae7.png')}
              />
            </ImageBackground>
            <ImageBackground
              style={{
                width: '19.78%',
                height: '38.44%',
                position: 'absolute',
                top: '6.52%',
                left: '80.35%',
                zIndex: 5,
              }}
              source={require('./assets/images/14247988-838a-42a9-8489-f2094210b4ca.png')}
            >
              <Text
                style={{
                  display: 'flex',
                  height: '38.88%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 13,
                  fontWeight: '400',
                  lineHeight: 19.5,
                  color: '#1c1c1e',
                  position: 'absolute',
                  top: '33.34%',
                  left: '17.71%',
                  textAlign: 'left',
                  zIndex: 6,
                }}
                numberOfLines={1}
              >
                Dismiss
              </Text>
            </ImageBackground>
            <Text
              style={{
                display: 'flex',
                height: '19.43%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'absolute',
                top: '19.84%',
                left: '4.39%',
                textAlign: 'left',
                zIndex: 10,
              }}
              numberOfLines={1}
            >
              Food Request
            </Text>
            <ImageBackground
              style={{
                width: '94.04%',
                height: '43.64%',
                position: 'absolute',
                top: '56.72%',
                left: '4.4%',
                zIndex: 2,
              }}
              source={require('./assets/images/96d00f40-66bf-4449-a0bc-914fead9eb31.png')}
            >
              <Text
                style={{
                  display: 'flex',
                  height: '38.97%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#1c1c1e',
                  position: 'absolute',
                  top: '33.3%',
                  left: '2.47%',
                  textAlign: 'left',
                  zIndex: 3,
                }}
                numberOfLines={1}
              >
                Name
              </Text>
            </ImageBackground>
          </View>
          <ImageBackground
            style={{
              width: 365.8,
              height: 60.524,
              position: 'relative',
              zIndex: 25,
              marginTop: 38.797,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.5,
            }}
            source={require('./assets/images/7f02741a-6a9a-4db7-bc24-af6f9684cd57.png')}
          >
            <Text
              style={{
                display: 'flex',
                height: '38.97%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 21,
                color: '#1c1c1e',
                position: 'absolute',
                top: '30.57%',
                left: '2.32%',
                textAlign: 'left',
                zIndex: 26,
              }}
              numberOfLines={1}
            >
              Address
            </Text>
          </ImageBackground>
          <ImageBackground
            style={{
              width: 365.8,
              height: 60.524,
              position: 'relative',
              zIndex: 27,
              marginTop: 29.476,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 16.5,
            }}
            source={require('./assets/images/857a83ba-9205-4e8e-822f-f65c1db3394d.png')}
          >
            <Text
              style={{
                display: 'flex',
                height: '39.65%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 21,
                color: '#1c1c1e',
                position: 'absolute',
                top: '32.22%',
                left: '2.6%',
                textAlign: 'left',
                zIndex: 28,
              }}
              numberOfLines={1}
            >
              Requested food
            </Text>
          </ImageBackground>
          <Text
            style={{
              height: 24,
              fontFamily: 'Poppins',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 21,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 29,
              marginTop: 129.976,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 150,
            }}
            numberOfLines={1}
          >
            Upload Photo
          </Text>
          <ImageBackground
            style={{
              width: 348.8,
              height: 51.872,
              position: 'relative',
              zIndex: 31,
              marginTop: 188,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 25,
            }}
            source={require('./assets/images/e72c8d13-cb65-4ac0-826a-a6c0bc768f4b.png')}
          >
            <Text
              style={{
                display: 'flex',
                height: '42.41%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 22,
                color: '#ffffff',
                position: 'absolute',
                top: '28.92%',
                left: '38.42%',
                textAlign: 'left',
                zIndex: 32,
              }}
              numberOfLines={1}
            >
              Continue
            </Text>
          </ImageBackground>
          <View
            style={{
              width: 333.2,
              height: 45,
              position: 'relative',
              zIndex: 23,
              marginTop: 32.192,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 44.333,
            }}
          >
            <ImageBackground
              style={{
                width: '13.51%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: '42.02%',
                zIndex: 16,
              }}
              source={require('./assets/images/fc0b77d6-0f70-409b-b03a-cd96b706bcbb.png')}
            >
              <View
                style={{
                  width: 15,
                  height: 16,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 17,
                  marginTop: 14,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 15,
                }}
              >
                <ImageBackground
                  style={{
                    width: 13.125,
                    height: 14,
                    position: 'relative',
                    zIndex: 18,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0.94,
                  }}
                  source={require('./assets/images/54871782-1b1d-4cdd-8cac-5cfe39d29fbf.png')}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              style={{
                width: '5.76%',
                height: '50.05%',
                position: 'absolute',
                top: '26.67%',
                left: 0,
                overflow: 'hidden',
                zIndex: 14,
              }}
              source={require('./assets/images/fc005423-192b-42e2-a1c5-e659515b685b.png')}
            />
            <View
              style={{
                width: '6%',
                height: '44.44%',
                position: 'absolute',
                top: '26.67%',
                left: '21.01%',
                overflow: 'hidden',
                zIndex: 23,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.999,
                  height: 20.002,
                  position: 'relative',
                  zIndex: 24,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./assets/images/a94d04b4-6aee-4cfa-8aac-a2e61c362ea8.png')}
              />
            </View>
            <View
              style={{
                width: '5.76%',
                height: '50.05%',
                position: 'absolute',
                top: '26.67%',
                left: '72.03%',
                overflow: 'hidden',
                zIndex: 12,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.2,
                  height: 18.017,
                  position: 'relative',
                  zIndex: 13,
                  marginTop: 2.252,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./assets/images/47b8fec7-a408-4751-b3d1-422c3ee1920b.png')}
              />
            </View>
            <View
              style={{
                width: '5.76%',
                height: '50.05%',
                position: 'absolute',
                top: '26.67%',
                left: '94.24%',
                overflow: 'hidden',
                zIndex: 19,
              }}
            >
              <View
                style={{
                  width: '104.17%',
                  height: '88.81%',
                  position: 'absolute',
                  top: '-0.29%',
                  left: '-1.74%',
                  overflow: 'hidden',
                  zIndex: 21,
                }}
              >
                <ImageBackground
                  style={{
                    width: 17.5,
                    height: 19.999,
                    position: 'relative',
                    zIndex: 22,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.25,
                  }}
                  source={require('./assets/images/298b341b-a659-4f2d-9af8-3d6e38d4a9c5.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '87.5%',
                  height: '99.99%',
                  position: 'absolute',
                  top: 0,
                  left: '6.25%',
                  zIndex: 20,
                }}
                source={require('./assets/images/28668a5a-d7da-4995-8d5c-4fb04ef391a8.png')}
              />
            </View>
          </View>
          <ImageBackground
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            source={require('./assets/images/9f6c5206-0acd-4563-8af3-01e02dbff52c.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.63%',
              position: 'absolute',
              top: '91.38%',
              left: 0,
              zIndex: 11,
            }}
            source={require('./assets/images/60ea4a53-11a0-43ef-95b2-dee721fea215.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
