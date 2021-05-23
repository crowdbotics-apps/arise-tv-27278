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
        style={styles.ImageBackground_597_20}
      />
      <View style={styles.View_597_21}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_597_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_597_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_597_30}
        />
      </View>
      <View style={styles.View_597_37}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
          }}
          style={styles.ImageBackground_597_38}
        />
      </View>
      <View style={styles.View_597_40}>
        <Text style={styles.Text_597_40}>Discover</Text>
      </View>
      <View style={styles.View_597_41}>
        <Text style={styles.Text_597_41}>Trending</Text>
      </View>
      <View style={styles.View_597_43}>
        <Text style={styles.Text_597_43}>Events</Text>
      </View>
      <View style={styles.View_597_44}>
        <Text style={styles.Text_597_44}>Business</Text>
      </View>
      <View style={styles.View_597_45}>
        <Text style={styles.Text_597_45}>Places</Text>
      </View>
      <View style={styles.View_597_46}>
        <View style={styles.View_597_47}>
          <View style={styles.View_597_50}>
            <Text style={styles.Text_597_50}>Buhari</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_53}>
        <View style={styles.View_597_54}>
          <View style={styles.View_597_57}>
            <Text style={styles.Text_597_57}>Donald Trump</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_60}>
        <View style={styles.View_597_61}>
          <View style={styles.View_597_66}>
            <Text style={styles.Text_597_66}>Megan Markle</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_67}>
        <View style={styles.View_597_68}>
          <View style={styles.View_597_73}>
            <Text style={styles.Text_597_73}>P.M. Netanyahu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_74}>
        <View style={styles.View_597_75}>
          <View style={styles.View_597_80}>
            <Text style={styles.Text_597_80}>Chadwick Boseman</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_81}>
        <View style={styles.View_597_82}>
          <View style={styles.View_597_87}>
            <Text style={styles.Text_597_87}>Putin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_88}>
        <View style={styles.View_597_89}>
          <View style={styles.View_597_94}>
            <Text style={styles.Text_597_94}>Davido</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_95}>
        <View style={styles.View_597_96}>
          <View style={styles.View_597_101}>
            <Text style={styles.Text_597_101}>Bishop Kukah</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_102}>
        <View style={styles.View_597_103}>
          <View style={styles.View_597_108}>
            <Text style={styles.Text_597_108}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_109}>
        <View style={styles.View_597_110}>
          <View style={styles.View_597_115}>
            <Text style={styles.Text_597_115}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_116}>
        <View style={styles.View_597_117}>
          <View style={styles.View_597_122}>
            <Text style={styles.Text_597_122}>Guardiola</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_123}>
        <View style={styles.View_597_124}>
          <View style={styles.View_597_129}>
            <Text style={styles.Text_597_129}>Dbanj</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_130}>
        <View style={styles.View_597_131}>
          <View style={styles.View_597_136}>
            <Text style={styles.Text_597_136}>Soludo</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_137}>
        <View style={styles.View_597_138}>
          <View style={styles.View_597_143}>
            <Text style={styles.Text_597_143}>Tinubu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_144}>
        <View style={styles.View_597_145}>
          <View style={styles.View_597_150}>
            <Text style={styles.Text_597_150}>Umahi</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_151}>
        <View style={styles.View_597_152}>
          <View style={styles.View_597_157}>
            <Text style={styles.Text_597_157}>Elon Musk</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_597_198}>
        <View style={styles.View_597_199}>
          <View style={styles.View_597_200}>
            <View style={styles.View_597_203}>
              <Text style={styles.Text_597_203}>People</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_597_206}>
        <View style={styles.View_597_207}>
          <View style={styles.View_597_208}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df8e/65ba/0a860c22bc6351d4555aca624e0d95d1"
              }}
              style={styles.ImageBackground_597_209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d5/b4d8/5e408515a673c83256b9975c6f9b51a8"
              }}
              style={styles.ImageBackground_597_210}
            />
          </View>
          <View style={styles.View_597_212}>
            <View style={styles.View_597_213}>
              <View style={styles.View_597_214}>
                <Text style={styles.Text_597_214}>More</Text>
              </View>
              <View style={styles.View_597_215} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/313e/6db1/e7a33bada3d34c30f40758b1c634d1df"
                }}
                style={styles.ImageBackground_597_216}
              />
            </View>
            <View style={styles.View_597_218}>
              <View style={styles.View_597_219}>
                <View style={styles.View_597_220}>
                  <Text style={styles.Text_597_220}>Discover</Text>
                </View>
                <View style={styles.View_597_221} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4579/2702/86ccfb19a46211d6e5169004ea08ac70"
                  }}
                  style={styles.ImageBackground_597_222}
                />
              </View>
            </View>
            <View style={styles.View_597_225}>
              <View style={styles.View_597_226}>
                <Text style={styles.Text_597_226}>Live TV</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f680/efde/a23605101ed8ca95fd4d2701b4540253"
                }}
                style={styles.ImageBackground_597_227}
              />
            </View>
            <View style={styles.View_597_231}>
              <View style={styles.View_597_232}>
                <Text style={styles.Text_597_232}>News</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6286/1fe4/ebf1012254db1c10062744585139b3fb"
                }}
                style={styles.ImageBackground_597_233}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_597_238}>
          <View style={styles.View_597_239} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_597_20: {
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
  View_597_21: {
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
  ImageBackground_597_22: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583329%"),
    top: hp("1.2750344198258194%")
  },
  ImageBackground_597_26: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("1.274667541837432%")
  },
  ImageBackground_597_30: {
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
  View_597_37: {
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
  ImageBackground_597_38: {
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
  View_597_40: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.5136612021857925%")
  },
  Text_597_40: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_597_41: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("21.584699453551913%")
  },
  Text_597_41: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_597_43: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("26.229508196721312%")
  },
  Text_597_43: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_597_44: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("26.229508196721312%")
  },
  Text_597_44: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_597_45: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("26.229508196721312%")
  },
  Text_597_45: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_597_46: {
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
  View_597_47: {
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
  View_597_50: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_50: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_53: {
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
  View_597_54: {
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
  View_597_57: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_57: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_60: {
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
  View_597_61: {
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
  View_597_66: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_66: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_67: {
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
  View_597_68: {
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
  View_597_73: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_73: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_74: {
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
  View_597_75: {
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
  View_597_80: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_80: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_81: {
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
  View_597_82: {
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
  View_597_87: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_87: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_88: {
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
  View_597_89: {
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
  View_597_94: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_94: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_95: {
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
  View_597_96: {
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
  View_597_101: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_101: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_102: {
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
  View_597_103: {
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
  View_597_108: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_108: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_109: {
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
  View_597_110: {
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
  View_597_115: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_115: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_116: {
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
  View_597_117: {
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
  View_597_122: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_122: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_123: {
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
  View_597_124: {
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
  View_597_129: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_129: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_130: {
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
  View_597_131: {
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
  View_597_136: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_136: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_137: {
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
  View_597_138: {
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
  View_597_143: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_143: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_144: {
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
  View_597_145: {
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
  View_597_150: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_150: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_151: {
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
  View_597_152: {
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
  View_597_157: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_157: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_198: {
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
  View_597_199: {
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
  View_597_200: {
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
  View_597_203: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_597_203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_597_206: {
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
  View_597_207: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_597_208: {
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
  ImageBackground_597_209: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_597_210: {
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
  View_597_212: {
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
  View_597_213: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_597_214: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_597_214: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_597_215: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_597_216: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.466666666666669%")
  },
  View_597_218: {
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
  View_597_219: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_597_220: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_597_220: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_597_221: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_597_222: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333337%")
  },
  View_597_225: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_597_226: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_597_226: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_597_227: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.600000000000001%")
  },
  View_597_231: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_597_232: {
    width: wp("25%"),
    top: hp("5.738238558743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_597_232: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_597_233: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  },
  View_597_238: {
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
  View_597_239: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(116, 116, 128, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
