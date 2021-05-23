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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bfd/47d7/4d42048b687adc6a635e717876d5b149"
        }}
        style={styles.ImageBackground_667_232}
      />
      <View style={styles.View_667_233}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_667_234}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_667_238}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_667_242}
        />
      </View>
      <View style={styles.View_667_249}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
          }}
          style={styles.ImageBackground_667_250}
        />
      </View>
      <View style={styles.View_667_252}>
        <Text style={styles.Text_667_252}>Elon Musk</Text>
      </View>
      <View style={styles.View_667_253}>
        <View style={styles.View_667_254}>
          <View style={styles.View_667_255}>
            <Text style={styles.Text_667_255}>􀆉</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_667_347}>
        <View style={styles.View_667_352} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f86/212a/53889113745302337a008daac32423fe"
          }}
          style={styles.ImageBackground_667_353}
        />
        <View style={styles.View_667_355}>
          <View style={styles.View_667_356}>
            <Text style={styles.Text_667_356}>FEBRUARY 17, 2021</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b57/8c84/4dad260e6d395048d7de83d01a3bdeaa"
            }}
            style={styles.ImageBackground_667_357}
          />
        </View>
        <View style={styles.View_667_370}>
          <Text style={styles.Text_667_370}>
            Jeff Bezos has reclaimed his title of world’s richest person, ending
            Elon Musk’s roughly six-week reign on top of the list...more
          </Text>
        </View>
        <View style={styles.View_667_371}>
          <Text style={styles.Text_667_371}>
            Jeff Bezos Reclaims Title of World’s Richest Person from Elon Musk
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c04c/c39b/5b82ea9118c460a90977ac1f522aaf12"
          }}
          style={styles.ImageBackground_667_372}
        />
      </View>
      <View style={styles.View_667_373}>
        <View style={styles.View_667_378} />
        <View style={styles.View_667_379}>
          <View style={styles.View_667_380}>
            <Text style={styles.Text_667_380}>FEBRUARY 15, 2021</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b57/8c84/4dad260e6d395048d7de83d01a3bdeaa"
            }}
            style={styles.ImageBackground_667_381}
          />
        </View>
        <View style={styles.View_667_394}>
          <Text style={styles.Text_667_394}>
            Billionaire Elon Musk said on Sunday that he supports major holders
            of the meme-based digital currency dogecoin selling most of...more
          </Text>
        </View>
        <View style={styles.View_667_395}>
          <Text style={styles.Text_667_395}>
            Elon Musk Says He Supports Top Dogecoin Holders Selling Their Coins
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f86/212a/53889113745302337a008daac32423fe"
          }}
          style={styles.ImageBackground_667_396}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d45b/e80b/3eb9481b321af1edfad092828d3eb624"
          }}
          style={styles.ImageBackground_667_398}
        />
      </View>
      <View style={styles.View_667_399}>
        <View style={styles.View_667_404} />
        <View style={styles.View_667_405}>
          <View style={styles.View_667_406}>
            <Text style={styles.Text_667_406}>JANUARY 30, 2021</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b57/8c84/4dad260e6d395048d7de83d01a3bdeaa"
            }}
            style={styles.ImageBackground_667_407}
          />
        </View>
        <View style={styles.View_667_420}>
          <Text style={styles.Text_667_420}>
            SpaceX’s first high-altitude test flight of its Starship rocket,
            which exploded last month while attempting to land after an...more
          </Text>
        </View>
        <View style={styles.View_667_421}>
          <Text style={styles.Text_667_421}>
            Elon Musk’s SpaceX Violated Launch License in Explosive Starship
            Test, Report Says
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f86/212a/53889113745302337a008daac32423fe"
          }}
          style={styles.ImageBackground_667_422}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac43/ab0a/0ded58efe57b105701e5a26f4e7ae1b4"
          }}
          style={styles.ImageBackground_667_424}
        />
      </View>
      <View style={styles.View_667_336} />
      <View style={styles.View_668_282}>
        <View style={styles.View_668_283}>
          <View style={styles.View_668_286}>
            <Text style={styles.Text_668_286}>Articles</Text>
          </View>
        </View>
        <View style={styles.View_668_337}>
          <View style={styles.View_668_336}>
            <Text style={styles.Text_668_336}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_668_329}>
        <View style={styles.View_668_330}>
          <View style={styles.View_668_331}>
            <View style={styles.View_668_334}>
              <Text style={styles.Text_668_334}>Videos</Text>
            </View>
          </View>
          <View style={styles.View_668_338}>
            <View style={styles.View_668_340}>
              <Text style={styles.Text_668_340}>1</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_667_232: {
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
  View_667_233: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.57773437499999%"),
    top: hp("1.366120218579235%")
  },
  ImageBackground_667_234: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288867187500017%"),
    top: hp("1.2750344198258194%")
  },
  ImageBackground_667_238: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166683%"),
    top: hp("1.274667541837432%")
  },
  ImageBackground_667_242: {
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
  View_667_249: {
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
  ImageBackground_667_250: {
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
  View_667_252: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("7.377049180327869%")
  },
  Text_667_252: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_667_253: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_667_254: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("0.5464480874316946%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_667_255: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_667_255: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_667_347: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("21.584699453551913%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_667_352: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_667_353: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%")
  },
  View_667_355: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("22.131147540983605%")
  },
  View_667_356: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.1366120218579212%")
  },
  Text_667_356: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_667_357: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_667_370: {
    width: wp("80.26666666666667%"),
    minWidth: wp("80.26666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("13.251366120218577%")
  },
  Text_667_370: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_667_371: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("3.2786885245901622%")
  },
  Text_667_371: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_667_372: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("2.185792349726775%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_667_373: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("50.54644808743169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_667_378: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_667_379: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("22.131147540983612%")
  },
  View_667_380: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.1366120218579141%")
  },
  Text_667_380: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_667_381: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_667_394: {
    width: wp("80.26666666666667%"),
    minWidth: wp("80.26666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("13.251366120218577%")
  },
  Text_667_394: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_667_395: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("3.278688524590173%")
  },
  Text_667_395: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_667_396: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("22.131147540983612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%")
  },
  ImageBackground_667_398: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("2.322404371584696%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_667_399: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("79.23497267759562%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_667_404: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_667_405: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("21.99453551912569%")
  },
  View_667_406: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.1366120218579141%")
  },
  Text_667_406: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_667_407: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_667_420: {
    width: wp("80.80000000000001%"),
    minWidth: wp("80.80000000000001%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("13.114754098360663%")
  },
  Text_667_420: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_667_421: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("3.27868852459018%")
  },
  Text_667_421: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_667_422: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("21.99453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%")
  },
  ImageBackground_667_424: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("2.185792349726782%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_667_336: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("109.15300546448088%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_668_282: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.617486338797814%"),
    backgroundColor: "rgba(255, 59, 48, 1)"
  },
  View_668_283: {
    width: wp("11.733333333333333%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.34153005464480835%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_668_286: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3415300546448101%")
  },
  Text_668_286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_668_337: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%"),
    top: hp("0.4781420765027331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_668_336: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0.7513661202185791%")
  },
  Text_668_336: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_668_329: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("14.617486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_668_330: {
    flexGrow: 1,
    width: wp("22.400000000000002%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0683060109289606%"),
    backgroundColor: "rgba(116, 116, 128, 0.07999999821186066)"
  },
  View_668_331: {
    width: wp("10.666666666666668%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.27322404371584774%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_668_334: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3415300546448101%")
  },
  Text_668_334: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_668_338: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%"),
    top: hp("0.4098360655737725%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_668_340: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0.7513661202185791%")
  },
  Text_668_340: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
