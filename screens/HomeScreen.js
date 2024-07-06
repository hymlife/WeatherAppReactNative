import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme/theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { dropShadow } from "tailwind-rn/unsupported-core-plugins";

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  return (
    <View className="flex-1 realative">
      <StatusBar style="dark" />
      {/* bg image */}
      <Image
        source={require("../assets/images/bg.png")}
        blurRadius={70}
        className="w-full h-full absolute"
      />

      <SafeAreaView className="flex-1 flex">
        {/* arama alanı */}
        <View style={{ height: "7%" }} className="mx-4 realitive z-50 ">
          <View
            className=" flex-row  items-center justify-end rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Şehir Ara"
                placeholderTextColor={"lightgray"}
                className="flex-1 pl-6 pb-1 h-10 text-base text-lg text-white"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.2) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="20" color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((location, index) => {
                return (
                  <TouchableOpacity>
                    <Text>London, United Kingdom</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
