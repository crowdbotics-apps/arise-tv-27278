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
      <View style={styles.View_597_435}>
        <Text style={styles.Text_597_435}>Elon</Text>
      </View>
      <View style={styles.View_597_436}>
        <Text style={styles.Text_597_436}>AstraZeneca Vaccine</Text>
      </View>
      <View style={styles.View_597_437}>
        <Text style={styles.Text_597_437}>Flutterwave</Text>
      </View>
      <View style={styles.View_597_438}>
        <Text style={styles.Text_597_438}>CBN</Text>
      </View>
      <View style={styles.View_597_439}>
        <Text style={styles.Text_597_439}>Okonjo-Iweala</Text>
      </View>
      <View style={styles.View_597_440}>
        <Text style={styles.Text_597_440}>Ronaldo</Text>
      </View>
      <View style={styles.View_597_441}>
        <Text style={styles.Text_597_441}>Musk</Text>
      </View>
      <View style={styles.View_597_442}>
        <Text style={styles.Text_597_442}>Cancel</Text>
      </View>
      <View style={styles.View_597_443}>
        <Text style={styles.Text_597_443}>Recent searches</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e917/8bb1/57cd644773d958c3efbf64606b9b833a"
        }}
        style={styles.ImageBackground_597_444}
      />
      <View style={styles.View_597_447} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b55b/7a39/9e40c261447d11932c52b0e9d112083e"
        }}
        style={styles.ImageBackground_597_448}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b55b/7a39/9e40c261447d11932c52b0e9d112083e"
        }}
        style={styles.ImageBackground_597_451}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b55b/7a39/9e40c261447d11932c52b0e9d112083e"
        }}
        style={styles.ImageBackground_597_454}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b55b/7a39/9e40c261447d11932c52b0e9d112083e"
        }}
        style={styles.ImageBackground_597_457}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b55b/7a39/9e40c261447d11932c52b0e9d112083e"
        }}
        style={styles.ImageBackground_597_460}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3091/d027/c4e1c9c167ebad290ae12938d261db42"
        }}
        style={styles.ImageBackground_597_463}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3091/d027/c4e1c9c167ebad290ae12938d261db42"
        }}
        style={styles.ImageBackground_597_465}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3091/d027/c4e1c9c167ebad290ae12938d261db42"
        }}
        style={styles.ImageBackground_597_467}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3091/d027/c4e1c9c167ebad290ae12938d261db42"
        }}
        style={styles.ImageBackground_597_469}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3091/d027/c4e1c9c167ebad290ae12938d261db42"
        }}
        style={styles.ImageBackground_597_471}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_597_435: {
    width: wp("8.746355685131196%"),
    minWidth: wp("8.746355685131196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%"),
    top: hp("5.2%")
  },
  Text_597_435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_436: {
    width: wp("42.857142857142854%"),
    minWidth: wp("42.857142857142854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%"),
    top: hp("35.199999999999996%")
  },
  Text_597_436: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_437: {
    width: wp("23.9067055393586%"),
    minWidth: wp("23.9067055393586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%"),
    top: hp("48%")
  },
  Text_597_437: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_438: {
    width: wp("9.329446064139942%"),
    minWidth: wp("9.329446064139942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%"),
    top: hp("60.8%")
  },
  Text_597_438: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_439: {
    width: wp("30.32069970845481%"),
    minWidth: wp("30.32069970845481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%"),
    top: hp("73.6%")
  },
  Text_597_439: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_440: {
    width: wp("17.20116618075802%"),
    minWidth: wp("17.20116618075802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%"),
    top: hp("86.4%")
  },
  Text_597_440: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_441: {
    width: wp("10.495626822157435%"),
    minWidth: wp("10.495626822157435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.367346938775512%"),
    top: hp("5.2%")
  },
  Text_597_441: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_442: {
    width: wp("9.037900874635568%"),
    minWidth: wp("9.037900874635568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.71428571428571%"),
    top: hp("5.2%")
  },
  Text_597_442: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_443: {
    width: wp("27.113702623906704%"),
    minWidth: wp("27.113702623906704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%"),
    top: hp("21.6%")
  },
  Text_597_443: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_597_444: {
    width: wp("4.0815945616964004%"),
    height: hp("5.5997272491455075%"),
    top: hp("6.4000488281250005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  View_597_447: {
    width: wp("0.2915451895043732%"),
    minWidth: wp("0.2915451895043732%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.367346938775512%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_597_448: {
    width: wp("4.081632653061225%"),
    height: hp("5.6000000000000005%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_451: {
    width: wp("4.081632653061225%"),
    height: hp("5.6000000000000005%"),
    top: hp("48.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_454: {
    width: wp("4.081632653061225%"),
    height: hp("5.6000000000000005%"),
    top: hp("61.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_457: {
    width: wp("4.081632653061225%"),
    height: hp("5.6000000000000005%"),
    top: hp("74.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_460: {
    width: wp("4.081632653061225%"),
    height: hp("5.6000000000000005%"),
    top: hp("87.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_463: {
    width: wp("3.498542274052478%"),
    height: hp("4.8%"),
    top: hp("36.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_465: {
    width: wp("3.498542274052478%"),
    height: hp("4.8%"),
    top: hp("49.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_467: {
    width: wp("3.498542274052478%"),
    height: hp("4.8%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_469: {
    width: wp("3.498542274052478%"),
    height: hp("4.8%"),
    top: hp("74.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_471: {
    width: wp("3.498542274052478%"),
    height: hp("4.8%"),
    top: hp("87.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
