import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { navStyles } from "../styles/styles";

export class Navbar extends React.Component {
  render() {
    return (
      <View style={navStyles.navbarDrawerContainer}>
        <Text style={navStyles.primaryHeading}>Navbar</Text>
        <TouchableOpacity style={navStyles.navBtn}>
          <Text style={navStyles.navBtnText}>Link1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={navStyles.navBtn}>
          <Text style={navStyles.navBtnText}>Link2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={navStyles.navBtn}>
          <Text style={navStyles.navBtnText}>Link3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
