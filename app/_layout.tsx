import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(1,167,129)" }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "BTC/USD 24,929",
          }}
        />
      </Stack>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}
