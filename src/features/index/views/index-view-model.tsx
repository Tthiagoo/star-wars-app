import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Image } from "expo-image";

export default function IndexViewModel() {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View className="flex items-center ">
      <Image
        source={require("../../../../assets/images/starwars.png")}
        style={{ width: "35%", height: "35%" }}
        placeholder={{ blurhash }}
      />
      <Text className="text-black text-lg font-bold dark:text-white">
        May the force be with you!
      </Text>
    </View>
  );
}
