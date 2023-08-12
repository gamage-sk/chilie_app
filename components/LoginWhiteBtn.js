import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LoginWhiteBtn = ({
  loginWhiteBtnPosition,
  loginWhiteBtnWidth,
  loginWhiteBtnAlignSelf,
}) => {
  const loginWhiteBtnStyle = useMemo(() => {
    return {
      ...getStyleValue("position", loginWhiteBtnPosition),
      ...getStyleValue("width", loginWhiteBtnWidth),
      ...getStyleValue("alignSelf", loginWhiteBtnAlignSelf),
    };
  }, [loginWhiteBtnPosition, loginWhiteBtnWidth, loginWhiteBtnAlignSelf]);

  return (
    <View style={[styles.loginWhiteBtn, loginWhiteBtnStyle]}>
      <Text style={styles.login}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.seagreen,
    textAlign: "center",
  },
  loginWhiteBtn: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.white,
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

export default LoginWhiteBtn;
