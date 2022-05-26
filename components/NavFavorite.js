import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { setDestination, setOrigin} from '../slices/navSlice';

const testData = [
  {
    id: "1",
    icon: "home",
    location: "London, UK",
    address: "Code Street, London, UK",
    geometry:{
        "lat": 51.5072178,
        "lng": -0.1275862,
      },

  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    address: "McDonald, London, UK",
    geometry:{
        "lat": 51.5072178,
        "lng": -0.1275862,
      },

  },
  {
    id: "3",
    icon: "briefcase",
    location: "Work",
    address: "McDonald, London, UK",
    geometry:{
        "lat": 51.5072178,
        "lng": -0.1275862,
      },

  },

];
const NavFavorite = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <FlatList
      data={testData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={()=> (
          <View style={[tw`bg-gray-200`,{height:0.5}]}/>
      )}
      renderItem={({ item: { location, address, icon },item }) => (
        <TouchableOpacity 
        onPress={()=> {
            dispatch(setOrigin({
                location:item.geometry,
                description: item.location
            }))
            dispatch(setDestination(null));
            navigation.navigate("MapScreen")
        }}

        style={tw`flex-row items-center p-5`}>
          <Icon
           style={tw`mr-4 rounded-full bg-gray-300 p-3`} 
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{address}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorite;

const styles = StyleSheet.create({});
