import { Platform, StatusBar, StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  mainContainer: {
    paddingLeft: "8%",
    paddingRight: "8%",
    backgroundColor: "#FCFCFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 20,
  },
  mainContentContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:20
  },
  bar: {
    width: "100%",
    height: 40,
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
  },
  barTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  barText: {
    textAlign: "center",
    fontSize: 14,
  },
  ellipse: {
    width: 30,
    height: 30,
  },
  ellipseBar: {
    position: "absolute",
    width: "100%",
    height: 8,
    borderRadius: 10,
  },
  ellipseContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    borderRadius: 6,
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtn: {
    backgroundColor: "#C4A0F9",
  },
  secondaryBtn: {
    borderColor: "#C4A0F9",
    borderWidth: 4,
  },
  buttonContainer: {
    marginTop: 15,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  primaryHeadingContainer: {
    marginTop: "3%",
    marginBottom: "3%",
  },
  primaryHeading: {
    textAlign: "center",
    color: "#4e5d78",
    fontSize: 28,
  },
  descText: {
    textAlign: "center",
    lineHeight: 28,
    color: "#8a94a6",
    fontSize: 18,
  },
  illustration: {
    marginTop: "5%",
    width: "90%",
  },
  btnContainerText: {
    fontSize: 18,
    color: "#8a94a6",
    marginTop: 10,
    marginBottom: 10,
  },
  primaryText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  secondaryText: {
    fontSize: 18,
    color: "#4e5d78",
  },
  hyperlinkText: {
    color: "#4e5d78",
    textDecorationLine: "underline",
    fontSize: 16,
    marginTop: 25,
  }
});

export const navStyles = StyleSheet.create({
    navbarDrawerContainer: {
      backgroundColor: "#C4A0F9",
      width: "100%",
      height: "100%",
      paddingLeft: "10%",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
    },
    primaryHeading: { color: "white", fontSize: 32 },
    navBtn: {
      width: "90%",
      height: 40,
      backgroundColor: "white",
      marginTop: 20,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    navBtnText: {
      fontSize: 16,
    },
  });
