import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderBook = () => {
  return (
    <View style={styles.container}>
      <Text>Order Book</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
});

export default OrderBook;
