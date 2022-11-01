import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";

export default function TopProduct() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Sugar Substitute",
      img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2F149777215.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fdsm-sugar-facts-shutterstock-1564269901.jpg&imgrefurl=https%3A%2F%2Fwww.diabetesselfmanagement.com%2Fhealthy-living%2Fnutrition-exercise%2Fsugar-fact-or-fiction%2F&tbnid=cCiSOa9yrNnguM&vet=12ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ..i&docid=UiS-MT9TZvi0vM&w=800&h=450&q=sugar&ved=2ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ',
      price: 112,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Juices & Vinegars",
      img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2F149777215.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fdsm-sugar-facts-shutterstock-1564269901.jpg&imgrefurl=https%3A%2F%2Fwww.diabetesselfmanagement.com%2Fhealthy-living%2Fnutrition-exercise%2Fsugar-fact-or-fiction%2F&tbnid=cCiSOa9yrNnguM&vet=12ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ..i&docid=UiS-MT9TZvi0vM&w=800&h=450&q=sugar&ved=2ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ',
      price: 150,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Vitamins Medicines",
      img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2F149777215.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fdsm-sugar-facts-shutterstock-1564269901.jpg&imgrefurl=https%3A%2F%2Fwww.diabetesselfmanagement.com%2Fhealthy-living%2Fnutrition-exercise%2Fsugar-fact-or-fiction%2F&tbnid=cCiSOa9yrNnguM&vet=12ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ..i&docid=UiS-MT9TZvi0vM&w=800&h=450&q=sugar&ved=2ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ',
      price: 112,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb27ba",
      name: "Sugar Substitute",
      img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2F149777215.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fdsm-sugar-facts-shutterstock-1564269901.jpg&imgrefurl=https%3A%2F%2Fwww.diabetesselfmanagement.com%2Fhealthy-living%2Fnutrition-exercise%2Fsugar-fact-or-fiction%2F&tbnid=cCiSOa9yrNnguM&vet=12ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ..i&docid=UiS-MT9TZvi0vM&w=800&h=450&q=sugar&ved=2ahUKEwjh29Trx4z7AhVIc5QKHV2EBk0QMygFegUIARDMAQ',
      price: 150,
    },
  ];
  // topProduct
  const Item = ({ name, img }) => (
    <View style={styles.item}>
      <Image style={styles.imgTopProduct} source={{uri:{img}}} />
      <Text style={styles.nameTopProduct}>{name}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item name={item.name} img={item.img} />;
  return (
    <View style={styles.topPro}>
      <Text style={styles.title3}>Diabetic Diet</Text>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  topPro: {
    flex: 2,
  },
  title3: {
    position: "relative",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  imgTopProduct: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameTopProduct: {
    width: 100,
    textAlign: "center",
    padding: 10,
  },
});