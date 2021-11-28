import * as React from "react";

import Drawer from "react-native-drawer";
import { Header } from "./src/components/header";
import { Info } from "./src/components/info";
import { InstBar } from "./src/components/instbar";
import { Navbar } from "./src/components/navbar";
import { ScrollView } from "react-native";
import { appStyles } from "./src/styles/styles";

export class App extends React.Component {
  closeNavbarDrawer = () => {
    this._drawer.close();
  };

  openNavbarDrawer = () => {
    this._drawer.open();
  };
  render() {
    return (
      <Drawer
        ref={(ref) => (this._drawer = ref)}
        content={<Navbar />}
        type="overlay"
        openDrawerOffset={100}
        disabled={false}
        side="right"
      >
        <ScrollView
          style={appStyles.mainContainer}
          contentContainerStyle={appStyles.mainContentContainer}
        >
          <Header drawerHandler={this.openNavbarDrawer} />
          <InstBar />
          <Info />
        </ScrollView>
      </Drawer>
    );
  }
}

export default App;
