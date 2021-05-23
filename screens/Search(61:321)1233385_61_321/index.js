import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5709/164c/2a572434ea1d6d2b61cde168bae71544"
        }}
        style={styles.ImageBackground_452_0}
      />
      <View style={styles.View_61_339}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_61_340}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_61_344}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_61_348}
        />
      </View>
      <View style={styles.View_61_355}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
          }}
          style={styles.ImageBackground_61_356}
        />
      </View>
      <View style={styles.View_368_2}>
        <Text style={styles.Text_368_2}>Discover</Text>
      </View>
      <View style={styles.View_382_2}>
        <Text style={styles.Text_382_2}>Trending</Text>
      </View>
      <View style={styles.View_394_1}>
        <Text style={styles.Text_394_1}>Category</Text>
      </View>
      <View style={styles.View_372_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cda/3db0/d01d6b33d4f975c4b389cb9685c2a281"
          }}
          style={styles.ImageBackground_372_14}
        />
        <View style={styles.View_372_24}>
          <View style={styles.View_372_25}>
            <Text style={styles.Text_372_25}>Search Arise...</Text>
          </View>
          <View style={styles.View_373_2}>
            <Text style={styles.Text_373_2}>Cancel</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed2f/959e/fd680490e7e84b14dcb219b2d54b6c1e"
          }}
          style={styles.ImageBackground_372_17}
        />
      </View>
      <View style={styles.View_385_0}>
        <View style={styles.View_385_1}>
          <View style={styles.View_385_4}>
            <Text style={styles.Text_385_4}>Buhari</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_2}>
        <View style={styles.View_386_3}>
          <View style={styles.View_386_6}>
            <Text style={styles.Text_386_6}>Donald Trump</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_10}>
        <View style={styles.View_386_11}>
          <View style={styles.View_386_14}>
            <Text style={styles.Text_386_14}>Megan Markle</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_34}>
        <View style={styles.View_386_35}>
          <View style={styles.View_386_40}>
            <Text style={styles.Text_386_40}>P.M. Netanyahu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_41}>
        <View style={styles.View_386_42}>
          <View style={styles.View_386_47}>
            <Text style={styles.Text_386_47}>Chadwick Boseman</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_48}>
        <View style={styles.View_386_49}>
          <View style={styles.View_386_54}>
            <Text style={styles.Text_386_54}>Putin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_55}>
        <View style={styles.View_386_56}>
          <View style={styles.View_386_61}>
            <Text style={styles.Text_386_61}>Davido</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_62}>
        <View style={styles.View_386_63}>
          <View style={styles.View_386_68}>
            <Text style={styles.Text_386_68}>Bishop Kukah</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_69}>
        <View style={styles.View_386_70}>
          <View style={styles.View_386_75}>
            <Text style={styles.Text_386_75}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_76}>
        <View style={styles.View_386_77}>
          <View style={styles.View_386_82}>
            <Text style={styles.Text_386_82}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_27}>
        <View style={styles.View_386_28}>
          <View style={styles.View_386_33}>
            <Text style={styles.Text_386_33}>Guardiola</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_83}>
        <View style={styles.View_386_84}>
          <View style={styles.View_386_89}>
            <Text style={styles.Text_386_89}>Dbanj</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_90}>
        <View style={styles.View_386_91}>
          <View style={styles.View_386_96}>
            <Text style={styles.Text_386_96}>Soludo</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_97}>
        <View style={styles.View_386_98}>
          <View style={styles.View_386_103}>
            <Text style={styles.Text_386_103}>Tinubu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_386_111}>
        <View style={styles.View_386_112}>
          <View style={styles.View_386_117}>
            <Text style={styles.Text_386_117}>Umahi</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_405_0}>
        <View style={styles.View_405_1}>
          <View style={styles.View_405_6}>
            <Text style={styles.Text_405_6}>Elon Musk</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_406_47}>
        <View style={styles.View_406_12}>
          <View style={styles.View_366_5}>
            <Text style={styles.Text_366_5}>Breaking News</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_3}
          />
        </View>
        <View style={styles.View_366_15} />
        <View style={styles.View_406_38}>
          <View style={styles.View_366_6}>
            <Text style={styles.Text_366_6}>Global</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_8}
          />
        </View>
        <View style={styles.View_366_16} />
        <View style={styles.View_406_39}>
          <View style={styles.View_366_7}>
            <Text style={styles.Text_366_7}>Regional</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_14}
          />
        </View>
        <View style={styles.View_366_17} />
        <View style={styles.View_406_40}>
          <View style={styles.View_406_6}>
            <Text style={styles.Text_406_6}>Politics</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_17}
          />
        </View>
        <View style={styles.View_366_18} />
        <View style={styles.View_406_41}>
          <View style={styles.View_366_8}>
            <Text style={styles.Text_366_8}>Business</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_20}
          />
        </View>
        <View style={styles.View_366_19} />
        <View style={styles.View_406_42}>
          <View style={styles.View_366_9}>
            <Text style={styles.Text_366_9}>Entertainment</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_23}
          />
        </View>
        <View style={styles.View_366_20} />
        <View style={styles.View_406_43}>
          <View style={styles.View_366_10}>
            <Text style={styles.Text_366_10}>Sports</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_26}
          />
        </View>
        <View style={styles.View_366_21} />
        <View style={styles.View_406_44}>
          <View style={styles.View_366_11}>
            <Text style={styles.Text_366_11}>Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_29}
          />
        </View>
        <View style={styles.View_366_22} />
        <View style={styles.View_406_45}>
          <View style={styles.View_366_12}>
            <Text style={styles.Text_366_12}>Technology</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_32}
          />
        </View>
        <View style={styles.View_406_7} />
        <View style={styles.View_406_46}>
          <View style={styles.View_366_13}>
            <Text style={styles.Text_366_13}>Covid-19</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_406_35}
          />
        </View>
      </View>
      <View style={styles.View_590_218}>
        <Text style={styles.Text_590_218}>Events</Text>
      </View>
      <View style={styles.View_590_219}>
        <Text style={styles.Text_590_219}>Businesses</Text>
      </View>
      <View style={styles.View_590_220}>
        <Text style={styles.Text_590_220}>Places</Text>
      </View>
      <View style={styles.View_590_221}>
        <View style={styles.View_590_222}>
          <View style={styles.View_590_223}>
            <View style={styles.View_590_226}>
              <Text style={styles.Text_590_226}>People</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_591_605}>
        <View style={styles.View_591_606}>
          <View style={styles.View_591_607}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/953f/c34e/975e290f1d9a5ba0c82b6ab29dc7a547"
              }}
              style={styles.ImageBackground_591_608}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d5/b4d8/5e408515a673c83256b9975c6f9b51a8"
              }}
              style={styles.ImageBackground_591_609}
            />
          </View>
          <View style={styles.View_591_611}>
            <View style={styles.View_591_612}>
              <View style={styles.View_591_613}>
                <Text style={styles.Text_591_613}>More</Text>
              </View>
              <View style={styles.View_591_614} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/716f/1b23/1f694a153c81bbf43c0dc1601ab77e9b"
                }}
                style={styles.ImageBackground_591_615}
              />
              <View style={styles.View_591_617}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5a0/09e7/1f71b1aafce884d6273a78d2e6bf3345"
                  }}
                  style={styles.ImageBackground_591_618}
                />
                <View style={styles.View_591_619}>
                  <Text style={styles.Text_591_619}>2</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_591_620}>
              <View style={styles.View_591_621}>
                <View style={styles.View_591_622}>
                  <Text style={styles.Text_591_622}>Discover</Text>
                </View>
                <View style={styles.View_591_623} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4579/2702/86ccfb19a46211d6e5169004ea08ac70"
                  }}
                  style={styles.ImageBackground_591_624}
                />
              </View>
            </View>
            <View style={styles.View_591_627}>
              <View style={styles.View_591_628}>
                <Text style={styles.Text_591_628}>Live TV</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461c/4285/18df0a6e81958c4d818e454f9924ec26"
                }}
                style={styles.ImageBackground_591_629}
              />
            </View>
            <View style={styles.View_591_633}>
              <View style={styles.View_591_634}>
                <Text style={styles.Text_591_634}>News</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a0/39c6/88fbddf7f584b8ef7f98ea055d9a2398"
                }}
                style={styles.ImageBackground_591_635}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_591_640}>
          <View style={styles.View_591_641} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_452_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_61_339: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.57776692708333%"),
    top: hp("1.366120218579235%")
  },
  ImageBackground_61_340: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288891601562511%"),
    top: hp("1.2750344198258194%")
  },
  ImageBackground_61_344: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%"),
    top: hp("1.274667541837432%")
  },
  ImageBackground_61_348: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303278%")
  },
  View_61_355: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("1.9125516297387295%")
  },
  ImageBackground_61_356: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_368_2: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.5136612021857925%")
  },
  Text_368_2: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_382_2: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("21.584699453551913%")
  },
  Text_382_2: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_394_1: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("50.81967213114754%")
  },
  Text_394_1: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_372_13: {
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    top: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_372_14: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_372_24: {
    flexGrow: 1,
    width: wp("77.86666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_372_25: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.0928961748633856%")
  },
  Text_372_25: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_373_2: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1.0928961748633856%")
  },
  Text_373_2: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_372_17: {
    width: wp("3.733298492431641%"),
    height: hp("1.9124751533966897%"),
    top: hp("1.5027530857774085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  View_385_0: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_385_1: {
    width: wp("10.4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_385_4: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_385_4: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_2: {
    flexGrow: 1,
    width: wp("27.73333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_3: {
    width: wp("22.400000000000002%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_6: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_6: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_10: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_11: {
    width: wp("22.666666666666664%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_14: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_14: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_34: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_35: {
    width: wp("24.53333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_40: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_40: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_41: {
    flexGrow: 1,
    width: wp("36.8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_42: {
    width: wp("31.466666666666665%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_47: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_47: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_48: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_49: {
    width: wp("8.266666666666666%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_54: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_54: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_55: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_56: {
    width: wp("11.466666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_61: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_61: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_62: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_63: {
    width: wp("21.333333333333336%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_68: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_68: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_69: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.73333333333333%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_70: {
    width: wp("16%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_75: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_75: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_76: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_77: {
    width: wp("16%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_82: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_82: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_27: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_28: {
    width: wp("16%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_33: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_33: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_83: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.666666666666667%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_84: {
    width: wp("9.6%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_89: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_89: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_90: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_91: {
    width: wp("11.200000000000001%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_96: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_96: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_97: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_98: {
    width: wp("10.933333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_103: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_103: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_386_111: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_386_112: {
    width: wp("10.133333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_386_117: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_117: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_405_0: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_405_1: {
    width: wp("15.733333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_405_6: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_405_6: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_406_47: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("63.52459016393443%"),
    minHeight: hp("63.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("55.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_406_12: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_366_5: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_366_5: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_3: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_15: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_38: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%")
  },
  View_366_6: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_366_6: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_8: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_16: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923494%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_39: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.387978142076506%")
  },
  View_366_7: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_366_7: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_14: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_17: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.306010928961754%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_40: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.08196721311475%")
  },
  View_406_6: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_406_6: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_17: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_18: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_41: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.77595628415301%")
  },
  View_366_8: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_366_8: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_20: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_19: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.69398907103826%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_42: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.46994535519126%")
  },
  View_366_9: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_366_9: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_23: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_20: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.387978142076506%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_43: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.16393442622952%")
  },
  View_366_10: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_366_10: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_26: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_21: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.081967213114766%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_44: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.85792349726775%")
  },
  View_366_11: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557379915%")
  },
  Text_366_11: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_29: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_366_22: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.77595628415301%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_45: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830602%")
  },
  View_366_12: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_366_12: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_32: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_406_7: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.46994535519127%"),
    backgroundColor: "rgba(116, 116, 128, 1)",
    opacity: 0.30000001192092896
  },
  View_406_46: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.245901639344254%")
  },
  View_366_13: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_366_13: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_406_35: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("0%")
  },
  View_590_218: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("26.229508196721312%")
  },
  Text_590_218: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_590_219: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("26.229508196721312%")
  },
  Text_590_219: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_590_220: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.00000000000001%"),
    top: hp("26.229508196721312%")
  },
  Text_590_220: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_590_221: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_590_222: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)"
  },
  View_590_223: {
    width: wp("10.933333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_590_226: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_590_226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_591_605: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.31693989071039%")
  },
  View_591_606: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_607: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_591_608: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_591_609: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_591_611: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.033542945736745%"),
    minHeight: hp("8.033542945736745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_591_612: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_613: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_613: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_591_614: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_591_615: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.466666666666669%")
  },
  View_591_617: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_591_618: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_591_619: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("0.4098360655737565%")
  },
  Text_591_619: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_591_620: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8.033542945736745%"),
    minHeight: hp("8.033542945736745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_591_621: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_622: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_622: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_591_623: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_591_624: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333337%")
  },
  View_591_627: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_628: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_628: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_591_629: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.600000000000001%")
  },
  View_591_633: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_634: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_634: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_591_635: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  },
  View_591_640: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_641: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
