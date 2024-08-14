import React from "react";
import {
    GestureResponderEvent,
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle
} from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  textStyles?: StyleProp<TextStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
};

const CustomButton = ({
  title,
  onPress,
  textStyles,
  buttonStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
