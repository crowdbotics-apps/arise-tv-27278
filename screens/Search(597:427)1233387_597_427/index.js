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
      <View style={styles.View_597_428}>
        <Text style={styles.Text_597_428}>|</Text>
      </View>
      <View style={styles.View_597_429}>
        <Text style={styles.Text_597_429}>Cancel</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_597_428: {
    width: wp("1.2944983818770228%"),
    minWidth: wp("1.2944983818770228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8834951456310676%"),
    top: hp("22.22222222222222%")
  },
  Text_597_428: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_597_429: {
    width: wp("17.475728155339805%"),
    minWidth: wp("17.475728155339805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.52427184466019%"),
    top: hp("22.22222222222222%")
  },
  Text_597_429: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
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
