import { useNavigation } from "@react-navigation/core";
import React,{useState} from "react";
import {
    FlatList,
    Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInformation } from "../slices/navSlice";

const car = [
    {
        id:"1",
        title:"Uber X",
        multiplier:1,
        image:"https://links.papareact.com/3pn"
    },
    {
        id:"2",
        title:"Uber XL",
        multiplier:1.2,
        image:"https://links.papareact.com/5w8"
    },
    {
        id:"Uber-x-3",
        title:"Uber LUX",
        multiplier:1.5,
        image:"https://links.papareact.com/7pf"
    }
]
  
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 p-3 z-10 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl py-5`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList
        data={car}
        keyExtractor={(item)=> item.id}
        renderItem={({item:{id, title, multiplier, image}, item})=>(
            <TouchableOpacity
            onPress={()=> setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>Estimated Time of Arrival </Text>
                <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
                {new Intl.NumberFormat("en-US",{
                    style:"currency",
                    currency:"USD"
                }).format(
                    (travelTimeInformation?.duration.value * multiplier)/100
                )}
                </Text>
            </TouchableOpacity>
        )}
      />
      <View>
          <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 rounded-md ${!selected && "bg-gray-300"}`}>
              <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
