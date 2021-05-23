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
      <View style={styles.View_539_614}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb7d/a761/02ad11109f15d7e66a45e0a806af3ef5"
          }}
          style={styles.ImageBackground_539_615}
        />
        <View style={styles.View_539_619} />
        <View style={styles.View_539_620} />
      </View>
      <View style={styles.View_539_700}>
        <Text style={styles.Text_539_700}>Discover</Text>
      </View>
      <View style={styles.View_539_701}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cda/3db0/d01d6b33d4f975c4b389cb9685c2a281"
          }}
          style={styles.ImageBackground_539_702}
        />
        <View style={styles.View_539_703}>
          <View style={styles.View_539_704}>
            <Text style={styles.Text_539_704}>Search Arise...</Text>
          </View>
          <View style={styles.View_539_705}>
            <Text style={styles.Text_539_705}>Cancel</Text>
          </View>
        </View>
        <View style={styles.View_540_324} />
      </View>
      <View style={styles.View_539_896}>
        <Text style={styles.Text_539_896}>Trending</Text>
      </View>
      <View style={styles.View_539_897}>
        <Text style={styles.Text_539_897}>Category</Text>
      </View>
      <View style={styles.View_539_898}>
        <Text style={styles.Text_539_898}>Events</Text>
      </View>
      <View style={styles.View_539_899}>
        <Text style={styles.Text_539_899}>Business</Text>
      </View>
      <View style={styles.View_539_900}>
        <Text style={styles.Text_539_900}>Places</Text>
      </View>
      <View style={styles.View_539_901}>
        <View style={styles.View_539_902}>
          <View style={styles.View_539_905}>
            <Text style={styles.Text_539_905}>Buhari</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_908}>
        <View style={styles.View_539_909}>
          <View style={styles.View_539_912}>
            <Text style={styles.Text_539_912}>Donald Trump</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_915}>
        <View style={styles.View_539_916}>
          <View style={styles.View_539_921}>
            <Text style={styles.Text_539_921}>Megan Markle</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_922}>
        <View style={styles.View_539_923}>
          <View style={styles.View_539_928}>
            <Text style={styles.Text_539_928}>P.M. Netanyahu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_929}>
        <View style={styles.View_539_930}>
          <View style={styles.View_539_935}>
            <Text style={styles.Text_539_935}>Chadwick Boseman</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_936}>
        <View style={styles.View_539_937}>
          <View style={styles.View_539_942}>
            <Text style={styles.Text_539_942}>Putin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_943}>
        <View style={styles.View_539_944}>
          <View style={styles.View_539_949}>
            <Text style={styles.Text_539_949}>Davido</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_950}>
        <View style={styles.View_539_951}>
          <View style={styles.View_539_956}>
            <Text style={styles.Text_539_956}>Bishop Kukah</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_957}>
        <View style={styles.View_539_958}>
          <View style={styles.View_539_963}>
            <Text style={styles.Text_539_963}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_964}>
        <View style={styles.View_539_965}>
          <View style={styles.View_539_970}>
            <Text style={styles.Text_539_970}>Joe Biden</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_971}>
        <View style={styles.View_539_972}>
          <View style={styles.View_539_977}>
            <Text style={styles.Text_539_977}>Guardiola</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_978}>
        <View style={styles.View_539_979}>
          <View style={styles.View_539_984}>
            <Text style={styles.Text_539_984}>Dbanj</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_985}>
        <View style={styles.View_539_986}>
          <View style={styles.View_539_991}>
            <Text style={styles.Text_539_991}>Soludo</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_992}>
        <View style={styles.View_539_993}>
          <View style={styles.View_539_998}>
            <Text style={styles.Text_539_998}>Tinubu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_999}>
        <View style={styles.View_539_1000}>
          <View style={styles.View_539_1005}>
            <Text style={styles.Text_539_1005}>Umahi</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_1006}>
        <View style={styles.View_539_1007}>
          <View style={styles.View_539_1012}>
            <Text style={styles.Text_539_1012}>Elon Musk</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_539_1053}>
        <View style={styles.View_539_1054}>
          <View style={styles.View_539_1055}>
            <View style={styles.View_539_1058}>
              <Text style={styles.Text_539_1058}>People</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_540_301}>
        <View style={styles.View_540_273}>
          <Text style={styles.Text_540_273}>Breaking News</Text>
        </View>
        <View style={styles.View_540_274}>
          <Text style={styles.Text_540_274}>Global</Text>
        </View>
        <View style={styles.View_540_275}>
          <Text style={styles.Text_540_275}>Regional</Text>
        </View>
        <View style={styles.View_540_276}>
          <Text style={styles.Text_540_276}>Business</Text>
        </View>
        <View style={styles.View_540_277}>
          <Text style={styles.Text_540_277}>Entertainment</Text>
        </View>
        <View style={styles.View_540_278}>
          <Text style={styles.Text_540_278}>Sports</Text>
        </View>
        <View style={styles.View_540_279}>
          <Text style={styles.Text_540_279}>Health</Text>
        </View>
        <View style={styles.View_540_280}>
          <Text style={styles.Text_540_280}>Technology</Text>
        </View>
        <View style={styles.View_540_281}>
          <Text style={styles.Text_540_281}>Covid-19</Text>
        </View>
        <View style={styles.View_540_283} />
        <View style={styles.View_540_284} />
        <View style={styles.View_540_285} />
        <View style={styles.View_540_286} />
        <View style={styles.View_540_287} />
        <View style={styles.View_540_288} />
        <View style={styles.View_540_289} />
        <View style={styles.View_540_290} />
        <View style={styles.View_540_291} />
        <View style={styles.View_540_292} />
        <View style={styles.View_540_293} />
        <View style={styles.View_540_294} />
        <View style={styles.View_540_295} />
        <View style={styles.View_540_296} />
        <View style={styles.View_540_297} />
        <View style={styles.View_540_298} />
        <View style={styles.View_540_299} />
        <View style={styles.View_540_300} />
      </View>
      <View style={styles.View_590_0}>
        <View style={styles.View_590_1} />
        <View style={styles.View_590_2} />
        <View style={styles.View_590_3} />
        <View style={styles.View_590_4} />
        <View style={styles.View_590_5}>
          <Text style={styles.Text_590_5}>More</Text>
        </View>
        <View style={styles.View_590_6}>
          <Text style={styles.Text_590_6}>Discover</Text>
        </View>
        <View style={styles.View_590_7}>
          <Text style={styles.Text_590_7}>Live TV</Text>
        </View>
        <View style={styles.View_590_8}>
          <Text style={styles.Text_590_8}>News</Text>
        </View>
      </View>
      <View style={styles.View_539_690}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb7d/a761/02ad11109f15d7e66a45e0a806af3ef5"
          }}
          style={styles.ImageBackground_539_691}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_539_614: {
    width: wp("60.8%"),
    minWidth: wp("60.8%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("-32.37704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_539_615: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333335%"),
    top: hp("4.098360655737711%")
  },
  View_539_619: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("37.978142076502735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("150.4%"),
    backgroundColor: "rgba(151, 151, 151, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_539_620: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("37.978142076502735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("157.6%"),
    backgroundColor: "rgba(151, 151, 151, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_539_700: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.5136612021857925%")
  },
  Text_539_700: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_539_701: {
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
  ImageBackground_539_702: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_539_703: {
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
  View_539_704: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.0928961748633856%")
  },
  Text_539_704: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_539_705: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1.0928961748633856%")
  },
  Text_539_705: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_540_324: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.2295081967213104%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_539_896: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21.584699453551913%")
  },
  Text_539_896: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_539_897: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("50.81967213114754%")
  },
  Text_539_897: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_539_898: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("26.229508196721312%")
  },
  Text_539_898: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_539_899: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("26.229508196721312%")
  },
  Text_539_899: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_539_900: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("26.229508196721312%")
  },
  Text_539_900: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_539_901: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_902: {
    width: wp("10.4%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_905: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_905: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_908: {
    flexGrow: 1,
    width: wp("27.73333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_909: {
    width: wp("22.400000000000002%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_912: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_912: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_915: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_916: {
    width: wp("22.666666666666664%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_921: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_922: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_923: {
    width: wp("24.53333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_928: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_928: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_929: {
    flexGrow: 1,
    width: wp("36.8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_930: {
    width: wp("31.466666666666665%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_935: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_936: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_937: {
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
  View_539_942: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_942: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_943: {
    flexGrow: 1,
    width: wp("16.8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_944: {
    width: wp("11.466666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_949: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_949: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_950: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_951: {
    width: wp("21.333333333333336%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_956: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_956: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_957: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.2%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_958: {
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
  View_539_963: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_963: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_964: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_965: {
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
  View_539_970: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_971: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_972: {
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
  View_539_977: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_978: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333333%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_979: {
    width: wp("9.6%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_984: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_984: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_985: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_986: {
    width: wp("11.200000000000001%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_991: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_991: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_992: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_993: {
    width: wp("10.933333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_998: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_998: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_999: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_1000: {
    width: wp("10.133333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_1005: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_1005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_1006: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(116, 116, 128, 0.6000000238418579)"
  },
  View_539_1007: {
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
  View_539_1012: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_1012: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_539_1053: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_539_1054: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(121, 122, 124, 1)"
  },
  View_539_1055: {
    width: wp("10.933333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_539_1058: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_539_1058: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_540_301: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("58.606557377049185%"),
    minHeight: hp("58.606557377049185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("55.60109289617486%")
  },
  View_540_273: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("0.2732282127838985%")
  },
  Text_540_273: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_274: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("6.967221452890193%")
  },
  Text_540_274: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_275: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("13.66121469299651%")
  },
  Text_540_275: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_276: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("20.355207933102804%")
  },
  Text_540_276: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_277: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("27.0492011732091%")
  },
  Text_540_277: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_278: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("33.74319441331541%")
  },
  Text_540_278: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_279: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("40.57379550621158%")
  },
  Text_540_279: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_280: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("47.40439659910774%")
  },
  Text_540_280: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_281: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("54.098385670146016%")
  },
  Text_540_281: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_283: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_284: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923494%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_285: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.306010928961754%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_286: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_287: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.69398907103826%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_288: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.387978142076506%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_289: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.081967213114766%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_290: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.77595628415301%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_291: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.46994535519127%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_540_292: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("26.77595628415301%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_293: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("33.33333333333334%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_294: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("40.30054644808743%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_295: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("47.131147540983605%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_296: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("53.55191256830602%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_297: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("13.387978142076506%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_298: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("20.08196721311475%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_299: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("6.5573770491803245%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_540_300: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 214, 214, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_590_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_590_1: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(121, 122, 124, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_590_2: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(121, 122, 124, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_590_3: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(121, 122, 124, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_590_4: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(121, 122, 124, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_590_5: {
    width: wp("25%"),
    top: hp("7.37758282103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  Text_590_5: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_590_6: {
    width: wp("25%"),
    top: hp("7.37758282103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  Text_590_6: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_590_7: {
    width: wp("25%"),
    top: hp("7.37758282103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  Text_590_7: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_590_8: {
    width: wp("25%"),
    top: hp("7.37758282103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_590_8: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1599999964237213,
    textTransform: "none"
  },
  View_539_690: {
    width: wp("60.8%"),
    minWidth: wp("60.8%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105.06666666666666%"),
    top: hp("-32.37704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_539_691: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333326%"),
    top: hp("4.098360655737711%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
