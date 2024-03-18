import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ViewRequests extends React.Component {

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
            height: 865,
            fontSize: 0,
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <Text
            style={{
              display: 'flex',
              width: 234.667,
              height: 43.826,
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Poppins',
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 36,
              color: '#030303',
              position: 'relative',
              textAlign: 'center',
              zIndex: 19,
              marginTop: 18,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 82,
            }}
            numberOfLines={1}
          >
            My Requests
          </Text>
          <View
            style={{
              width: 244,
              height: 42,
              position: 'relative',
              zIndex: 24,
              marginTop: 5.174,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 68,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 44,
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
                left: '5.74%',
                textAlign: 'left',
                zIndex: 23,
              }}
            >
              Active{'\n'}
            </Text>
            <Text
              style={{
                display: 'flex',
                height: '50%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 21,
                color: '#030303',
                position: 'absolute',
                top: 0,
                left: '80.33%',
                textAlign: 'left',
                zIndex: 24,
              }}
              numberOfLines={1}
            >
              History
            </Text>
            <ImageBackground
              style={{
                width: '32.79%',
                height: '11.9%',
                position: 'absolute',
                top: '46.43%',
                left: '-1.02%',
                zIndex: 22,
              }}
              source={require('./../../assets/images/d4c9a12d-c607-4ba1-8a4d-adce8609d513.png')}
            />
          </View>
          <ImageBackground
            style={{
              width: 362,
              height: 172,
              position: 'relative',
              zIndex: 26,
              marginTop: -2,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
            source={require('./../../assets/images/26bab728-d059-4e22-9356-df66939358ef.png')}
          >
            <ImageBackground
              style={{
                width: '8.84%',
                height: '18.6%',
                position: 'absolute',
                top: '4.07%',
                left: '61.6%',
                zIndex: 41,
              }}
              source={require('./../../assets/images/f0714610-f338-4032-a3bd-5536cdb8c827.png')}
            >
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '-3.13%',
                  left: '-3.13%',
                  zIndex: 43,
                }}
                source={require('./../../assets/images/df38ce8b-f54f-41cb-9b5d-8d51c8f49ba9.png')}
              />
            </ImageBackground>
            <ImageBackground
              style={{
                width: '3.26%',
                height: '1.78%',
                position: 'absolute',
                top: '6.4%',
                left: '94.2%',
                zIndex: 31,
              }}
              source={require('./../../assets/images/b71a67ca-917a-40d6-b9af-f0dbedc711e8.png')}
            />
            <Text
              style={{
                display: 'flex',
                height: '19.19%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 30,
                color: '#030303',
                position: 'absolute',
                top: '6.98%',
                left: '3.04%',
                textAlign: 'left',
                zIndex: 29,
              }}
              numberOfLines={1}
            >
              Fresh Fruit Needed!
            </Text>
            <Text
              style={{
                display: 'flex',
                height: '10.47%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 18,
                color: '#030303',
                position: 'absolute',
                top: '8.72%',
                left: '71.27%',
                textAlign: 'left',
                zIndex: 45,
              }}
              numberOfLines={1}
            >
              Charlotte Food&nbsp;
            </Text>
            <ImageBackground
              style={{
                width: '32.04%',
                height: '54.65%',
                position: 'absolute',
                top: '25.58%',
                left: '65.47%',
                zIndex: 32,
              }}
              source={require('./../../assets/images/3f0eb259e014cdc93250787756b2504869bb4195.png')}
              resizeMode='cover'
            />
            <Text
              style={{
                display: 'flex',
                width: 252,
                height: '73.84%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#030303',
                position: 'absolute',
                top: '26.16%',
                left: '3.04%',
                textAlign: 'left',
                overflow: 'hidden',
                zIndex: 30,
              }}
            >
              Apples{'\n'}Oranges{'\n'}Bananas{'\n'}
              {'\n'}Food Bank in Charlotte
            </Text>
          </ImageBackground>
          <View
            style={{
              width: 362,
              height: 172,
              position: 'relative',
              zIndex: 38,
              marginTop: 13,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <ImageBackground
              style={{
                width: '100%',
                height: '90.12%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 34,
              }}
              source={require('./../../assets/images/9651d167-af40-45de-b180-05abcdb20235.png')}
            >
              <ImageBackground
                style={{
                  width: 11.813,
                  height: 3.063,
                  position: 'relative',
                  zIndex: 39,
                  marginTop: 11,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 341,
                }}
                source={require('./../../assets/images/aebe1ad1-696c-4544-b03f-eabc9cf69516.png')}
              />
              <View
                style={{
                  width: 327,
                  height: 54,
                  position: 'relative',
                  zIndex: 51,
                  marginTop: -2.062,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 11,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: '61.11%',
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
                    zIndex: 37,
                  }}
                  numberOfLines={1}
                >
                  Vegetables &{'\n'}NonPerishables
                </Text>
                <ImageBackground
                  style={{
                    width: '9.79%',
                    height: '59.26%',
                    position: 'absolute',
                    top: '20.37%',
                    left: '60.55%',
                    zIndex: 51,
                  }}
                  source={require('./../../assets/images/12e07fb9-4295-4c10-b520-4c54f60f394a.png')}
                />
                <Text
                  style={{
                    display: 'flex',
                    width: 69,
                    height: '66.67%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#030303',
                    position: 'absolute',
                    top: '33.33%',
                    left: '74.01%',
                    textAlign: 'left',
                    zIndex: 49,
                  }}
                >
                  Food For All{'\n'}
                </Text>
              </View>
              <ImageBackground
                style={{
                  width: 136,
                  height: 78,
                  position: 'relative',
                  zIndex: 47,
                  marginTop: -3,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 206,
                }}
                source={require('./../../assets/images/c9afaa28-9287-4008-b05f-223daa20a7d1.png')}
              />
            </ImageBackground>
            <Text
              style={{
                display: 'flex',
                width: 252,
                height: '73.84%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: '#030303',
                position: 'absolute',
                top: '26.16%',
                left: '3.04%',
                textAlign: 'left',
                zIndex: 38,
              }}
            >
              {'\n'}Canned Goods{'\n'}Fresh Vegetables{'\n'}Food Bank in
              Charlotte
            </Text>
          </View>
          <ImageBackground
            style={{
              width: 400,
              height: 1.251,
              position: 'relative',
              zIndex: 16,
              marginTop: 274,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
            source={require('./../../assets/images/0cab2479-3a5b-4077-8a26-1f7dc73d3baa.png')}
          />
          <View
            style={{
              width: 333.2,
              height: 45,
              position: 'relative',
              zIndex: 13,
              marginTop: 14.814,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 45.333,
            }}
          >
            <ImageBackground
              style={{
                width: '13.51%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: '42.02%',
                zIndex: 6,
              }}
              source={require('./../../assets/images/d78168f4-024d-4e8c-a3c5-cfc8696c7262.png')}
            >
              <View
                style={{
                  width: 15,
                  height: 16,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 7,
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
                    zIndex: 8,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0.94,
                  }}
                  source={require('./../../assets/images/7b024f2c-7850-482e-9bd9-7e99c2bf34ff.png')}
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
                zIndex: 4,
              }}
              source={require('./../../assets/images/26218ae5-08e1-46e4-85a9-cfc14b481697.png')}
            />
            <View
              style={{
                width: '6%',
                height: '44.44%',
                position: 'absolute',
                top: '26.67%',
                left: '21.01%',
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
                source={require('./../../assets/images/762f93e4-ce75-4f6c-aa24-6d9d1bf60db8.png')}
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
                source={require('./../../assets/images/d8a2fe13-ebbd-4b6a-a639-43812cc099d8.png')}
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
                  source={require('./../../assets/images/68133044-29ae-429c-81f5-101bd3b5a1be.png')}
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
                source={require('./../../assets/images/d83e4e2c-6e94-4289-b1c6-b1a46e4f5d76.png')}
              />
            </View>
          </View>
          <ImageBackground
            style={{
              width: '100%',
              height: '93.87%',
              position: 'absolute',
              top: '-0.35%',
              left: 0,
            }}
            source={require('./../../assets/images/0ca0017f-2cf1-4237-91fe-41ab406805b1.png')}
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '8.1%',
              position: 'absolute',
              top: '85.78%',
              left: 0,
              zIndex: 1,
            }}
            source={require('./../../assets/images/b607fa62-7d1a-45b4-9ade-90ab1d214776.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}

export default ViewRequests