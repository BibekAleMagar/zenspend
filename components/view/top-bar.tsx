import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const TopBar = () => {
  const date = new Date();

  const month = date.toLocaleString("en-US", { month: "short" }); // Jan
  const day = date.getDate();
  return (
    <>
      <View className="shadow-lg pb-2 flex flex-row bg-white justify-between items-center py-1">
        <View>
          <Text className="font-bold text-3xl">ZenSpend</Text>
          <Text className="text-lg font-bold text-gray-400">
            {month} {day}
          </Text>
        </View>
        <View className="p-2 bg-[#12a2bb] rounded-3xl">
          <Ionicons name="cash-outline" size={40} color="white" className="" />
        </View>
      </View>
    </>
  );
};
