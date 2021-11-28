import { Image, TouchableOpacity, View } from "react-native";

import React from "react";
import { appStyles } from "../styles/styles";

export class Header extends React.Component {
  render() {
    return (
      <View style={appStyles.headerContainer}>
        <Image source={require("..//assets/images/logo.png")}></Image>
        <TouchableOpacity onPress={this.props.drawerHandler}>
          <View>
            <Image
              source={require("../assets/images/hamburger.png")}
              style={{ height: 30, width: 30 }}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
