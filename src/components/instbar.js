import { Image, Text, View } from "react-native";

import React from "react";
import { appStyles } from "../styles/styles";

export class InstBar extends React.Component {
  render() {
    return (
      <View>
        <View style={appStyles.bar}>
          <Image
            source={require("../assets/images/bar.png")}
            style={appStyles.ellipseBar}
          ></Image>
          <View style={appStyles.ellipseContainer}>
            <Image
              source={require("../assets/images/ellipse.png")}
              style={appStyles.ellipse}
            />
            <Image
              source={require("../assets/images/ellipse.png")}
              style={appStyles.ellipse}
            />
            <Image
              source={require("../assets/images/ellipse.png")}
              style={appStyles.ellipse}
            />
          </View>
        </View>
        <View style={appStyles.barTextContainer}>
          <Text style={appStyles.barText}>Select Andy</Text>
          <Text style={appStyles.barText}>Wallet Detail</Text>
          <Text style={appStyles.barText}>Payment</Text>
        </View>
      </View>
    );
  }
}
