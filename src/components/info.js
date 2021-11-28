import { Image, View } from "react-native";

import React from "react";
import { appStyles } from "../styles/styles";

export class Info extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require("./src/assets/images/illustration.png")}
          style={appStyles.illustration}
        ></Image>
        <View style={appStyles.primaryHeadingContainer}>
          <Text style={appStyles.primaryHeading}>Mint Your Andy</Text>
        </View>
        <View style={{ alignContent: "center" }}>
          <Text style={appStyles.descText}>
            For your andy NFT to move from our{"\n"} servers to your wallet, we
            need a{"\n"}
            blockchain address you own.
          </Text>
        </View>
        <View style={appStyles.buttonContainer}>
          <TouchableOpacity style={[appStyles.btn, appStyles.primaryBtn]}>
            <Text style={appStyles.primaryText}>Enter Existing address</Text>
          </TouchableOpacity>
          <Text style={appStyles.btnContainerText}>OR</Text>
          <TouchableOpacity style={[appStyles.btn, appStyles.secondaryBtn]}>
            <Text style={appStyles.secondaryText}>
              Create a free crypto wallet
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={appStyles.hyperlinkText}
          onPress={() => {
            Linking.openURL("http://google.com");
          }}
        >
          Can I mint my NFT Later?
        </Text>
      </View>
    );
  }
}
