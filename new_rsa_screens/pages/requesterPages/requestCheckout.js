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

class RequestCheckout extends  React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 400,
            height: 829,
            position: 'relative',
                marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <ImageBackground
            style={{
              width: 34.067,
              height: 21.625,
              position: 'relative',
              zIndex: 2,
              marginTop: 10.478,    marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.1,
            }}
            source={require('./../../assets/images/54b7d633-f305-42ac-a60c-38bb91053280.png')}
          >
            <View
              style={{
                width: 14.933,
                height: 9.315,
                position: 'relative',
                overflow: 'hidden',
                    marginTop: 6.155,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 9.567,
              }}
            >
              <ImageBackground
                style={{
                  width: 6.028,
                  height: 5.823,
                  position: 'relative',
                  zIndex: 4,
                  marginTop: 1.746,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4.453,
                }}
                source={require('./../../assets/images/c10f6d90-526b-4a61-a1bc-45e2df18fefe.png')}
              />
            </View>
          </ImageBackground>
          <ImageBackground
            style={{
              width: 150,
              height: 150,
              position: 'relative',
              zIndex: 56,
              marginTop: 19.897,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 125,
            }}
            source={require('./../../assets/images/119f3371-abee-44c6-9eac-7e7af6b436b3.png')}
          />
          <Text
            style={{
              height: 23.952,
              fontFamily: 'Poppins',
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 23.952,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 6,
              marginTop: -4.7,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            numberOfLines={1}
          >
            Request Summary
          </Text>
          <Text
            style={{
              height: 15.968,
              fontFamily: 'Poppins',
              fontSize: 15,
              fontWeight: '400',
              lineHeight: 15.968,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 8,
              marginTop: 8.77,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17,
            }}
            numberOfLines={1}
          >
            Food Bank Name
          </Text>
          <ImageBackground
            style={{
              width: 365.867,
              height: 1.331,
              position: 'relative',
              zIndex: 54,
              marginTop: 8.188,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            source={require('./../../assets/images/3e58baad-80be-4302-b09f-9dff53c2319f.png')}
          />
          <Text
            style={{
              height: 18,
              fontFamily: 'Poppins',
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 18,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 10,
              marginTop: 10.5,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17,
            }}
            numberOfLines={1}
          >
            Pickup Location and Time
          </Text>
          <ImageBackground
            style={{
              width: 365.867,
              height: 1.331,
              position: 'relative',
              zIndex: 12,
              marginTop: 10.075,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            source={require('./../../assets/images/b3a325a6-e830-4a79-8c98-19f96582c79b.png')}
          />
          <Text
            style={{
              height: 13.972,
              fontFamily: 'Poppins',
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 13.972,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 16,
              marginTop: 10.6,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 55.467,
            }}
            numberOfLines={1}
          >
            Delivery to Food Bank
          </Text>
          <View
            style={{
              width: 376.933,
              height: 28,
              position: 'relative',
                  marginTop: -9.023,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 6,
            }}
          >
            <View
              style={{
                width: '11.94%',
                height: '100%',
                    top: 0,
                left: 0,
                overflow: 'hidden',
                zIndex: 13,
              }}
            >
              <ImageBackground
                style={{
                  width: 45,
                  height: 3.964,
                  position: 'relative',
                  zIndex: 14,
                  marginTop: 12.018,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./../../assets/images/a39ec8ed-92a0-4ee2-a61d-eefbee4d92c9.png')}
              />
            </View>
            <View
              style={{
                width: '4.53%',
                height: '38.02%',
                    top: '13.22%',
                left: '95.47%',
                overflow: 'hidden',
                zIndex: 19,
              }}
            >
              <ImageBackground
                style={{
                  width: 8.834,
                  height: 9.079,
                  position: 'relative',
                  zIndex: 20,
                  marginTop: 0.78,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4.116,
                }}
                source={require('./../../assets/images/1fea2506-5df0-47b0-acd1-3cf414fe68ab.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: '49.9%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 13.972,
                color: '#1c1c1e',
                position: 'absolute',
                top: '34.6%',    left: '13.12%',
                textAlign: 'left',
                zIndex: 18,
              }}
              numberOfLines={1}
            >
              Food bank address
            </Text>
          </View>
          <ImageBackground
            style={{
              width: 365.867,
              height: 1.331,
              position: 'relative',
              zIndex: 22,
              marginTop: 5.641,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            source={require('./../../assets/images/4322f51f-d216-4e18-af0a-190272995439.png')}
          />
          <Text
            style={{
              height: 13.972,
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 13.972,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 24,
              marginTop: 5.02,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17,
            }}
            numberOfLines={1}
          >
            Address
          </Text>
          <View
            style={{
              width: 17.067,
              height: 10.645,
              position: 'relative',
              overflow: 'hidden',
                  marginTop: 0.29,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 365.867,
            }}
          >
            <ImageBackground
              style={{
                width: 8.834,
                height: 9.079,
                position: 'relative',
                zIndex: 28,
                marginTop: 0.78,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 4.116,
              }}
              source={require('./../../assets/images/e12ed963-2a5f-417d-a1bf-4da21abe7514.png')}
            />
          </View>
          <Text
            style={{
              height: 13.972,
              fontFamily: 'Poppins',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 13.972,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 26,
              marginTop: -4.6,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            numberOfLines={1}
          >
            Leave the donation at the designated spot.
          </Text>
          <ImageBackground
            style={{
              width: 365.867,
              height: 1.331,
              position: 'relative',
              zIndex: 30,
              marginTop: 9.98,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            source={require('./../../assets/images/5f97fd31-e2d3-4196-bec0-5577567f60ee.png')}
          />
          <Text
            style={{
              height: 17.964,
              fontFamily: 'Poppins',
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 17.964,
              color: '#1c1c1e',
              position: 'relative',
              textAlign: 'left',
              zIndex: 32,
              marginTop: 10.9,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            numberOfLines={1}
          >
            Requested items
          </Text>
          <ImageBackground
            style={{
              width: 365.867,
              height: 1.331,
              position: 'relative',
              zIndex: 34,
              marginTop: 9.647,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17.067,
            }}
            source={require('./../../assets/images/460c5407-a853-493d-ae42-efcbce46e7f7.png')}
          />
          <View
            style={{
              width: 366.933,
              height: 99.681,
              position: 'relative',
                  marginTop: -0.46,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 16,
            }}
          >
            <ImageBackground
              style={{
                width: '0.58%',
                height: '75.42%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 50,
              }}
              source={require('./../../assets/images/399b0fc4-f4a7-4d53-b987-0c30a37c30bf.png')}
            />
            <ImageBackground
              style={{
                width: '39.53%',
                height: '74.76%',
                position: 'absolute',
                top: '9.8%',
                left: '60.47%',
                zIndex: 38,
              }}
              source={require('./../../assets/images/b6057719-91a3-42d5-a86a-eece6b0b88a4.png')}
            />
            <Text
              style={{
                display: 'flex',
                height: '14.02%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 13.972,
                color: '#1c1c1e',
                position: 'absolute',
                top: '11.14%',    left: '4.94%',
                textAlign: 'left',
                zIndex: 48,
              }}
              numberOfLines={1}
            >
              1x
            </Text>
            <Text
              style={{
                display: 'flex',
                height: '14.02%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 13.972,
                color: '#1c1c1e',
                position: 'absolute',
                top: '11.14%',    left: '11.34%',
                textAlign: 'left',
                zIndex: 36,
              }}
              numberOfLines={1}
            >
              Food Donation Box
            </Text>
            <Text
              style={{
                display: 'flex',
                height: '12.01%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 11.976,
                color: '#1c1c1e',
                position: 'absolute',
                top: '30.83%',    left: '4.94%',
                textAlign: 'left',
                zIndex: 40,
              }}
              numberOfLines={1}
            >
              Canned soup, pasta,
            </Text>
            <Text
              style={{
                display: 'flex',
                height: '12.01%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 11.976,
                color: '#1c1c1e',
                position: 'absolute',
                top: '42.84%',    left: '4.94%',
                textAlign: 'left',
                zIndex: 41,
              }}
              numberOfLines={1}
            >
              and canned vegetables.
            </Text>
            <ImageBackground
              style={{
                width: '32.06%',
                height: '26.77%',
                position: 'absolute',    top: '73.23%',
                left: '10.36%',
                zIndex: 43,
              }}
              source={require('./../../assets/images/74324e84-9d0f-4e0c-b7aa-5e6c7b7fbfb0.png')}
            >
              <Text
                style={{
                  display: 'flex',
                  width: '71.21%',
                  height: '75%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 18,
                  color: '#ffffff',
                  position: 'absolute',
                  top: '18.75%',
                  left: '15.15%',    textAlign: 'center',
                  overflow: 'hidden',
                  zIndex: 44,
                }}
                numberOfLines={1}
              >
                Confirm{'\n'}
              </Text>
            </ImageBackground>
          </View>
          <ImageBackground
            style={{
              width: 365.867,
              height: 1.331,
              position: 'relative',
              zIndex: 46,
              marginTop: 15.319,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
            source={require('./../../assets/images/e5de1f7d-1933-47ce-8b4a-172176079d30.png')}
          />
          <ImageBackground
            style={{
              width: 365.867,
              height: 1.331,
              position: 'relative',
              zIndex: 52,
              marginTop: 185.669,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17,
            }}
            source={require('./../../assets/images/f4f8b47e-dc52-4ed2-9ef7-a8f14a7d69a9.png')}
          />
          <View
            style={{
              width: 332.2,
              height: 45,
              position: 'relative',
                  marginTop: 33.734,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 45.333,
            }}
          >
            <ImageBackground
              style={{
                width: '13.55%',
                height: '100%',
                position: 'absolute',    top: 0,
                left: '42.14%',
                zIndex: 62,
              }}
              source={require('./../../assets/images/d787dc23-d519-409f-ba3f-4f17314e52e5.png')}
            >
              <View
                style={{
                  width: 15,
                  height: 16,
                  position: 'relative',
                  overflow: 'hidden',
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
                    zIndex: 64,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0.94,
                  }}
                  source={require('./../../assets/images/688315bc-278c-4c8d-a743-f1f7407b054d.png')}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              style={{
                width: '5.78%',
                height: '50.05%',
                position: 'absolute',
                top: '26.67%',
                left: 0,
                overflow: 'hidden',
                zIndex: 60,
              }}
              source={require('./../../assets/images/72a23089-6a81-4b42-adfc-876ed1422e03.png')}
            />
            <View
              style={{
                width: '6.02%',
                height: '44.44%',
                    top: '26.67%',
                left: '21.07%',
                overflow: 'hidden',
                zIndex: 69,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.999,
                  height: 20.002,
                  position: 'relative',
                  zIndex: 70,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./../../assets/images/ec95c3a2-2fbf-4154-8432-052559c38f54.png')}
              />
            </View>
            <View
              style={{
                width: '5.78%',
                height: '50.05%',
                    top: '26.67%',
                left: '72.25%',
                overflow: 'hidden',
                zIndex: 58,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.2,
                  height: 18.017,
                  position: 'relative',
                  zIndex: 59,
                  marginTop: 2.252,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./../../assets/images/666cd499-19d5-4980-941b-8b1070ae34e1.png')}
              />
            </View>
            <View
              style={{
                width: '5.78%',
                height: '50.05%',
                    top: '33.33%',
                left: '94.22%',
                overflow: 'hidden',
                zIndex: 65,
              }}
            >
              <View
                style={{
                  width: '104.17%',
                  height: '88.81%',
                      top: '-0.29%',
                  left: '-1.74%',
                  overflow: 'hidden',
                  zIndex: 67,
                }}
              >
                <ImageBackground
                  style={{
                    width: 17.5,
                    height: 19.999,
                    position: 'relative',
                    zIndex: 68,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.25,
                  }}
                  source={require('./../../assets/images/aa3b1ba0-631a-4892-a786-d569156f696d.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '87.5%',
                  height: '99.99%',
                  position: 'absolute',
                  top: 0,
                  left: '6.25%',
                  zIndex: 66,
                }}
                source={require('./../../assets/images/e2e1392e-5fc0-4536-90d3-aa5dbe68421c.png')}
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
            source={require('./../../assets/images/fb7637ae-4071-4a7b-8fba-aa31582d702e.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.45%',
              position: 'absolute',
              top: '91.8%',
              left: 0,
              zIndex: 57,
            }}
            source={require('./../../assets/images/92f75936-893d-4c0e-bab7-bbe655d68b32.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}

export default RequestCheckout