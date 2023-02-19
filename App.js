import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
