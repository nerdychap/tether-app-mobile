import CustomButton from "@/components/button/CustomButton";
import Header from "@/components/header/header";
import OrderBook from "@/components/screens/OrderBook";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <OrderBook />
    </View>
  );
}
