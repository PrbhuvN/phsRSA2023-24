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
            height: 'auto',
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
              width: 234.667,
              height: 43.826,
              position: 'relative',
              zIndex: 57,
              marginTop: 21,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 83,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 36,
                color: '#030303',
                position: 'absolute',
                top: 0,
                left: 0,
                textAlign: 'center',
                zIndex: 3,
              }}
              numberOfLines={1}
            >
              Chat
            </Text>
            <Text
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 36,
                color: '#030303',
                position: 'absolute',
                top: 0,
                left: 0,
                textAlign: 'center',
                zIndex: 57,
              }}
              numberOfLines={1}
            >
              Chat
            </Text>
          </View>
          <View
            style={{
              width: 354,
              height: 55,
              position: 'relative',
              zIndex: 69,
              marginTop: 18.174,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 27,
            }}
          >
            <Text
              style={{
                display: 'flex',
                height: '80%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 36,
                color: '#030303',
                position: 'absolute',
                top: 0,
                left: '9.6%',
                textAlign: 'left',
                zIndex: 40,
              }}
              numberOfLines={1}
            >
              Jimmy M.
            </Text>
            <Text
              style={{
                display: 'flex',
                height: '80%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 36,
                color: '#030303',
                position: 'absolute',
                top: 0,
                left: '9.6%',
                textAlign: 'left',
                zIndex: 66,
              }}
              numberOfLines={1}
            >
              Jimmy M.
            </Text>
            <View
              style={{
                width: '5.42%',
                height: '40.95%',
                position: 'absolute',
                top: '10.91%',
                left: 0,
                overflow: 'hidden',
                zIndex: 32,
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
                  zIndex: 34,
                }}
              >
                <ImageBackground
                  style={{
                    width: 17.5,
                    height: 19.999,
                    position: 'relative',
                    zIndex: 35,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.25,
                  }}
                  source={require('./assets/images/6201cde0-b2e0-4109-8d99-b768a384e7e5.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '87.5%',
                  height: '99.99%',
                  position: 'absolute',
                  top: 0,
                  left: '6.25%',
                  zIndex: 33,
                }}
                source={require('./assets/images/57864a4a-2a5f-4908-85eb-5a232626873f.png')}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 60,
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
                    zIndex: 62,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 63,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./assets/images/df2e9918-4ab9-49de-92b5-5aa9105d2971.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 61,
                  }}
                  source={require('./assets/images/918d2f6c-598a-41ad-9750-c273c75d4ead.png')}
                />
              </View>
            </View>
            <Text
              style={{
                display: 'flex',
                width: 177,
                height: '80%',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#030303',
                position: 'absolute',
                top: '20%',
                left: '50%',
                textAlign: 'right',
                zIndex: 43,
              }}
            >
              Charlotte Food Bank
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 177,
                height: '80%',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#030303',
                position: 'absolute',
                top: '20%',
                left: '50%',
                textAlign: 'right',
                zIndex: 69,
              }}
            >
              Charlotte Food Bank
            </Text>
          </View>
          <View
            style={{
              width: 209,
              height: 53,
              position: 'relative',
              zIndex: 79,
              marginTop: 501,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 10,
            }}
          >
            <ImageBackground
              style={{
                width: '100%',
                height: '79.08%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 50,
              }}
              source={require('./assets/images/283c2b01-4dc6-411f-83f2-2e3fdd17165d.png')}
            >
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 76,
                }}
                source={require('./assets/images/2325e555-d65a-4a0c-b9d3-5328cd4f01e7.png')}
              />
            </ImageBackground>
            <Text
              style={{
                display: 'flex',
                width: 191,
                height: '83.02%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 27,
                color: '#030303',
                position: 'absolute',
                top: '16.98%',
                left: '5.74%',
                textAlign: 'left',
                zIndex: 53,
              }}
            >
              Charlotte Food Bank
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 191,
                height: '83.02%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 27,
                color: '#030303',
                position: 'absolute',
                top: '16.98%',
                left: '5.74%',
                textAlign: 'left',
                zIndex: 79,
              }}
            >
              Charlotte Food Bank
            </Text>
          </View>
          <View
            style={{
              width: 373,
              height: 49,
              position: 'relative',
              zIndex: 74,
              marginTop: 9,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 10,
            }}
          >
            <ImageBackground
              style={{
                width: '9.12%',
                height: '69.39%',
                position: 'absolute',
                top: 0,
                left: '90.88%',
                zIndex: 45,
              }}
              source={require('./assets/images/c522a3848a38a2933183827545f5d35e1bf4344f.png')}
              resizeMode='contain'
            >
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 71,
                }}
                source={require('./assets/images/c522a3848a38a2933183827545f5d35e1bf4344f.png')}
                resizeMode='contain'
              />
            </ImageBackground>
            <View
              style={{
                width: '87.13%',
                height: '69.39%',
                backgroundColor: '#eeeeee',
                borderTopLeftRadius: 36,
                borderTopRightRadius: 36,
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                position: 'absolute',
                top: '2.04%',
                left: 0,
                zIndex: 44,
              }}
            >
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#eeeeee',
                  borderTopLeftRadius: 36,
                  borderTopRightRadius: 36,
                  borderBottomRightRadius: 36,
                  borderBottomLeftRadius: 36,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 70,
                }}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                width: 177,
                height: '89.8%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#b5b3b3',
                position: 'absolute',
                top: '10.2%',
                left: '3.22%',
                textAlign: 'left',
                overflow: 'hidden',
                zIndex: 48,
              }}
            >
              Type Message Here...{'\n'}
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 177,
                height: '89.8%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#b5b3b3',
                position: 'absolute',
                top: '10.2%',
                left: '3.22%',
                textAlign: 'left',
                overflow: 'hidden',
                zIndex: 74,
              }}
            >
              Type Message Here...{'\n'}
            </Text>
          </View>
          <View
            style={{
              width: 333.2,
              height: 45,
              position: 'relative',
              zIndex: 88,
              marginTop: 4.064,
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
                zIndex: 9,
              }}
              source={require('./assets/images/f1adcdfc-3888-4e71-9e10-b92e8aba61b0.png')}
            >
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 25,
                }}
                source={require('./assets/images/c86aa73a-8cde-4b1a-919a-627350eb93c1.png')}
              >
                <ImageBackground
                  style={{
                    width: 45,
                    height: 45,
                    position: 'relative',
                    zIndex: 85,
                    marginTop: -1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/dee31819-198e-4c13-8fcb-8e8c5f5b4f62.png')}
                >
                  <View
                    style={{
                      width: 15,
                      height: 16,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 10,
                      marginTop: 15,
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
                        zIndex: 11,
                        marginTop: 1,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0.94,
                      }}
                      source={require('./assets/images/297db7b7-f0c3-4e3e-9ede-38818b6bb17f.png')}
                    />
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        overflow: 'hidden',
                        zIndex: 26,
                      }}
                    >
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: '-6.25%',
                          left: 0,
                          overflow: 'hidden',
                          zIndex: 86,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 13.125,
                            height: 14,
                            position: 'relative',
                            zIndex: 87,
                            marginTop: 1,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0.94,
                          }}
                          source={require('./assets/images/f7af1171-dfd7-4320-b5aa-695e58c549fd.png')}
                        />
                      </View>
                      <ImageBackground
                        style={{
                          width: '87.5%',
                          height: '87.5%',
                          position: 'absolute',
                          top: '6.25%',
                          left: '6.25%',
                          zIndex: 27,
                        }}
                        source={require('./assets/images/1b25112b-16d6-4276-ba28-56795c9169cc.png')}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </ImageBackground>
            <ImageBackground
              style={{
                width: '5.76%',
                height: '50.05%',
                position: 'absolute',
                top: '26.67%',
                left: 0,
                overflow: 'hidden',
                zIndex: 7,
              }}
              source={require('./assets/images/e8a4134a-a551-451e-99ac-d6b4915169fe.png')}
            >
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 23,
                }}
                source={require('./assets/images/168e227f-2134-413f-abef-f447b87f6168.png')}
              >
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 22.521,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 83,
                    marginTop: -1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/fce4d00f-93ed-41da-a9c3-9137e2546787.png')}
                />
              </ImageBackground>
            </ImageBackground>
            <View
              style={{
                width: '6%',
                height: '44.44%',
                position: 'absolute',
                top: '26.67%',
                left: '21.01%',
                overflow: 'hidden',
                zIndex: 16,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.999,
                  height: 20.002,
                  position: 'relative',
                  zIndex: 17,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./assets/images/a717d213-6e84-4871-9770-2c1dafcd7ee4.png')}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 36,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '-5%',
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 92,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 19.999,
                      height: 20.002,
                      position: 'relative',
                      zIndex: 93,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./assets/images/318f9271-e51d-49d5-bd78-4a8b65d808cb.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '99.99%',
                    height: '100.01%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 37,
                  }}
                  source={require('./assets/images/47ca3ccf-aa0b-4ee4-bce2-63016d5b8c65.png')}
                />
              </View>
            </View>
            <View
              style={{
                width: '5.76%',
                height: '50.05%',
                position: 'absolute',
                top: '26.67%',
                left: '72.03%',
                overflow: 'hidden',
                zIndex: 5,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.2,
                  height: 18.017,
                  position: 'relative',
                  zIndex: 6,
                  marginTop: 2.252,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./assets/images/dd7cf14f-0d38-479e-8f4c-90ce015cd29b.png')}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 20,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '-4.44%',
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 81,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 19.2,
                      height: 18.017,
                      position: 'relative',
                      zIndex: 82,
                      marginTop: 2.252,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./assets/images/be59f49b-6613-4692-9e95-42599df8f5ef.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '80%',
                    position: 'absolute',
                    top: '10%',
                    left: '0%',
                    zIndex: 21,
                  }}
                  source={require('./assets/images/7ebcb388-01a7-47a7-ab69-97f39620b659.png')}
                />
              </View>
            </View>
            <View
              style={{
                width: '5.76%',
                height: '50.05%',
                position: 'absolute',
                top: '26.67%',
                left: '94.24%',
                overflow: 'hidden',
                zIndex: 12,
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
                  zIndex: 14,
                }}
              >
                <ImageBackground
                  style={{
                    width: 17.5,
                    height: 19.999,
                    position: 'relative',
                    zIndex: 15,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.25,
                  }}
                  source={require('./assets/images/aeee79df-f599-4974-bee2-3f1b8b0f45b6.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '87.5%',
                  height: '99.99%',
                  position: 'absolute',
                  top: 0,
                  left: '6.25%',
                  zIndex: 13,
                }}
                source={require('./assets/images/2a2db3bd-de88-46b7-b93c-7affe6cf0386.png')}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 28,
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
                    zIndex: 30,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 31,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./assets/images/7340a803-5902-4310-8503-42fe30c817fb.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 29,
                  }}
                  source={require('./assets/images/bf93f28e-8097-4eb0-ad99-09d015966be5.png')}
                />
              </View>
            </View>
            <View
              style={{
                width: '5.76%',
                height: '50.05%',
                position: 'absolute',
                top: '31.11%',
                left: '93.94%',
                overflow: 'hidden',
                zIndex: 88,
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
                  zIndex: 90,
                }}
              >
                <ImageBackground
                  style={{
                    width: 17.5,
                    height: 19.999,
                    position: 'relative',
                    zIndex: 91,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.25,
                  }}
                  source={require('./assets/images/4ab35234-158d-4d39-9185-2603aa50b294.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '87.5%',
                  height: '99.99%',
                  position: 'absolute',
                  top: 0,
                  left: '6.25%',
                  zIndex: 89,
                }}
                source={require('./assets/images/e42df1a6-8690-4ca9-a4ab-ba70512abef9.png')}
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
            source={require('./assets/images/ca06071c-8ef4-4046-b05d-a37c5f18f135.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 54,
            }}
            source={require('./assets/images/30c870b8-c3ec-417d-8467-fad202cfccd1.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.63%',
              position: 'absolute',
              top: '8%',
              left: 0,
              zIndex: 19,
            }}
            source={require('./assets/images/58da201c-24bf-4b8f-b97a-7c804d547f1d.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.63%',
              position: 'absolute',
              top: '8%',
              left: 0,
              zIndex: 58,
            }}
            source={require('./assets/images/16068390-93bc-4054-91fc-f8890a9eea01.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '6.29%',
              position: 'absolute',
              top: '85.22%',
              left: 0,
              zIndex: 22,
            }}
            source={require('./assets/images/0785957f-9354-4cf7-8d84-9a0b2cf97d77.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '6.29%',
              position: 'absolute',
              top: '85.22%',
              left: 0,
              zIndex: 59,
            }}
            source={require('./assets/images/d4d068d5-1ac8-41c7-b0b8-bcf020dfde84.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.63%',
              position: 'absolute',
              top: '91.26%',
              left: 0,
              zIndex: 80,
            }}
            source={require('./assets/images/b96bae52-f3f1-4e70-a2e3-e61b2d2f878c.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.63%',
              position: 'absolute',
              top: '91.38%',
              left: 0,
              zIndex: 4,
            }}
            source={require('./assets/images/7c73e835-73bc-4941-ac07-5a36e62356ba.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.63%',
              position: 'absolute',
              top: '91.38%',
              left: 0,
              zIndex: 18,
            }}
            source={require('./assets/images/1ab74342-4ed8-4c95-afb5-3c8d120e86fe.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
