import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin} from '../slices/navSlice';

const HomeScrees = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "http://res.cloudinary.com/mckltype/image/upload/v1538425583/c1nub6bq608klmbu1r4t.jpg",
          }}
        />
        <GooglePlacesAutocomplete
            styles={{
                container: {
                    flex: 0,
                },
                textInput: {
                    fontSize: 18,
                }
            }}
            onPress={(data, detail= null)=> {
                dispatch(setOrigin({
                    location:detail.geometry.location,
                    description: data.description
                }))
                dispatch(setDestination(null));
            }}
            enablePoweredByContainer={false}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language:'en'
            }}
            placeholder="Where From? "
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScrees;

const styles = StyleSheet.create({});
