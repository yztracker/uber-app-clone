import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
const HomeScrees = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{width:100, height:100, resizeMode:"contain"}}
                    source={{uri: "http://res.cloudinary.com/mckltype/image/upload/v1538425583/c1nub6bq608klmbu1r4t.jpg"}}
                />
                <NavOptions/>
            </View>

        </SafeAreaView>
    )
}

export default HomeScrees

const styles = StyleSheet.create({})
