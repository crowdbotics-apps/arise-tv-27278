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
        style={styles.ImageBackground_452_1}
      />
      <View style={styles.View_408_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_408_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_408_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_408_12}
        />
      </View>
      <View style={styles.View_408_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
          }}
          style={styles.ImageBackground_408_20}
        />
      </View>
      <View style={styles.View_408_22}>
        <Text style={styles.Text_408_22}>Discover</Text>
      </View>
      <View style={styles.View_408_23}>
        <Text style={styles.Text_408_23}>Trending</Text>
      </View>
      <View style={styles.View_408_24}>
        <Text style={styles.Text_408_24}>Category</Text>
      </View>
      <View style={styles.View_408_28}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cda/3db0/d01d6b33d4f975c4b389cb9685c2a281"
          }}
          style={styles.ImageBackground_408_29}
        />
        <View style={styles.View_408_30}>
          <View style={styles.View_408_31}>
            <Text style={styles.Text_408_31}>Search Arise...</Text>
          </View>
          <View style={styles.View_408_32}>
            <Text style={styles.Text_408_32}>Cancel</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed2f/959e/fd680490e7e84b14dcb219b2d54b6c1e"
          }}
          style={styles.ImageBackground_408_33}
        />
      </View>
      <View style={styles.View_408_36}>
        <View style={styles.View_408_37}>
          <View style={styles.View_408_40}>
            <Text style={styles.Text_408_40}>#EndSars</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_413_40}>
        <View style={styles.View_413_41}>
          <View style={styles.View_413_44}>
            <Text style={styles.Text_413_44}>#OccupyLekkiTollgate</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_413_68}>
        <View style={styles.View_413_69}>
          <View style={styles.View_413_74}>
            <Text style={styles.Text_413_74}>#TheHeadies</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_413_61}>
        <View style={styles.View_413_62}>
          <View style={styles.View_413_67}>
            <Text style={styles.Text_413_67}>#Covid-19Pandemic</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_408_78}>
        <View style={styles.View_408_79}>
          <View style={styles.View_408_84}>
            <Text style={styles.Text_408_84}>#NigerCoup</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_414_16}>
        <View style={styles.View_414_17}>
          <View style={styles.View_414_22}>
            <Text style={styles.Text_414_22}>#Lockdowns</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_413_75}>
        <View style={styles.View_413_76}>
          <View style={styles.View_413_81}>
            <Text style={styles.Text_413_81}>#OwerriJailbreak</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_413_82}>
        <View style={styles.View_413_83}>
          <View style={styles.View_413_88}>
            <Text style={styles.Text_413_88}>#ChadFIFABan</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_408_113}>
        <View style={styles.View_408_114}>
          <View style={styles.View_408_119}>
            <Text style={styles.Text_408_119}>#TheGrammys2021</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_414_0}>
        <View style={styles.View_414_1}>
          <View style={styles.View_414_6}>
            <Text style={styles.Text_414_6}>#TokyoOlimpics</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_414_7}>
        <View style={styles.View_414_8}>
          <View style={styles.View_414_13}>
            <Text style={styles.Text_414_13}>#MyanmarCoup</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_408_148}>
        <View style={styles.View_408_149}>
          <View style={styles.View_408_150}>
            <Text style={styles.Text_408_150}>Breaking News</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_151}
          />
        </View>
        <View style={styles.View_408_152} />
        <View style={styles.View_408_153}>
          <View style={styles.View_408_154}>
            <Text style={styles.Text_408_154}>Global</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_155}
          />
        </View>
        <View style={styles.View_408_156} />
        <View style={styles.View_408_157}>
          <View style={styles.View_408_158}>
            <Text style={styles.Text_408_158}>Regional</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_159}
          />
        </View>
        <View style={styles.View_408_160} />
        <View style={styles.View_408_161}>
          <View style={styles.View_408_162}>
            <Text style={styles.Text_408_162}>Politics</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_163}
          />
        </View>
        <View style={styles.View_408_164} />
        <View style={styles.View_408_165}>
          <View style={styles.View_408_166}>
            <Text style={styles.Text_408_166}>Business</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_167}
          />
        </View>
        <View style={styles.View_408_168} />
        <View style={styles.View_408_169}>
          <View style={styles.View_408_170}>
            <Text style={styles.Text_408_170}>Entertainment</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_171}
          />
        </View>
        <View style={styles.View_408_172} />
        <View style={styles.View_408_173}>
          <View style={styles.View_408_174}>
            <Text style={styles.Text_408_174}>Sports</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_175}
          />
        </View>
        <View style={styles.View_408_176} />
        <View style={styles.View_408_177}>
          <View style={styles.View_408_178}>
            <Text style={styles.Text_408_178}>Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_179}
          />
        </View>
        <View style={styles.View_408_180} />
        <View style={styles.View_408_181}>
          <View style={styles.View_408_182}>
            <Text style={styles.Text_408_182}>Technology</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_183}
          />
        </View>
        <View style={styles.View_408_184} />
        <View style={styles.View_408_185}>
          <View style={styles.View_408_186}>
            <Text style={styles.Text_408_186}>Covid-19</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_408_187}
          />
        </View>
      </View>
      <View style={styles.View_590_229}>
        <Text style={styles.Text_590_229}>People</Text>
      </View>
      <View style={styles.View_590_230}>
        <Text style={styles.Text_590_230}>Businesses</Text>
      </View>
      <View style={styles.View_590_231}>
        <Text style={styles.Text_590_231}>Places</Text>
      </View>
      <View style={styles.View_590_232}>
        <View style={styles.View_590_233}>
          <View style={styles.View_590_234}>
            <View style={styles.View_590_237}>
              <Text style={styles.Text_590_237}>Events</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_591_676}>
        <View style={styles.View_591_677}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/953f/c34e/975e290f1d9a5ba0c82b6ab29dc7a547"
            }}
            style={styles.ImageBackground_591_678}
          />
          <View style={styles.View_591_679}>
            <View source={{ uri: "null" }} style={styles.View_591_680} />
            <View style={styles.View_591_880}>
              <View style={styles.View_591_881} />
            </View>
          </View>
        </View>
        <View style={styles.View_591_681}>
          <View style={styles.View_591_682}>
            <View style={styles.View_591_683}>
              <Text style={styles.Text_591_683}>More</Text>
            </View>
            <View style={styles.View_591_684} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/716f/1b23/1f694a153c81bbf43c0dc1601ab77e9b"
              }}
              style={styles.ImageBackground_591_685}
            />
            <View style={styles.View_591_687}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5a0/09e7/1f71b1aafce884d6273a78d2e6bf3345"
                }}
                style={styles.ImageBackground_591_688}
              />
              <View style={styles.View_591_689}>
                <Text style={styles.Text_591_689}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_591_690}>
            <View style={styles.View_591_691}>
              <View style={styles.View_591_692}>
                <Text style={styles.Text_591_692}>Discover</Text>
              </View>
              <View style={styles.View_591_693} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4579/2702/86ccfb19a46211d6e5169004ea08ac70"
                }}
                style={styles.ImageBackground_591_694}
              />
            </View>
          </View>
          <View style={styles.View_591_697}>
            <View style={styles.View_591_698}>
              <Text style={styles.Text_591_698}>Live TV</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461c/4285/18df0a6e81958c4d818e454f9924ec26"
              }}
              style={styles.ImageBackground_591_699}
            />
          </View>
          <View style={styles.View_591_703}>
            <View style={styles.View_591_704}>
              <Text style={styles.Text_591_704}>News</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a0/39c6/88fbddf7f584b8ef7f98ea055d9a2398"
              }}
              style={styles.ImageBackground_591_705}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_452_1: {
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
  View_408_3: {
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
  ImageBackground_408_4: {
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
  ImageBackground_408_8: {
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
  ImageBackground_408_12: {
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
  View_408_19: {
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
  ImageBackground_408_20: {
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
  View_408_22: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.5136612021857925%")
  },
  Text_408_22: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_23: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("21.584699453551913%")
  },
  Text_408_23: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_24: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("50.81967213114754%")
  },
  Text_408_24: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_28: {
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
  ImageBackground_408_29: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_408_30: {
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
  View_408_31: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.0928961748633856%")
  },
  Text_408_31: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_408_32: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1.0928961748633856%")
  },
  Text_408_32: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_408_33: {
    width: wp("3.733298492431641%"),
    height: hp("1.9124751533966897%"),
    top: hp("1.5027530857774085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  View_408_36: {
    flexGrow: 1,
    width: wp("20.533333333333335%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_408_37: {
    width: wp("15.2%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_408_40: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_408_40: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_413_40: {
    flexGrow: 1,
    width: wp("40.53333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_413_41: {
    width: wp("35.199999999999996%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_413_44: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_44: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_413_68: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_413_69: {
    width: wp("20.8%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_413_74: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_74: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_413_61: {
    flexGrow: 1,
    width: wp("37.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_413_62: {
    width: wp("32%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_413_67: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_67: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_408_78: {
    flexGrow: 1,
    width: wp("24.8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_408_79: {
    width: wp("19.466666666666665%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_408_84: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_408_84: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_414_16: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.8%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_414_17: {
    width: wp("19.733333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_414_22: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_414_22: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_413_75: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_413_76: {
    width: wp("27.46666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_413_81: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_81: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_413_82: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_413_83: {
    width: wp("23.733333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_413_88: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_88: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_408_113: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_408_114: {
    width: wp("29.86666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_408_119: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_408_119: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_414_0: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_414_1: {
    width: wp("24.8%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_414_6: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_414_6: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_414_7: {
    flexGrow: 1,
    width: wp("31.2%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_414_8: {
    width: wp("25.866666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_414_13: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_414_13: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_408_148: {
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
  View_408_149: {
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
  View_408_150: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_408_150: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_151: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_152: {
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
  View_408_153: {
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
  View_408_154: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_408_154: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_155: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_156: {
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
  View_408_157: {
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
  View_408_158: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_408_158: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_159: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_160: {
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
  View_408_161: {
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
  View_408_162: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_408_162: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_163: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_164: {
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
  View_408_165: {
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
  View_408_166: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_408_166: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_167: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_168: {
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
  View_408_169: {
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
  View_408_170: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_408_170: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_171: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_172: {
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
  View_408_173: {
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
  View_408_174: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_408_174: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_175: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_176: {
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
  View_408_177: {
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
  View_408_178: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557379915%")
  },
  Text_408_178: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_179: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_180: {
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
  View_408_181: {
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
  View_408_182: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_408_182: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_183: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_408_184: {
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
  View_408_185: {
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
  View_408_186: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_408_186: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_187: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("0%")
  },
  View_590_229: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("26.229508196721312%")
  },
  Text_590_229: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_590_230: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("26.229508196721312%")
  },
  Text_590_230: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_590_231: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.2%"),
    top: hp("26.229508196721312%")
  },
  Text_590_231: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_590_232: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_590_233: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 59, 48, 1)"
  },
  View_590_234: {
    width: wp("10.4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_590_237: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_590_237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_591_676: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("99.31693989071039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_677: {
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
  ImageBackground_591_678: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_591_679: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_680: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.06830601092896416%")
  },
  View_591_880: {
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
  View_591_881: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_591_681: {
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
  View_591_682: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_683: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_683: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_591_684: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_591_685: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.466666666666669%")
  },
  View_591_687: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_591_688: {
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
  View_591_689: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("0.4098360655737565%")
  },
  Text_591_689: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_591_690: {
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
  View_591_691: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_692: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_692: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_591_693: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_591_694: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333337%")
  },
  View_591_697: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_698: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_698: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_591_699: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.600000000000001%")
  },
  View_591_703: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_591_704: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_591_704: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_591_705: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
