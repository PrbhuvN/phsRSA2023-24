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
            height: 812,
            position: 'relative',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 400,
              height: 812,
              backgroundColor: '#ceffcd',
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
            }}
          >
            <ImageBackground
              style={{
                width: 80,
                height: 5,
                position: 'relative',
                zIndex: 83,
                marginTop: 139.5,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 246.5,
              }}
              source={require('./assets/images/02def5f8-b1ae-4d9a-994c-9dab091645a0.png')}
            />
            <ImageBackground
              style={{
                width: 339,
                height: 6,
                position: 'relative',
                zIndex: 84,
                marginTop: 14.5,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 22,
              }}
              source={require('./assets/images/c34788ca-bb8a-4534-8595-d33cd15fdfe3.png')}
            />
            <View
              style={{
                width: 335,
                height: 265,
                position: 'relative',
                zIndex: 80,
                marginTop: 9,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 24,
              }}
            >
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 28,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 29,
                  }}
                  source={require('./assets/images/3e554db1-f5b8-47ab-891e-f422b51c12cb.png')}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 60,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 61,
                  }}
                  source={require('./assets/images/41b577ec-aa97-4b3e-9ab9-aa3a6354e339.png')}
                />
              </View>
              <View
                style={{
                  width: '9.55%',
                  height: '12.08%',
                  position: 'absolute',
                  top: '6.04%',
                  left: '4.78%',
                  zIndex: 36,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 37,
                  }}
                  source={require('./assets/images/dfbb1751-07ec-4def-8724-691b80dc39b7.png')}
                />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 38,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 39,
                    }}
                    source={require('./assets/images/9af52f96-fdef-4606-b6a8-713bca869075.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  width: '9.55%',
                  height: '12.08%',
                  position: 'absolute',
                  top: '6.04%',
                  left: '4.78%',
                  zIndex: 68,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 69,
                  }}
                  source={require('./assets/images/8288f9e7-3be4-4372-b28c-8cee473554a7.png')}
                />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 70,
                  }}
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
                    source={require('./assets/images/6386ad64-1491-4db3-b5b0-c16ff24dc4eb.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  width: '26.87%',
                  height: '6.79%',
                  position: 'absolute',
                  top: '9.25%',
                  left: '16.72%',
                  zIndex: 30,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 31,
                  }}
                  numberOfLines={1}
                >
                  Charlotte Food&nbsp;
                </Text>
              </View>
              <View
                style={{
                  width: '26.87%',
                  height: '6.79%',
                  position: 'absolute',
                  top: '9.25%',
                  left: '16.72%',
                  zIndex: 62,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 63,
                  }}
                  numberOfLines={1}
                >
                  Charlotte Food&nbsp;
                </Text>
              </View>
              <View
                style={{
                  width: '4.18%',
                  height: '5.28%',
                  position: 'absolute',
                  top: '9.43%',
                  left: '91.04%',
                  overflow: 'hidden',
                  zIndex: 34,
                }}
              >
                <ImageBackground
                  style={{
                    width: 11.813,
                    height: 3.063,
                    position: 'relative',
                    zIndex: 35,
                    marginTop: 5.469,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.094,
                  }}
                  source={require('./assets/images/4b554822-4d03-4e0f-9981-e7bf70da4527.png')}
                />
              </View>
              <View
                style={{
                  width: '4.18%',
                  height: '5.28%',
                  position: 'absolute',
                  top: '9.43%',
                  left: '91.04%',
                  overflow: 'hidden',
                  zIndex: 66,
                }}
              >
                <ImageBackground
                  style={{
                    width: 11.813,
                    height: 3.063,
                    position: 'relative',
                    zIndex: 67,
                    marginTop: 5.469,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.094,
                  }}
                  source={require('./assets/images/68901526-c745-4c4e-aa48-2386e84ba871.png')}
                />
              </View>
              <View
                style={{
                  width: '90.45%',
                  height: '47.55%',
                  position: 'absolute',
                  top: '23.02%',
                  left: '4.78%',
                  zIndex: 32,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 33,
                  }}
                  source={require('./assets/images/e0a2c2d4-3b8e-4091-bda4-c2351eed0095.png')}
                />
              </View>
              <View
                style={{
                  width: '90.45%',
                  height: '47.55%',
                  position: 'absolute',
                  top: '23.02%',
                  left: '4.78%',
                  zIndex: 64,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 65,
                  }}
                  source={require('./assets/images/7fba6112-c9d1-49ec-899b-6dc047484765.png')}
                />
              </View>
              <View
                style={{
                  width: '41.49%',
                  height: '6.79%',
                  position: 'absolute',
                  top: '72.83%',
                  left: '4.78%',
                  zIndex: 40,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 41,
                  }}
                  numberOfLines={1}
                >
                  Lots of Cans for Pick Up
                </Text>
              </View>
              <View
                style={{
                  width: '41.49%',
                  height: '6.79%',
                  position: 'absolute',
                  top: '72.83%',
                  left: '4.78%',
                  zIndex: 72,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 73,
                  }}
                  numberOfLines={1}
                >
                  Lots of Cans for Pick Up
                </Text>
              </View>
              <ImageBackground
                style={{
                  width: '19.4%',
                  height: '14.34%',
                  position: 'absolute',
                  top: '80.75%',
                  left: '75.82%',
                  zIndex: 50,
                }}
                source={require('./assets/images/5afa0759a1a140b788029c6f2a6eff999ef6e112.png')}
                resizeMode='cover'
              />
              <View
                style={{
                  width: '7.16%',
                  height: '9.06%',
                  position: 'absolute',
                  top: '82.26%',
                  left: '85.37%',
                  overflow: 'hidden',
                  zIndex: 47,
                }}
              />
              <View
                style={{
                  width: '7.16%',
                  height: '9.06%',
                  position: 'absolute',
                  top: '82.26%',
                  left: '85.37%',
                  overflow: 'hidden',
                  zIndex: 79,
                }}
              />
              <View
                style={{
                  width: '31.04%',
                  height: '6.79%',
                  position: 'absolute',
                  top: '83.77%',
                  left: '11.94%',
                  zIndex: 42,
                }}
              >
                <View
                  style={{
                    width: 77,
                    height: 36,
                    fontSize: 0,
                    position: 'relative',
                    zIndex: 43,
                    marginTop: 1.5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                >
                  <Text
                    style={{
                      height: 18,
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 44,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Chat With Us
                  </Text>
                  <Text
                    style={{
                      height: 18,
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 45,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    community
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '31.04%',
                  height: '6.79%',
                  position: 'absolute',
                  top: '83.77%',
                  left: '11.94%',
                  zIndex: 74,
                }}
              >
                <View
                  style={{
                    width: 77,
                    height: 36,
                    fontSize: 0,
                    position: 'relative',
                    zIndex: 75,
                    marginTop: 1.5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                >
                  <Text
                    style={{
                      height: 18,
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 76,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Chat With Us
                  </Text>
                  <Text
                    style={{
                      height: 18,
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 77,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    community
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '4.78%',
                  height: '6.04%',
                  position: 'absolute',
                  top: '84.15%',
                  left: '4.78%',
                  overflow: 'hidden',
                  zIndex: 48,
                }}
              >
                <ImageBackground
                  style={{
                    width: 16,
                    height: 12.8,
                    position: 'relative',
                    zIndex: 49,
                    marginTop: 1.6,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/1bd90b70-6a73-43ea-8502-0df97fedb344.png')}
                />
              </View>
              <View
                style={{
                  width: '4.78%',
                  height: '6.04%',
                  position: 'absolute',
                  top: '84.15%',
                  left: '4.78%',
                  overflow: 'hidden',
                  zIndex: 80,
                }}
              >
                <ImageBackground
                  style={{
                    width: 16,
                    height: 12.8,
                    position: 'relative',
                    zIndex: 81,
                    marginTop: 1.6,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/86b349a5-69b1-4ea0-8b73-4db6dca7268c.png')}
                />
              </View>
              <Text
                style={{
                  display: 'flex',
                  height: '6.79%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 18,
                  color: '#030303',
                  position: 'absolute',
                  top: '84.34%',
                  left: '11.94%',
                  textAlign: 'left',
                  zIndex: 46,
                }}
                numberOfLines={1}
              >
                Chat With Us
              </Text>
              <Text
                style={{
                  display: 'flex',
                  height: '6.79%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 18,
                  color: '#030303',
                  position: 'absolute',
                  top: '84.34%',
                  left: '11.94%',
                  textAlign: 'left',
                  zIndex: 78,
                }}
                numberOfLines={1}
              >
                Chat With Us
              </Text>
            </View>
            <View
              style={{
                width: 332.2,
                height: 45,
                position: 'relative',
                zIndex: 13,
                marginTop: 312.064,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46.333,
              }}
            >
              <View
                style={{
                  width: '13.55%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '42.14%',
                  zIndex: 5,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 6,
                  }}
                  source={require('./assets/images/8024142e-80d7-4dd2-9768-03a4871b0890.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '5.78%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 4,
                }}
                source={require('./assets/images/94cca7b8-35a5-453b-a7f4-b618466b4d40.png')}
              />
              <View
                style={{
                  width: '6.02%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '21.07%',
                  overflow: 'hidden',
                  zIndex: 13,
                }}
              >
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 20.002,
                    position: 'relative',
                    zIndex: 14,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/9bbf7f1d-f471-48c5-a77e-8bfef8bea0aa.png')}
                />
              </View>
              <View
                style={{
                  width: '5.78%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '72.25%',
                  overflow: 'hidden',
                  zIndex: 2,
                }}
              >
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 18.017,
                    position: 'relative',
                    zIndex: 3,
                    marginTop: 2.252,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/8f787c45-8a2f-4b7b-847f-1b2d86c522b2.png')}
                />
              </View>
              <View
                style={{
                  width: '4.52%',
                  height: '35.56%',
                  position: 'absolute',
                  top: '31.11%',
                  left: '46.66%',
                  overflow: 'hidden',
                  zIndex: 7,
                }}
              >
                <ImageBackground
                  style={{
                    width: 13.125,
                    height: 14,
                    position: 'relative',
                    zIndex: 8,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0.94,
                  }}
                  source={require('./assets/images/42f67dfc-e589-4e40-a431-02e2eea29076.png')}
                />
              </View>
              <View
                style={{
                  width: '5.78%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '33.33%',
                  left: '94.22%',
                  overflow: 'hidden',
                  zIndex: 9,
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
                    zIndex: 11,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 12,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./assets/images/e57c3c20-757e-42e2-aa01-704ddd7fdff2.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 10,
                  }}
                  source={require('./assets/images/268e2567-7eda-4a4e-8b82-71c7061bd129.png')}
                />
              </View>
            </View>
            <View
              style={{
                width: '80.75%',
                height: '16.87%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 82,
              }}
            >
              <ImageBackground
                style={{
                  width: '30.96%',
                  height: '72.99%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 54,
                }}
                source={require('./assets/images/66678fcf-4603-4fca-8c3f-d11313c6fb1b.png')}
              />
              <ImageBackground
                style={{
                  width: '30.96%',
                  height: '72.99%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 55,
                }}
                source={require('./assets/images/054fdb66-676b-4a28-9a8b-898cd7c62872.png')}
              />
              <ImageBackground
                style={{
                  width: '30.96%',
                  height: '72.99%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 56,
                }}
                source={require('./assets/images/c572d7f8-7ff5-4ba5-99f4-d7f74e4ed76b.png')}
              />
              <ImageBackground
                style={{
                  width: '30.96%',
                  height: '72.99%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 57,
                }}
                source={require('./assets/images/c8a03b6f-23b3-4433-865c-88646de998e9.png')}
              />
              <ImageBackground
                style={{
                  width: '30.96%',
                  height: '72.99%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 58,
                }}
                source={require('./assets/images/31774349-e2a7-45e4-96c6-0365e095a085.png')}
              />
              <ImageBackground
                style={{
                  width: '30.96%',
                  height: '72.99%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 59,
                }}
                source={require('./assets/images/2d025b7f-638e-49da-8a28-b234b8236616.png')}
              />
              <ImageBackground
                style={{
                  width: '14.55%',
                  height: '35.04%',
                  position: 'absolute',
                  top: '64.96%',
                  left: '55.42%',
                  zIndex: 51,
                }}
                source={require('./assets/images/c03242cb-722b-4d6a-ba9a-b28cdd1554a5.png')}
              />
              <ImageBackground
                style={{
                  width: '14.55%',
                  height: '35.04%',
                  position: 'absolute',
                  top: '64.96%',
                  left: '55.42%',
                  zIndex: 82,
                }}
                source={require('./assets/images/ae5c48d3-3f40-49c2-9200-144e7cc19832.png')}
              />
              <View
                style={{
                  width: '78.95%',
                  height: '15.33%',
                  position: 'absolute',
                  top: '84.67%',
                  left: '21.05%',
                  zIndex: 15,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 16,
                  }}
                  numberOfLines={1}
                >
                  Upcoming
                </Text>
                <View
                  style={{
                    width: '26.67%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '73.33%',
                    zIndex: 17,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 14,
                      fontWeight: '400',
                      lineHeight: 21,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      textAlign: 'left',
                      zIndex: 18,
                    }}
                    numberOfLines={1}
                  >
                    Accepted
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '22.6%',
                  height: '15.33%',
                  position: 'absolute',
                  top: '84.67%',
                  left: '21.05%',
                  zIndex: 52,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 53,
                  }}
                  numberOfLines={1}
                >
                  Upcoming
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '72.5%',
                height: '12.32%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 24,
              }}
            >
              <ImageBackground
                style={{
                  width: '34.48%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 19,
                }}
                source={require('./assets/images/4ec4e22a-71be-48ec-ab6c-3b29881422da.png')}
              />
              <ImageBackground
                style={{
                  width: '34.48%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 20,
                }}
                source={require('./assets/images/b32a7550-f448-4d67-b09b-33425fd4071d.png')}
              />
              <ImageBackground
                style={{
                  width: '34.48%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 21,
                }}
                source={require('./assets/images/e2cf7b55-9799-42ed-8b40-ac7adcc12589.png')}
              />
              <ImageBackground
                style={{
                  width: '34.48%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 22,
                }}
                source={require('./assets/images/34fb810e-9d20-4ca3-a90d-f43b4c9270d0.png')}
              />
              <ImageBackground
                style={{
                  width: '34.48%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 23,
                }}
                source={require('./assets/images/a6abd992-b630-48cb-8d90-61857f748be8.png')}
              />
              <View
                style={{
                  width: '68.97%',
                  height: '32%',
                  position: 'absolute',
                  top: '32%',
                  left: '31.03%',
                  zIndex: 24,
                }}
              >
                <View
                  style={{
                    width: 167,
                    height: 68,
                    fontSize: 0,
                    position: 'relative',
                    zIndex: 25,
                    marginTop: 0.5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 19,
                  }}
                >
                  <Text
                    style={{
                      height: 36,
                      fontFamily: 'Poppins',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 36,
                      color: '#030303',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 26,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Food Delivery
                  </Text>
                  <Text
                    style={{
                      height: 36,
                      fontFamily: 'Poppins',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 36,
                      color: '#030303',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 27,
                      marginTop: -4,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 53,
                    }}
                    numberOfLines={1}
                  >
                    Hub
                  </Text>
                </View>
              </View>
            </View>
            <ImageBackground
              style={{
                width: '100%',
                height: '8.63%',
                position: 'absolute',
                top: '91.38%',
                left: 0,
                zIndex: 1,
              }}
              source={require('./assets/images/78c7231b-415a-45f6-9274-3338032ed6bd.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
