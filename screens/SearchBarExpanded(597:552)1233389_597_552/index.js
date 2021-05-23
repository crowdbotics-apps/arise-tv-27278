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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390b/492f/c6adc0a5d0b8d2d87428ace104bdac4e"
        }}
        style={styles.ImageBackground_597_553}
      />
      <View style={styles.View_597_554}>
        <Text style={styles.Text_597_554}>Elon</Text>
      </View>
      <View style={styles.View_597_555}>
        <Text style={styles.Text_597_555}>AstraZeneca Vaccine</Text>
      </View>
      <View style={styles.View_597_556}>
        <Text style={styles.Text_597_556}>Flutterwave</Text>
      </View>
      <View style={styles.View_597_557}>
        <Text style={styles.Text_597_557}>CBN</Text>
      </View>
      <View style={styles.View_597_558}>
        <Text style={styles.Text_597_558}>Okonjo-Iweala</Text>
      </View>
      <View style={styles.View_597_559}>
        <Text style={styles.Text_597_559}>Ronaldo</Text>
      </View>
      <View style={styles.View_597_560}>
        <Text style={styles.Text_597_560}>Musk</Text>
      </View>
      <View style={styles.View_597_561}>
        <Text style={styles.Text_597_561}>Cancel</Text>
      </View>
      <View style={styles.View_597_562}>
        <Text style={styles.Text_597_562}>Recent searches</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f982/8c1c/8437f883dab4c98e84242c8a69300af6"
        }}
        style={styles.ImageBackground_597_563}
      />
      <View style={styles.View_597_566} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
        }}
        style={styles.ImageBackground_597_567}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
        }}
        style={styles.ImageBackground_597_570}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
        }}
        style={styles.ImageBackground_597_573}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
        }}
        style={styles.ImageBackground_597_576}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6424/0e9d/b09c1ad5c7995887f02516e35a6e8e60"
        }}
        style={styles.ImageBackground_597_579}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
        }}
        style={styles.ImageBackground_597_582}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
        }}
        style={styles.ImageBackground_597_584}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
        }}
        style={styles.ImageBackground_597_586}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
        }}
        style={styles.ImageBackground_597_588}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a101/bdd2/129ae6d6ed456f18a4e9e6f0376101dc"
        }}
        style={styles.ImageBackground_597_590}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_597_553: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_597_554: {
    width: wp("8.746355685131196%"),
    top: hp("5.555550378697519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%")
  },
  Text_597_554: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_555: {
    width: wp("42.857142857142854%"),
    top: hp("35.31745735925573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%")
  },
  Text_597_555: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_556: {
    width: wp("23.9067055393586%"),
    top: hp("48.01586820879055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%")
  },
  Text_597_556: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_557: {
    width: wp("9.329446064139942%"),
    top: hp("60.71427905832538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%")
  },
  Text_597_557: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_558: {
    width: wp("30.32069970845481%"),
    top: hp("73.41268990786021%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%")
  },
  Text_597_558: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_559: {
    width: wp("17.20116618075802%"),
    top: hp("86.11110075739504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.329446064139942%")
  },
  Text_597_559: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_560: {
    width: wp("10.495626822157435%"),
    top: hp("5.555550378697519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.367346938775512%")
  },
  Text_597_560: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_561: {
    width: wp("9.037900874635568%"),
    top: hp("5.555550378697519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.71428571428571%")
  },
  Text_597_561: {
    color: "rgba(121, 122, 124, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_562: {
    width: wp("27.113702623906704%"),
    top: hp("21.825403111581583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  Text_597_562: {
    color: "rgba(116, 116, 128, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_597_563: {
    width: wp("4.081594839735559%"),
    height: hp("5.555282476294131%"),
    top: hp("6.746085363489981%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  View_597_566: {
    width: wp("0.2915451895043732%"),
    height: hp("5.952383725697757%"),
    top: hp("6.349193776836833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.367346938775512%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_597_567: {
    width: wp("4.081632653061225%"),
    height: hp("5.55555620266281%"),
    top: hp("36.111100757395036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_570: {
    width: wp("4.081632653061225%"),
    height: hp("5.55555620266281%"),
    top: hp("48.80953490279103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_573: {
    width: wp("4.081632653061225%"),
    height: hp("5.55555620266281%"),
    top: hp("61.50794575232585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_576: {
    width: wp("4.081632653061225%"),
    height: hp("5.55555620266281%"),
    top: hp("74.20635660186069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_579: {
    width: wp("4.081632653061225%"),
    height: hp("5.555555474667149%"),
    top: hp("86.90476745139551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437316%")
  },
  ImageBackground_597_582: {
    width: wp("3.498542274052478%"),
    height: hp("4.761906980558206%"),
    top: hp("36.50792245646469%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_584: {
    width: wp("3.498542274052478%"),
    height: hp("4.761909892540852%"),
    top: hp("49.20635660186068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_586: {
    width: wp("3.498542274052478%"),
    height: hp("4.761904068575561%"),
    top: hp("61.904767451395514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_588: {
    width: wp("3.498542274052478%"),
    height: hp("4.761906980558206%"),
    top: hp("74.60317830093034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.88046647230321%")
  },
  ImageBackground_597_590: {
    width: wp("3.498542274052478%"),
    height: hp("4.761905524566883%"),
    top: hp("87.30158915046518%"),
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
