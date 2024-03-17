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

class DonationInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          scrollEnabled={true}
          contentInsetAdjustmentBehavior="automatic">
          <View
            style={{
              width: 400,
              height: 812,
              backgroundColor: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
              marginTop: 0,
              marginRight: 'auto',
              marginBottom: 0,
              marginLeft: 'auto',
            }}>
            <View
              style={{
                width: 389,
                height: 130.204,
                position: 'relative',
                zIndex: 10,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <ImageBackground
                style={{
                  width: '27.42%',
                  height: '80.97%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 7,
                }}
                source={require('./../../assets/images/c4341cb1-bea8-450c-a686-faf2d7f47014.png')}>
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 8,
                  }}
                  source={require('./../../assets/images/8f9fc54e-2004-476e-9648-636b1cd0a17a.png')}
                />
              </ImageBackground>
              <ImageBackground
                style={{
                  width: '19.78%',
                  height: '38.48%',
                  position: 'absolute',
                  top: '6.5%',
                  left: '80.35%',
                  zIndex: 5,
                }}
                source={require('./../../assets/images/a8e81009-0204-438a-b3e9-d033e94e9c3c.png')}>
                <Text
                  style={{
                    display: 'flex',
                    height: '38.83%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 13,
                    fontWeight: '400',
                    lineHeight: 19.458,
                    color: '#1c1c1e',
                    position: 'absolute',
                    top: '33.36%',
                    left: '17.71%',
                    textAlign: 'left',
                    zIndex: 6,
                  }}
                  numberOfLines={1}>
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
                numberOfLines={1}>
                Donate Food
              </Text>
              <ImageBackground
                style={{
                  width: '94.04%',
                  height: '43.68%',
                  position: 'absolute',
                  top: '56.7%',
                  left: '4.4%',
                  zIndex: 2,
                }}
                source={require('./../../assets/images/924c3a85-ac6b-45e9-9a3e-cfc04649f065.png')}>
                <Text
                  style={{
                    display: 'flex',
                    height: '38.93%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#1c1c1e',
                    position: 'absolute',
                    top: '33.32%',
                    left: '2.47%',
                    textAlign: 'left',
                    zIndex: 3,
                  }}
                  numberOfLines={1}>
                  Name
                </Text>
              </ImageBackground>
            </View>
            <ImageBackground
              style={{
                width: 365.8,
                height: 56.877,
                position: 'relative',
                zIndex: 11,
                marginTop: 36.39,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 17.5,
              }}
              source={require('./../../assets/images/c996cf7b-d5b5-4b2d-ae27-974c244328eb.png')}>
              <Text
                style={{
                  display: 'flex',
                  height: '38.93%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#1c1c1e',
                  position: 'absolute',
                  top: '30.59%',
                  left: '2.32%',
                  textAlign: 'left',
                  zIndex: 12,
                }}
                numberOfLines={1}>
                Address
              </Text>
            </ImageBackground>
            <ImageBackground
              style={{
                width: 365.8,
                height: 56.877,
                position: 'relative',
                zIndex: 13,
                marginTop: 27.608,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 16.5,
              }}
              source={require('./../../assets/images/f4116843-2310-4c17-9090-02bd4ea86191.png')}>
              <Text
                style={{
                  display: 'flex',
                  height: '39.61%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#1c1c1e',
                  position: 'absolute',
                  top: '32.24%',
                  left: '2.6%',
                  textAlign: 'left',
                  zIndex: 14,
                }}
                numberOfLines={1}>
                Donated food
              </Text>
            </ImageBackground>
            <View
              style={{
                width: 357,
                height: 151,
                position: 'relative',
                zIndex: 19,
                marginTop: 2.044,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 124,
              }}>
              <ImageBackground
                style={{
                  width: 151,
                  height: 151,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 19,
                }}
                source={require('./../../assets/images/7e48758a6e2f66c6bd90c098bf71b5232b274c0f.png')}
                resizeMode="cover"
              />
              <Text
                style={{
                  display: 'flex',
                  height: '14.92%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#1c1c1e',
                  position: 'absolute',
                  top: '79.43%',
                  left: '7.28%',
                  textAlign: 'left',
                  zIndex: 15,
                }}
                numberOfLines={1}>
                Upload Photo
              </Text>
            </View>
            <ImageBackground
              style={{
                width: 348.8,
                height: 48.694,
                position: 'relative',
                zIndex: 17,
                marginTop: 199.948,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 25,
              }}
              source={require('./../../assets/images/b4af0bf8-9c8c-42a4-85b4-6024dbeb9494.png')}>
              <Text
                style={{
                  display: 'flex',
                  height: '42.41%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 20.652,
                  color: '#ffffff',
                  position: 'absolute',
                  top: '28.92%',
                  left: '38.42%',
                  textAlign: 'left',
                  zIndex: 18,
                }}
                numberOfLines={1}>
                Continue
              </Text>
            </ImageBackground>
            <View
              style={{
                width: 334,
                height: 42.243,
                position: 'relative',
                zIndex: 30,
                marginTop: 43.404,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44.333,
              }}>
              <ImageBackground
                style={{
                  width: '13.47%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '41.92%',
                  zIndex: 25,
                }}
                source={require('./../../assets/images/38d6363b-2f41-4e9e-89c5-81d7d8219555.png')}>
                <View
                  style={{
                    width: 15,
                    height: 15.02,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 26,
                    marginTop: 13.142,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 15,
                  }}>
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 13.142,
                      position: 'relative',
                      zIndex: 27,
                      marginTop: 0.94,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/0157fc1b-0cb9-4e54-9ea3-d1edab16095d.png')}
                  />
                </View>
              </ImageBackground>
              <View
                style={{
                  width: '5.99%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '21.93%',
                  left: '94.01%',
                  overflow: 'hidden',
                  zIndex: 28,
                }}>
                <ImageBackground
                  style={{
                    width: 17.5,
                    height: 18.773,
                    position: 'relative',
                    zIndex: 29,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.25,
                  }}
                  source={require('./../../assets/images/a7ae95b4-5df0-4557-a5b6-9266f4ab5632.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '5.75%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 23,
                }}
                source={require('./../../assets/images/3dadd083-2240-49f1-899f-3b31859fc853.png')}
              />
              <View
                style={{
                  width: '5.99%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '20.96%',
                  overflow: 'hidden',
                  zIndex: 30,
                }}>
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 18.776,
                    position: 'relative',
                    zIndex: 31,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/3f513d99-ae83-462d-9dd5-c2ef967d4318.png')}
                />
              </View>
              <View
                style={{
                  width: '5.75%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '71.86%',
                  overflow: 'hidden',
                  zIndex: 21,
                }}>
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 16.913,
                    position: 'relative',
                    zIndex: 22,
                    marginTop: 2.114,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/f7a30df8-ac19-4ede-adf9-bd8f92e72f76.png')}
                />
              </View>
            </View>
            <ImageBackground
              style={{
                width: '100%',
                height: '93.87%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              source={require('./../../assets/images/bd315c5a-e855-473b-9c13-786932932f9c.png')}
            />
            <ImageBackground
              style={{
                width: '100%',
                height: '8.1%',
                position: 'absolute',
                top: '91.34%',
                left: 0,
                zIndex: 20,
              }}
              source={require('./../../assets/images/25ec4407-dc35-4e4c-bbe7-56d23ec34c74.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DonationInfo;
