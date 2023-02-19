import {
  View,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React from "react";
import products from "../data/products";

const ProductDetailScreen = () => {
  const product = products[0];
  const { width } = useWindowDimensions();
  return (
    <View>
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: width, aspectRatio: 1 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
