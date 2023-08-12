import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import LoginWhiteBtn from "../components/LoginWhiteBtn";
import SignUpBtn from "../components/SignUpBtn";
import { Color, FontFamily } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View style={[styles.groupInner, styles.groupInnerBg]} />
        <View style={[styles.rectangleView, styles.groupInnerBg]} />
      </View>
      <Image
        style={[styles.ornamentalChillyPointed1Icon, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/ornamentalchillypointed-1.png")}
      />
      <LinearGradient
        style={[styles.homeChild, styles.groupItemPosition]}
        locations={[0.49, 1]}
        colors={["rgba(13, 152, 106, 0.8)", "#0d986a"]}
      />
      <View style={[styles.welcomeToParent, styles.parentPosition]}>
        <Text style={[styles.welcomeTo, styles.welcomeToFlexBox]}>
          Welcome to
        </Text>
        <Text
          style={[styles.agrodisease, styles.welcomeToFlexBox]}
        >{`AgroDisease `}</Text>
      </View>
      <View style={[styles.loginWhiteBtnParent, styles.parentPosition]}>
        <LoginWhiteBtn
          loginWhiteBtnPosition="unset"
          loginWhiteBtnWidth="unset"
          loginWhiteBtnAlignSelf="stretch"
        />
        <SignUpBtn
          signUpBtnPosition="unset"
          signUpBtnWidth="unset"
          signUpBtnAlignSelf="stretch"
          signUpBtnMarginTop={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    position: "absolute",
    top: 0,
  },
  groupLayout: {
    width: 175,
    backgroundColor: Color.crimson,
    left: 18,
  },
  groupItemPosition: {
    bottom: 0,
    position: "absolute",
  },
  groupInnerBg: {
    backgroundColor: Color.mediumspringgreen,
    width: 175,
    position: "absolute",
  },
  parentPosition: {
    justifyContent: "center",
    alignItems: "center",
    left: 24,
    right: 24,
    position: "absolute",
  },
  welcomeToFlexBox: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 41,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  groupChild: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    height: 34,
    width: 175,
    backgroundColor: Color.crimson,
    left: 18,
  },
  groupInner: {
    top: 44,
    height: 98,
    left: 0,
  },
  rectangleView: {
    top: 762,
    height: 48,
    left: 18,
    backgroundColor: Color.mediumspringgreen,
  },
  rectangleParent: {
    left: 302,
    width: 193,
    display: "none",
    top: 0,
    height: 844,
  },
  ornamentalChillyPointed1Icon: {
    right: -248,
    bottom: -6,
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  homeChild: {
    right: 0,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  welcomeTo: {
    fontSize: 22,
  },
  agrodisease: {
    fontSize: 48,
    marginTop: 32,
  },
  welcomeToParent: {
    top: 328,
    bottom: 402,
  },
  loginWhiteBtnParent: {
    bottom: 84,
    height: 152,
  },
  home: {
    borderRadius: 30,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default Home;
