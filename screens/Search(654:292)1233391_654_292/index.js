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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d42d/f14c/6766ece4e9138bac0e9256843ea65d74"
        }}
        style={styles.ImageBackground_659_274}
      />
      <View style={styles.View_654_695}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1b6/8850/d697cabf4e0947d9de224c818690528c"
          }}
          style={styles.ImageBackground_654_696}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/775e/2a70/ad65d741e44fc5589e347a6328743269"
          }}
          style={styles.ImageBackground_654_700}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/639d/30e5/a0143e6ec04f942a7bdd77da936c19c8"
          }}
          style={styles.ImageBackground_654_704}
        />
      </View>
      <View style={styles.View_654_711}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb4/5b6b/b0e62c0d38676333230ac45200609292"
          }}
          style={styles.ImageBackground_654_712}
        />
      </View>
      <View style={styles.View_654_714}>
        <Text style={styles.Text_654_714}>Discover</Text>
      </View>
      <View style={styles.View_654_716}>
        <Text style={styles.Text_654_716}>Category</Text>
      </View>
      <View style={styles.View_654_717}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e6f/1500/e6f64902619c053f9c772337f7b0c9e6"
          }}
          style={styles.ImageBackground_654_718}
        />
        <View style={styles.View_654_719}>
          <View style={styles.View_654_720}>
            <Text style={styles.Text_654_720}>Search Arise...</Text>
          </View>
          <View style={styles.View_654_721}>
            <Text style={styles.Text_654_721}>Cancel</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed2f/959e/fd680490e7e84b14dcb219b2d54b6c1e"
          }}
          style={styles.ImageBackground_654_722}
        />
      </View>
      <View style={styles.View_654_725}>
        <View style={styles.View_654_726}>
          <View style={styles.View_654_729}>
            <Text style={styles.Text_654_729}>Buhari</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_732}>
        <View style={styles.View_654_733}>
          <View style={styles.View_654_736}>
            <Text style={styles.Text_654_736}>Donald Trump</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_739}>
        <View style={styles.View_654_740}>
          <View style={styles.View_654_745}>
            <Text style={styles.Text_654_745}>Megan Markle</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_746}>
        <View style={styles.View_654_747}>
          <View style={styles.View_654_752}>
            <Text style={styles.Text_654_752}>P.M. Netanyahu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_753}>
        <View style={styles.View_654_754}>
          <View style={styles.View_654_759}>
            <Text style={styles.Text_654_759}>Chadwick Boseman</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_760}>
        <View style={styles.View_654_761}>
          <View style={styles.View_654_766}>
            <Text style={styles.Text_654_766}>Putin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_767}>
        <View style={styles.View_654_768}>
          <View style={styles.View_654_773}>
            <Text style={styles.Text_654_773}>Davido</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_774}>
        <View style={styles.View_654_775}>
          <View style={styles.View_654_780}>
            <Text style={styles.Text_654_780}>Bishop Kukah</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_781}>
        <View style={styles.View_654_782}>
          <View style={styles.View_654_787}>
            <Text style={styles.Text_654_787}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_788}>
        <View style={styles.View_654_789}>
          <View style={styles.View_654_794}>
            <Text style={styles.Text_654_794}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_795}>
        <View style={styles.View_654_796}>
          <View style={styles.View_654_801}>
            <Text style={styles.Text_654_801}>Guardiola</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_802}>
        <View style={styles.View_654_803}>
          <View style={styles.View_654_808}>
            <Text style={styles.Text_654_808}>Dbanj</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_809}>
        <View style={styles.View_654_810}>
          <View style={styles.View_654_815}>
            <Text style={styles.Text_654_815}>Soludo</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_816}>
        <View style={styles.View_654_817}>
          <View style={styles.View_654_822}>
            <Text style={styles.Text_654_822}>Tinubu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_823}>
        <View style={styles.View_654_824}>
          <View style={styles.View_654_829}>
            <Text style={styles.Text_654_829}>Umahi</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_830}>
        <View style={styles.View_654_831}>
          <View style={styles.View_654_836}>
            <Text style={styles.Text_654_836}>Elon Musk</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_654_837}>
        <View style={styles.View_654_838}>
          <View style={styles.View_654_839}>
            <Text style={styles.Text_654_839}>Breaking News</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_840}
          />
        </View>
        <View style={styles.View_654_841} />
        <View style={styles.View_654_842}>
          <View style={styles.View_654_843}>
            <Text style={styles.Text_654_843}>Global</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_844}
          />
        </View>
        <View style={styles.View_654_845} />
        <View style={styles.View_654_846}>
          <View style={styles.View_654_847}>
            <Text style={styles.Text_654_847}>Regional</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_848}
          />
        </View>
        <View style={styles.View_654_849} />
        <View style={styles.View_654_850}>
          <View style={styles.View_654_851}>
            <Text style={styles.Text_654_851}>Politics</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_852}
          />
        </View>
        <View style={styles.View_654_853} />
        <View style={styles.View_654_854}>
          <View style={styles.View_654_855}>
            <Text style={styles.Text_654_855}>Business</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_856}
          />
        </View>
        <View style={styles.View_654_857} />
        <View style={styles.View_654_858}>
          <View style={styles.View_654_859}>
            <Text style={styles.Text_654_859}>Entertainment</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_860}
          />
        </View>
        <View style={styles.View_654_861} />
        <View style={styles.View_654_862}>
          <View style={styles.View_654_863}>
            <Text style={styles.Text_654_863}>Sports</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_864}
          />
        </View>
        <View style={styles.View_654_865} />
        <View style={styles.View_654_866}>
          <View style={styles.View_654_867}>
            <Text style={styles.Text_654_867}>Health</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_868}
          />
        </View>
        <View style={styles.View_654_869} />
        <View style={styles.View_654_870}>
          <View style={styles.View_654_871}>
            <Text style={styles.Text_654_871}>Technology</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_872}
          />
        </View>
        <View style={styles.View_654_873} />
        <View style={styles.View_654_874}>
          <View style={styles.View_654_875}>
            <Text style={styles.Text_654_875}>Covid-19</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd1/2fcb/589dc8be44c7d5bf1ed27d6715aa3828"
            }}
            style={styles.ImageBackground_654_876}
          />
        </View>
      </View>
      <View style={styles.View_654_877}>
        <Text style={styles.Text_654_877}>Events</Text>
      </View>
      <View style={styles.View_654_878}>
        <Text style={styles.Text_654_878}>Businesses</Text>
      </View>
      <View style={styles.View_654_879}>
        <Text style={styles.Text_654_879}>Places</Text>
      </View>
      <View style={styles.View_654_880}>
        <View style={styles.View_654_881}>
          <View style={styles.View_654_882}>
            <View style={styles.View_654_885}>
              <Text style={styles.Text_654_885}>People</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_654_255}>
        <View style={styles.View_654_256}>
          <View style={styles.View_654_257}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d6c/2272/7910d80f1c8bcc5a36384cedce49e80a"
              }}
              style={styles.ImageBackground_654_258}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d5/b4d8/5e408515a673c83256b9975c6f9b51a8"
              }}
              style={styles.ImageBackground_654_259}
            />
          </View>
          <View style={styles.View_654_261}>
            <View style={styles.View_654_262}>
              <View style={styles.View_654_263}>
                <Text style={styles.Text_654_263}>More</Text>
              </View>
              <View style={styles.View_654_264} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891b/8c9c/61a7f46ac4e3c41e50239ca76be472c9"
                }}
                style={styles.ImageBackground_654_265}
              />
              <View style={styles.View_654_267}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5a0/09e7/1f71b1aafce884d6273a78d2e6bf3345"
                  }}
                  style={styles.ImageBackground_654_268}
                />
                <View style={styles.View_654_269}>
                  <Text style={styles.Text_654_269}>2</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_654_270}>
              <View style={styles.View_654_271}>
                <View style={styles.View_654_272}>
                  <Text style={styles.Text_654_272}>Discover</Text>
                </View>
                <View style={styles.View_654_273} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4579/2702/86ccfb19a46211d6e5169004ea08ac70"
                  }}
                  style={styles.ImageBackground_654_274}
                />
              </View>
            </View>
            <View style={styles.View_654_277}>
              <View style={styles.View_654_278}>
                <Text style={styles.Text_654_278}>Live TV</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe4/09dc/63be1bd7c18fe5203aa6441f2c6c9a99"
                }}
                style={styles.ImageBackground_654_279}
              />
            </View>
            <View style={styles.View_654_283}>
              <View style={styles.View_654_284}>
                <Text style={styles.Text_654_284}>News</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaef/df15/6c71f8d7ee6e72603ae4dd98fa78efaa"
                }}
                style={styles.ImageBackground_654_285}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_654_290}>
          <View style={styles.View_654_291} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_659_274: {
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
  View_654_695: {
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
  ImageBackground_654_696: {
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
  ImageBackground_654_700: {
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
  ImageBackground_654_704: {
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
  View_654_711: {
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
  ImageBackground_654_712: {
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
  View_654_714: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.5136612021857925%")
  },
  Text_654_714: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_654_716: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("50.81967213114754%")
  },
  Text_654_716: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_654_717: {
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
  ImageBackground_654_718: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_654_719: {
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
  View_654_720: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.0928961748633856%")
  },
  Text_654_720: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_654_721: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1.0928961748633856%")
  },
  Text_654_721: {
    color: "rgba(247, 247, 247, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_654_722: {
    width: wp("3.733298492431641%"),
    height: hp("1.9124751533966897%"),
    top: hp("1.502748916709356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  View_654_725: {
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
  View_654_726: {
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
  View_654_729: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_729: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_732: {
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
  View_654_733: {
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
  View_654_736: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_736: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_739: {
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
  View_654_740: {
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
  View_654_745: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_745: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_746: {
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
  View_654_747: {
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
  View_654_752: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_752: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_753: {
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
  View_654_754: {
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
  View_654_759: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_759: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_760: {
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
  View_654_761: {
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
  View_654_766: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_766: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_767: {
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
  View_654_768: {
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
  View_654_773: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_773: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_774: {
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
  View_654_775: {
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
  View_654_780: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_780: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_781: {
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
  View_654_782: {
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
  View_654_787: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_787: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_788: {
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
  View_654_789: {
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
  View_654_794: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_794: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_795: {
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
  View_654_796: {
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
  View_654_801: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_801: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_802: {
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
  View_654_803: {
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
  View_654_808: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_808: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_809: {
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
  View_654_810: {
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
  View_654_815: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_815: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_816: {
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
  View_654_817: {
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
  View_654_822: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_822: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_823: {
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
  View_654_824: {
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
  View_654_829: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_829: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_830: {
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
  View_654_831: {
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
  View_654_836: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_836: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_837: {
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
  View_654_838: {
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
  View_654_839: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_654_839: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_840: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_841: {
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
  View_654_842: {
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
  View_654_843: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_654_843: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_844: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_845: {
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
  View_654_846: {
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
  View_654_847: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_654_847: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_848: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_849: {
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
  View_654_850: {
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
  View_654_851: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_654_851: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_852: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_853: {
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
  View_654_854: {
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
  View_654_855: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_654_855: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_856: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_857: {
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
  View_654_858: {
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
  View_654_859: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_654_859: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_860: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_861: {
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
  View_654_862: {
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
  View_654_863: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_654_863: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_864: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_865: {
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
  View_654_866: {
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
  View_654_867: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557379915%")
  },
  Text_654_867: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_868: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_869: {
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
  View_654_870: {
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
  View_654_871: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_654_871: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_872: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_654_873: {
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
  View_654_874: {
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
  View_654_875: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_654_875: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_654_876: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.80000000000001%"),
    top: hp("0%")
  },
  View_654_877: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("26.229508196721312%")
  },
  Text_654_877: {
    color: "rgba(247, 247, 247, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_654_878: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("26.229508196721312%")
  },
  Text_654_878: {
    color: "rgba(247, 247, 247, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_654_879: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.00000000000001%"),
    top: hp("26.229508196721312%")
  },
  Text_654_879: {
    color: "rgba(247, 247, 247, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_654_880: {
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
  View_654_881: {
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
  View_654_882: {
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
  View_654_885: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_654_885: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_654_255: {
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
  View_654_256: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_654_257: {
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
  ImageBackground_654_258: {
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_654_259: {
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
  View_654_261: {
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
  View_654_262: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_654_263: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_654_263: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_654_264: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_654_265: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.466666666666669%")
  },
  View_654_267: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_654_268: {
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
  View_654_269: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("0.4098360655737565%")
  },
  Text_654_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_654_270: {
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
  View_654_271: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_654_272: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_654_272: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_654_273: {
    width: wp("8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333339%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_654_274: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333337%")
  },
  View_654_277: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_654_278: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_654_278: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_654_279: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.600000000000001%")
  },
  View_654_283: {
    width: wp("25%"),
    height: hp("8.033542945736745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_654_284: {
    width: wp("25%"),
    top: hp("5.738246896879261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_654_284: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  ImageBackground_654_285: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  },
  View_654_290: {
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
  View_654_291: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
