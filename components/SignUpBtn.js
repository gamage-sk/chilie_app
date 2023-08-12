import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SignUpBtn = ({
  signUpBtnPosition,
  signUpBtnWidth,
  signUpBtnAlignSelf,
  signUpBtnMarginTop,
}) => {
  const signUpBtnStyle = useMemo(() => {
    return {
      ...getStyleValue("position", signUpBtnPosition),
      ...getStyleValue("width", signUpBtnWidth),
      ...getStyleValue("alignSelf", signUpBtnAlignSelf),
      ...getStyleValue("marginTop", signUpBtnMarginTop),
    };
  }, [
    signUpBtnPosition,
    signUpBtnWidth,
    signUpBtnAlignSelf,
    signUpBtnMarginTop,
  ]);

  return (
    <View style={[styles.signUpBtn, signUpBtnStyle]}>
      <Text style={styles.signUp}>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray,
    textAlign: "center",
  },
  signUpBtn: {
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 342,
    height: 64,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 139,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUpBtn;
