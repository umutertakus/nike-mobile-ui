import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import ShoppingCartFooter from "../components/ShoppingCartFooter";

const ShoppingCart = () => {
  return (
    <React.Fragment>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartFooter}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
