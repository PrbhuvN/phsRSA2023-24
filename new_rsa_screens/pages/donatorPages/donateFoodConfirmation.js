import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class DonationConfirmation extends React.Component {
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
                width: 295,
                height: 123,
                position: 'relative',
                zIndex: 5,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <ImageBackground
                style={{
                  width: '36.16%',
                  height: '81.1%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 5,
                }}
                source={require('./../../assets/images/c6efb942-a72d-4be6-b8d0-9f663a30d382.png')}>
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 6,
                  }}
                  source={require('./../../assets/images/d016943a-52ae-4c8f-be54-5d439d8e0514.png')}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 10,
                    }}
                    source={require('./../../assets/images/9b8bb31b-adb5-4e61-b7c7-c7c9ce5e7b55.png')}>
                    <View
                      style={{
                        width: 29.867,
                        height: 27.931,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1,
                        marginTop: 31.921,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 19.2,
                      }}>
                      <ImageBackground
                        style={{
                          width: 12.057,
                          height: 17.462,
                          position: 'relative',
                          zIndex: 2,
                          marginTop: 5.234,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 8.905,
                        }}
                        source={require('./../../assets/images/6fde898f-abb7-4608-90d8-dfe95ac6170c.png')}
                      />
                    </View>
                  </ImageBackground>
                </ImageBackground>
              </ImageBackground>
              <Text
                style={{
                  display: 'flex',
                  height: '42.82%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 40,
                  fontWeight: '700',
                  lineHeight: 52.673,
                  color: '#030303',
                  position: 'absolute',
                  top: '57.18%',
                  left: '8.68%',
                  textAlign: 'left',
                  zIndex: 4,
                }}
                numberOfLines={1}>
                Confirm Post
              </Text>
            </View>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 13,
                marginTop: 43,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 28,
              }}
              numberOfLines={1}>
              Name:
            </Text>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 14,
                marginTop: 16,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 28,
              }}
              numberOfLines={1}>
              Address:
            </Text>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 11,
                marginTop: 17,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 26,
              }}
              numberOfLines={1}>
              Donated Food:
            </Text>
            <Text
              style={{
                height: 23.585,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 23.585,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 12,
                marginTop: 17,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 26,
              }}
              numberOfLines={1}>
              Expiry:&nbsp;
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 333,
                height: 95,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 32,
                fontWeight: '400',
                lineHeight: 48,
                color: '#fe0a28',
                position: 'relative',
                textAlign: 'left',
                zIndex: 15,
                marginTop: 83.415,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 27,
              }}>
              Is this information accurate?
            </Text>
            <ImageBackground
              style={{
                width: 348.8,
                height: 51.872,
                position: 'relative',
                zIndex: 8,
                marginTop: 169,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 34,
              }}
              source={require('./../../assets/images/1c039529-a058-45c4-a539-4e3ae24fe369.png')}>
              <Text
                style={{
                  display: 'flex',
                  height: '46.15%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 23.941,
                  color: '#ffffff',
                  position: 'absolute',
                  top: '29.81%',
                  left: '39.91%',
                  textAlign: 'left',
                  zIndex: 9,
                }}
                numberOfLines={1}>
                Confirm
              </Text>
            </ImageBackground>
            <View
              style={{
                width: 334,
                height: 45,
                position: 'relative',
                zIndex: 26,
                marginTop: 43.192,
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
                  zIndex: 21,
                }}
                source={require('./../../assets/images/f1a99716-eef1-47ba-9a9c-28173c27d0d2.png')}>
                <View
                  style={{
                    width: 15,
                    height: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 22,
                    marginTop: 14,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 15,
                  }}>
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 14,
                      position: 'relative',
                      zIndex: 23,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/2b4f429e-87c4-4a94-a349-b39427405071.png')}
                  />
                </View>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: '5.75%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 19,
                }}
                source={require('./../../assets/images/8afc2eb6-d06f-44c8-a614-f8bd35bec416.png')}
              />
              <View
                style={{
                  width: '5.99%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '20.96%',
                  overflow: 'hidden',
                  zIndex: 26,
                }}>
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 20.002,
                    position: 'relative',
                    zIndex: 27,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/7bbfc101-9305-4d7d-aab4-11db2e04b1c6.png')}
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
                  zIndex: 17,
                }}>
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 18.017,
                    position: 'relative',
                    zIndex: 18,
                    marginTop: 2.252,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/2819e9c5-09a0-43db-b8d1-098f0e6f9bb4.png')}
                />
              </View>
              <View
                style={{
                  width: '5.99%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '94.01%',
                  overflow: 'hidden',
                  zIndex: 24,
                }}>
                <ImageBackground
                  style={{
                    width: 17.5,
                    height: 19.999,
                    position: 'relative',
                    zIndex: 25,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.25,
                  }}
                  source={require('./../../assets/images/ca4c9d0a-c952-4c54-893d-58560d2ad227.png')}
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
              source={require('./../../assets/images/9b960ff2-64d8-4ecd-ae57-3e19996e3780.png')}
            />
            <ImageBackground
              style={{
                width: '100%',
                height: '8.63%',
                position: 'absolute',
                top: '91.38%',
                left: 0,
                zIndex: 16,
              }}
              source={require('./../../assets/images/810c9cae-d6e2-49d8-a7c5-49c9c919ebf7.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DonationConfirmation;
