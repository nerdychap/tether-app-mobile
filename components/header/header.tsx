import React from "react";
import { View } from "react-native";
import CustomButton from "../button/CustomButton";

const Header = () => {
  return (
    <View
      style={{
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 2,
        alignItems: "center",
      }}
    >
      <CustomButton title="Disconnect" onPress={() => null} />
      <CustomButton title="Connect" onPress={() => null} />
    </View>
  );
};

export default Header;
