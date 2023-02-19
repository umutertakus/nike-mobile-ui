import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "../store/cartSlice";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const navigation = useNavigation();
  const numberOfItems = useSelector(selectNumberOfItems)

  return (
    <TouchableOpacity
      style={{ flexDirection: "row" }}
      onPress={() => navigation.navigate("Cart")}
    >
      <FontAwesome5 name="shopping-cart" size={18} color="gray" />
      <Text style={{ marginLeft: 5, fontWeight: "500" }}>{numberOfItems}</Text>
    </TouchableOpacity>
  );
};

export default CartIcon;
